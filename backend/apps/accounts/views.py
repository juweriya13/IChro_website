import logging

from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from rest_framework_simplejwt.tokens import RefreshToken

from .serializers import LoginSerializer

logger = logging.getLogger(__name__)


class LoginAPIView(APIView):
    """
    Authenticate admin user and return JWT tokens.
    """

    permission_classes = []

    def post(self, request):
        logger.info(
            "Login attempt for username: %s",
            request.data.get("username"),
        )

        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        user = serializer.validated_data["user"]

        refresh = RefreshToken.for_user(user)

        return Response(
            {
                "access": str(refresh.access_token),
                "refresh": str(refresh),
            },
            status=status.HTTP_200_OK,
        )


class LogoutAPIView(APIView):
    """
    Logout user by blacklisting the refresh token.
    """

    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            refresh_token = request.data.get("refresh")

            token = RefreshToken(refresh_token)

            token.blacklist()

            return Response(
                {
                    "message": "Logout successful."
                },
                status=status.HTTP_200_OK,
            )

        except Exception as e:
            logger.error(str(e))

            return Response(
                {
                    "error": "Invalid refresh token."
                },
                status=status.HTTP_400_BAD_REQUEST,
            )