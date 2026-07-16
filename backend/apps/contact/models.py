from django.db import models

# Create your models here.
class Contact(models.Model):
    """
    Stores enquiries submitted from the website.
    """

    name = models.CharField(max_length=100)

    phone = models.CharField(max_length=10)

    email = models.EmailField(
        blank=True,
        null=True,
    )

    requirement = models.TextField()

    created_at = models.DateTimeField(
        auto_now_add=True,
    )

    class Meta:
        ordering = ["-created_at"]
        verbose_name = "Contact Enquiry"
        verbose_name_plural = "Contact Enquiries"

    def __str__(self):
        return self.name