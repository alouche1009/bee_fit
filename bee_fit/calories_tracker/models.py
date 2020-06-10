from django.db import models
from user_profile.models import Health
class Meal(models.Model):
    MEAL_TYPES = (
        ('BREAKFAST','Breakfast'),
        ('LUNCH','Lunch'),
        ('DINNER','Dinner'),
    )
    
    name = models.CharField(max_length = 100,null=True)
    daily_calories = models.IntegerField()
    fat = models.IntegerField()
    protein = models.IntegerField()
    carbs = models.IntegerField()
    meal_type = models.CharField(choices=MEAL_TYPES, max_length=9)
    dayDate = models.DateField(auto_now_add=True)
    user = models.ForeignKey(Health, on_delete=models.CASCADE,null=True)

    def __str__(self):
        return f"{self.name}-{self.daily_calories} - {self.dayDate}"

    
    