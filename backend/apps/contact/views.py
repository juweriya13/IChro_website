from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Contact
from .serializers import ContactSerializer
from rest_framework import generics
from rest_framework.permissions import IsAdminUser


class ContactListAPIView(generics.ListAPIView):
    """
    Returns all contact enquiries.
    Only staff/admin users can access this endpoint.
    """

    queryset = Contact.objects.order_by("-created_at")
    serializer_class = ContactSerializer
    permission_classes = [IsAdminUser]

class ContactDeleteAPIView(generics.DestroyAPIView):
    """
    Delete a contact enquiry.
    Only staff/admin users can delete enquiries.
    """

    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    permission_classes = [IsAdminUser]

class ContactCreateAPIView(APIView):
    """
    API to create a new contact enquiry.
    """

    def post(self, request):
        serializer = ContactSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()

            return Response(
                {
                    "message": "Contact enquiry submitted successfully.",
                    "data": serializer.data,
                },
                status=status.HTTP_201_CREATED,
            )

        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST,
        )
