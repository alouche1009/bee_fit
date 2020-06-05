from django.contrib.auth import get_user_model
from .serializers import UserSerializer
from rest_framework import viewsets
from django.shortcuts import render, get_object_or_404
from rest_framework import viewsets, generics
from .serializers import ProfileSerializer, WeightSerializer
from rest_framework.response import Response
from .models import Profile, Weight
from rest_framework.decorators import api_view, permission_classes
from rest_framework import permissions
from datetime import datetime as dt, timedelta

User = get_user_model()


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer

@api_view(['GET','PUT'])
@permission_classes([permissions.IsAuthenticated,])
def profile_detail(request):
    profile = Profile.objects.get(id=request.user.profile.id)
    if request.method == 'GET':
        serializer = ProfileSerializer(profile)
        return Response(serializer.data)
    
    if request.method == 'PUT':
        serializer = ProfileSerializer(profile,data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(user=profile.user)
        return Response(serializer.data)

@api_view(['GET','POST'])
@permission_classes([permissions.IsAuthenticated,])
def get_user_weight(request):
    today = dt.today()
    profile = Profile.objects.get(id=request.user.profile.id)

    if request.method == "GET":
        try:
            user_weight = Weight.objects.get(user=request.user.profile.id,date_recorded=today)
            return Response({"weight":user_weight.number})
        except:
            return Response({"error":"Weight record does not exist for today","weight":0})
    

    if request.method == "POST":
        #check if object exists
    
        if Weight.objects.filter(user=request.user.profile.id,date_recorded=today).exists():
            user_weight = Weight.objects.get(user=request.user.profile.id,date_recorded=today)
            #update value
            serializer = WeightSerializer(user_weight,data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save(user=profile)
        else:
            serializer = WeightSerializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save(user=profile)
        return Response({"message":"Updated user weight","weight":serializer.data})

@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated,])
def get_30_day_weight(request):
    today = dt.today()
    thirty_days_ago = today - timedelta(30)
    user_weight = Weight.objects.filter(user=request.user.profile.id,date_recorded__gte=thirty_days_ago)
    serializer=WeightSerializer(user_weight,many=True)
    return Response({
        "message":"Here's yo food",
        "data":serializer.data
    })