from datetime import date

from apps.contact.models import Contact


class DashboardService:

    @staticmethod
    def get_dashboard_data():

        today = date.today()

        total_enquiries = Contact.objects.count()

        today_enquiries = Contact.objects.filter(
            created_at__date=today
        ).count()

        monthly_enquiries = Contact.objects.filter(
            created_at__year=today.year,
            created_at__month=today.month,
        ).count()

        recent_enquiries = Contact.objects.values(
            "id",
            "name",
            "phone",
            "email",
            "created_at",
        )[:5]

        return {
            "stats": {
                "total_enquiries": total_enquiries,
                "today_enquiries": today_enquiries,
                "monthly_enquiries": monthly_enquiries,
                "pending_enquiries": total_enquiries,   # Temporary until status is added
            },
            "recent_enquiries": list(recent_enquiries),
        }