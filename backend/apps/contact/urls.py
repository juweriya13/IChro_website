from django.urls import path

from .views import (ContactCreateAPIView, ContactListAPIView, ContactDeleteAPIView)


urlpatterns = [
    path(
        "",
        ContactCreateAPIView.as_view(),
        name="contact-create",
    ),
    path(
        "list/",
        ContactListAPIView.as_view(),
        name="contact-list",
    ),
    path(
        "<int:pk>/",
        ContactDeleteAPIView.as_view(),
        name="contact-delete",
    ),
]