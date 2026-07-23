from django.urls import path
from .views import (
    ContactAPIView,
    ContactStatusUpdateAPIView,
    ContactDetailAPIView,
)

urlpatterns = [
    path("", ContactAPIView.as_view(), name="contact"),

    path("detail/<int:pk>/", ContactDetailAPIView.as_view(), name="contact-detail"),

path(
    "<int:pk>/status/", ContactStatusUpdateAPIView.as_view(), name="contact-status",),
]