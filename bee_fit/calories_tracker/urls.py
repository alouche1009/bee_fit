from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'api/meal', views.MealViewSet, basename='meal')

urlpatterns = [
    path('api/user/total-calories',views.total_user_calories),
    path('api/breakfast',views.breakfast_list),
    path('api/lunch',views.lunch_list),
    path('api/dinner',views.dinner_list), 
    path('api/30-day-calories',views.get_30_days_calories),
]

urlpatterns += router.urls