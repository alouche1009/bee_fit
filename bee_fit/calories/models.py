from django.db import models
from user_profile.models import UserProfile

class Products(models.Model):
    url = models.TextField(blank=True, null=True)
    product_name = models.TextField(blank=True, null=True)
    quantity = models.TextField(blank=True, null=True)
    categories = models.TextField(blank=True, null=True)
    ingredients_text = models.TextField(blank=True, null=True)
    allergens = models.TextField(blank=True, null=True)
    traces = models.TextField(blank=True, null=True)
    serving_size = models.TextField(blank=True, null=True)
    serving_quantity = models.FloatField(blank=True, null=True)
    nutriscore_score = models.FloatField(blank=True, null=True)
    nutriscore_grade = models.TextField(blank=True, null=True)
    image_url = models.TextField(blank=True, null=True)
    image_small_url = models.TextField(blank=True, null=True)
    image_ingredients_url = models.TextField(blank=True, null=True)
    image_ingredients_small_url = models.TextField(blank=True, null=True)
    image_nutrition_url = models.TextField(blank=True, null=True)
    image_nutrition_small_url = models.TextField(blank=True, null=True)
    energy_kcal_100g = models.FloatField(db_column='energy-kcal_100g', blank=True, null=True)  # Field renamed to remove unsuitable characters.
    energy_100g = models.FloatField(blank=True, null=True)
    energy_from_fat_100g = models.FloatField(db_column='energy-from-fat_100g', blank=True, null=True)  # Field renamed to remove unsuitable characters.
    fat_100g = models.FloatField(blank=True, null=True)
    sugars_100g = models.FloatField(blank=True, null=True)
    proteins_100g = models.FloatField(blank=True, null=True)
    salt_100g = models.FloatField(blank=True, null=True)
    nutrition_score_fr_100g = models.FloatField(db_column='nutrition-score-fr_100g', blank=True, null=True)  # Field renamed to remove unsuitable characters.

    class Meta:
        ordering = ('product_name',)

    def __str__(self):
        return self.product_name
