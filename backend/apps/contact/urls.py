from django.urls import path
from .views import (
    ContactAPIView,
    ContactDeleteAPIView,
    ContactDetailAPIView,
)

urlpatterns = [
    path("", ContactAPIView.as_view(), name="contact"),

    path("detail/<int:pk>/", ContactDetailAPIView.as_view(), name="contact-detail"),

    path("<int:pk>/", ContactDeleteAPIView.as_view(), name="contact-delete"),
]