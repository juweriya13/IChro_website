from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.db.models import Q

from .models import Contact
from .serializers import ContactSerializer
from rest_framework import generics
from rest_framework.permissions import IsAdminUser

class ContactDetailAPIView(generics.RetrieveAPIView):
    """
    Get a single contact enquiry.
    """

    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    permission_classes = [IsAdminUser]

class ContactStatusUpdateAPIView(generics.UpdateAPIView):
    """
    Update only the status of a contact enquiry.
    """

    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    permission_classes = [IsAdminUser]
    http_method_names = ["patch"]

    def patch(self, request, *args, **kwargs):
        contact = self.get_object()

        status_value = request.data.get("status")

        if status_value not in ["pending", "completed"]:
            return Response(
                {"error": "Invalid status."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        contact.status = status_value
        contact.save(update_fields=["status"])

        serializer = self.get_serializer(contact)

        return Response(serializer.data)

class ContactAPIView(generics.ListCreateAPIView):
    serializer_class = ContactSerializer

    def get_permissions(self):
        if self.request.method == "GET":
            return [IsAdminUser()]
        return []

    def get_queryset(self):
        queryset = Contact.objects.all().order_by("-created_at")

        search = self.request.query_params.get("search")
        start_date = self.request.query_params.get("start_date")
        end_date = self.request.query_params.get("end_date")

        if search:
            queryset = queryset.filter(
                Q(name__icontains=search) |
                Q(phone__icontains=search)
            )

        if start_date:
            queryset = queryset.filter(created_at__date__gte=start_date)

        if end_date:
            queryset = queryset.filter(created_at__date__lte=end_date)

        return queryset

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)

        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(
            {
                "message": "Contact enquiry submitted successfully.",
                "data": serializer.data,
            },
            status=status.HTTP_201_CREATED,
        )

class ContactDeleteAPIView(generics.DestroyAPIView):
    """
    Delete a contact enquiry.
    Only staff/admin users can delete enquiries.
    """

    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    permission_classes = [IsAdminUser]

# class ContactCreateAPIView(APIView):
#     """
#     API to create a new contact enquiry.
#     """

#     def post(self, request):
#         serializer = ContactSerializer(data=request.data)

#         if serializer.is_valid():
#             serializer.save()

#             return Response(
#                 {
#                     "message": "Contact enquiry submitted successfully.",
#                     "data": serializer.data,
#                 },
#                 status=status.HTTP_201_CREATED,
#             )

#         return Response(
#             serializer.errors,
#             status=status.HTTP_400_BAD_REQUEST,
#         )
