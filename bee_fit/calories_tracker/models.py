from django.db import models
from user_profile.models import Health
class Food(models.Model):
    CATEGORIES = (
        ('S','Snack'),
        ('B','Breakfast'),
        ('L','Lunch'),
        ('D','Dinner'),
        ('C','Cheat Meal')
    )
    
    name = models.CharField(max_length = 100,null=True)
    total_calories = models.IntegerField()
    fat = models.IntegerField()
    protein = models.IntegerField()
    carbs = models.IntegerField()
    category = models.CharField(choices=CATEGORIES,max_length=1)
    date_eaten = models.DateField(auto_now_add=True)
    user = models.ForeignKey(Health, on_delete=models.CASCADE,null=True)

    def __str__(self):
        return f"{self.name}-{self.total_calories} - {self.date_eaten}"

    
    