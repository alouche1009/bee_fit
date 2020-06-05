from django.db import models
from django.contrib.auth import get_user_model
from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MinValueValidator, MaxValueValidator
from multiselectfield import MultiSelectField
from django.contrib.postgres.fields import ArrayField
from django.dispatch import receiver
from django.db.models.signals import post_save, pre_delete

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
        validators=[MaxValueValidator(100), MinValueValidator(18)], blank=True, null=True)
    sexe = models.CharField(
        max_length=11,
        choices=SEXE_CHOICES,
        blank=True, 
        null=True
    )
    taille = models.PositiveIntegerField(
        validators=[MaxValueValidator(250), MinValueValidator(80)], blank=True, null=True)
    objectif_poids = models.FloatField(
        validators=[MaxValueValidator(300), MinValueValidator(20)], blank=True, null=True)
    expected_calories = models.IntegerField(blank=True, null=True, default = 2000)
    allergies = ArrayField(
        models.CharField(max_length=32, blank=True, null=True, choices=ALLERGIES_CHOICES),
        default=list,
        blank=True,
    )
    diabetique = models.CharField(
        max_length=5,
        choices=DIABETIQUE_CHOICES
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    user = models.OneToOneField(User, primary_key=True, related_name="userprofile", on_delete=models.CASCADE)

    @receiver(post_save, sender=User)
    def create_profile_for_user(sender, instance=None, created=False, **kwargs):
        if created:
            UserProfile.objects.get_or_create(user=instance)

    @receiver(pre_delete, sender=User)
    def delete_profile_for_user(sender, instance=None, **kwargs):
        if instance:
            user_profile = UserProfile.objects.get(user=instance)
            user_profile.delete()


class Profile(models.Model):
    daily_calories = models.IntegerField(null=True)
    goal_weight = models.FloatField(null=True)
    user = models.OneToOneField(User,on_delete=models.CASCADE)

def post_save_user_model_receiver(sender,instance,created,*args,**kwargs):
    if created:
        Profile.objects.create(user=instance)
    else:
        pass

class Weight(models.Model):
    user = models.ForeignKey(Profile, on_delete=models.CASCADE)
    number = models.FloatField()
    date_recorded = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"{self.user} - {self.number} - {self.date_recorded}"

post_save.connect(post_save_user_model_receiver,sender=User)