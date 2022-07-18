# from django.contrib.auth.models import AbstractUser
from django.db import models
# from django.urls import reverse
# from django.utils.translation import gettext_lazy as _


class People(models.Model):
    name = models.CharField("Name of User", blank=True, max_length=255)
    lattitude = models.CharField("Lattitude", blank=True, max_length=255)
    longtitude = models.CharField("Longtitude", blank=True, max_length=255)
    

    class Meta:
        indexes = [models.Index(fields=["name"], name="name_idx")]

    def somefunc(self):
        pass

    # Many lines...

    # class Meta:
    #     indexes = [models.Index(fields=["name"], name="name_idx")]
            

    # def get_absolute_url(self):
    #     """Get url for user's detail view.

    #     Returns:
    #         str: URL for user detail.

    #     """
    #     return reverse("users:detail", kwargs={"username": self.name})
