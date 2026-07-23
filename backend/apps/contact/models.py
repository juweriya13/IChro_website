from django.db import models


class Contact(models.Model):
    """
    Stores enquiries submitted from the website.
    """

    STATUS_CHOICES = [
        ("pending", "Pending"),
        ("completed", "Completed"),
    ]

    name = models.CharField(max_length=100)

    phone = models.CharField(max_length=10)

    email = models.EmailField(
        blank=True,
        null=True,
    )

    requirement = models.TextField()

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default="pending",
    )

    created_at = models.DateTimeField(
        auto_now_add=True,
    )

    class Meta:
        ordering = ["-created_at"]
        verbose_name = "Contact Enquiry"
        verbose_name_plural = "Contact Enquiries"

    def __str__(self):
        return self.name