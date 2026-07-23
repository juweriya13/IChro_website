import logging

from rest_framework import status
from rest_framework.permissions import (
    AllowAny,
    IsAuthenticated,
)
from rest_framework.response import Response
from rest_framework.views import APIView

from rest_framework_simplejwt.tokens import RefreshToken

from .serializers import LoginSerializer

logger = logging.getLogger(__name__)


class LoginAPIView(APIView):
    """
    Authenticate Admin User.
    """

    permission_classes = [AllowAny]

    def post(self, request):

        logger.info(
            "Login attempt: %s",
            request.data.get("username"),
        )

        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        user = serializer.validated_data["user"]

        # Allow only admin/staff users
        if not user.is_staff:
            return Response(
                {
                    "detail": "You are not authorized to access the admin panel."
                },
                status=status.HTTP_403_FORBIDDEN,
            )

        refresh = RefreshToken.for_user(user)

        logger.info(
            "Admin %s logged in successfully.",
            user.username,
        )

        return Response(
            {
                "access": str(refresh.access_token),
                "refresh": str(refresh),
            },
            status=status.HTTP_200_OK,
        )


class LogoutAPIView(APIView):
    """
    Logout User.
    """

    permission_classes = [IsAuthenticated]

    def post(self, request):

        refresh_token = request.data.get("refresh")

        if not refresh_token:
            return Response(
                {
                    "detail": "Refresh token is required."
                },
                status=status.HTTP_400_BAD_REQUEST,
            )

        try:

            token = RefreshToken(refresh_token)

            token.blacklist()

            logger.info(
                "Admin %s logged out.",
                request.user.username,
            )

            return Response(
                {
                    "message": "Logout successful."
                },
                status=status.HTTP_200_OK,
            )

        except Exception:

            return Response(
                {
                    "detail": "Invalid refresh token."
                },
                status=status.HTTP_400_BAD_REQUEST,
            )