from django.db import models
from django.contrib.auth.models import User


class Infos(models.Model):
    age = models.IntegerField
    sexe = models.CharField(max_length = 255)
    taille = models.IntegerField
    poids = models.IntegerField
    objectif_poids = models.IntegerField
    expected_calories = models.IntegerField(default=2000)
    allergies = models.CharField(max_length = 255)
    diabetique = models.BooleanField(default=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE)