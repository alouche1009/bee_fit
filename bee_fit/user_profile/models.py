from django.db import models
from django.contrib.auth import get_user_model
from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MinValueValidator, MaxValueValidator
from multiselectfield import MultiSelectField
from django.contrib.postgres.fields import ArrayField

User = get_user_model()

class UserProfile(models.Model):
    LACTOSE = 'LACTOSE'
    GLUTEN = 'GLUTEN'
    VEGETARIEN = 'VEGETARIEN'
    ARACHIDES = 'ARACHIDES'
    FRUITS_DE_MER = 'FRUITS_DE_MER'
    FEMME = 'FEMME'
    HOMME = 'HOMME'
    NON_BINAIRE = 'NON_BINAIRE'
    OUI = 'OUI'
    NON = 'NON'
    DIABETIQUE_CHOICES = [
        (OUI, 'Oui'),
        (NON, 'Non'),
    ]
    SEXE_CHOICES = [
        (FEMME, 'Femme'),
        (HOMME, 'Homme'),
        (NON_BINAIRE, 'Non binaire'),
    ]
    ALLERGIES_CHOICES = [
        (LACTOSE, 'Lactose'),
        (GLUTEN, 'Gluten'),
        (VEGETARIEN, 'Végétarien'),
        (ARACHIDES, 'Arachides'),
        (FRUITS_DE_MER, 'Fruits de mer'),
    ]
    age = models.PositiveIntegerField(
        validators=[MaxValueValidator(100), MinValueValidator(18)], default=0)
    sexe = models.CharField(
        max_length=11,
        choices=SEXE_CHOICES,
        default=FEMME,
    )
    taille = models.PositiveIntegerField(
        validators=[MaxValueValidator(250), MinValueValidator(80)], default=0)
    poids = models.FloatField(
        validators=[MaxValueValidator(300), MinValueValidator(0)], default=0)
    objectif_poids = models.FloatField(
        validators=[MaxValueValidator(300), MinValueValidator(20)], default=0)
    expected_calories = models.IntegerField(default=2000)
    allergies = ArrayField(
        models.CharField(max_length=32, blank=True, choices=ALLERGIES_CHOICES),
        default=list,
        blank=True,
    )
    diabetique = models.CharField(
        max_length=5,
        choices=DIABETIQUE_CHOICES
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True)
