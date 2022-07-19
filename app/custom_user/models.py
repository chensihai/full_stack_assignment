from django.contrib.auth.models import AbstractUser
from django.db import models
# from django.urls import reverse
from django.utils.translation import gettext_lazy as _
from .managers import CustomUserManager


class CustomUser(AbstractUser):
    username = None
    # first_name = models.CharField("First Name", blank=True, max_length=100)
    # last_name = models.CharField("Last Name", blank=True, max_length=100)
    email = models.EmailField(_('email address'), unique=True)
    password = models.CharField(_("Password"), blank=True, max_length=100)
    phone = models.CharField(_("Phone"), blank=True, max_length=100)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    class Meta:
        indexes = [models.Index(fields=["email"], name="email_idx")]

    def somefunc(self):
        pass

    objects = CustomUserManager()

    def __str__(self):
        return self.email
    # Many lines...

    # class Meta:
    #     indexes = [models.Index(fields=["name"], name="name_idx")]
            

    # def get_absolute_url(self):
    #     """Get url for user's detail view.

    #     Returns:
    #         str: URL for user detail.

    #     """
    #     return reverse("users:detail", kwargs={"username": self.name})

