from django.shortcuts import render
from rest_framework import viewsets, permissions
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .serializers import MealSerializer
from .models import Meal
from user_profile.models import Health
from user_profile.serializers import UserSerializer, HealthSerializer
from django.utils import timezone
from datetime import datetime as dt, timedelta
from django.db.models import Sum

class MealViewSet(viewsets.ModelViewSet):
    serializer_class = MealSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        today = dt.today()
        tomorrow = today + timedelta(1)

        return Meal.objects.filter(user=self.request.user.health.id, dayDate__range=[today, tomorrow])
    
    def perform_create(self,serializer):
        serializer.save(user=self.request.user.health)

@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated,])
def breakfast_list(request):
    today = dt.today()
    tomorrow = today + timedelta(1)

    try:
        breakfast = Meal.objects.filter(user=request.user.health.id, meal_type="BREAKFAST", dayDate__range=[today, tomorrow])
        print(breakfast)
        serializer = MealSerializer(breakfast, many=True)
        return Response({"message":"Votre petit-déjeuner", "data": serializer.data})
    except:
        return Response({"message":"Aucun petit-déjeuner"})

@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated,])
def lunch_list(request):
    today = dt.today()
    tomorrow = today + timedelta(1)

    try:
        lunch = Meal.objects.filter(user=request.user.health.id, meal_type="LUNCH", dayDate__range=[today, tomorrow])
        serializer = MealSerializer(lunch, many=True)
        return Response({"message":"Votre déjeuner", "data": serializer.data})
    except:
        return Response({"message":"Aucun déjeuner"})
 
@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated,])
def dinner_list(request):
    today = dt.today()
    tomorrow = today + timedelta(1)

    try:
        dinner = Meal.objects.filter(user=request.user.health.id, meal_type="DINNER", dayDate__range=[today, tomorrow])
        serializer = MealSerializer(dinner, many=True)
        return Response({"message":"Votre dîner", "data": serializer.data})
    except:
        return Response({"message":"Aucun dîner"})

@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated,])
def total_user_calories(request):
    today = dt.today()
    tomorrow = today + timedelta(1)
    user_meal = Meal.objects.filter(user=request.user.health.id, dayDate__range=[today, tomorrow])
    total = user_meal.aggregate(Sum('daily_calories'), Sum('fat'), Sum('protein'), Sum('carbs'))
    totalCalories = total["daily_calories__sum"]
    fatCalories = total["fat__sum"]
    proteinCalories = total["protein__sum"]
    carbsCalories = total["carbs__sum"]

    return Response({"message":"Vos calories","data":{"date":today,"totalCalories":totalCalories, "fatCalories":fatCalories, "proteinCalories":proteinCalories, "carbsCalories":carbsCalories}})

@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated])
def get_30_days_calories(request):
    today = dt.today()
    thirty_days_ago = today - timedelta(30)
    user_meal = Meal.objects.filter(user=request.user.health.id, dayDate__gte=thirty_days_ago)
    filtered_meal = user_meal.values('dayDate').annotate(totalCalories=Sum('daily_calories'))
    
    return Response({
        "message":"Vos calories ce mois-ci",
        "data":filtered_meal
    })