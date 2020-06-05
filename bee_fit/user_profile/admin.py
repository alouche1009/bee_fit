from django.contrib import admin
from .models import UserProfile, Weight, Profile

admin.site.register(UserProfile)
admin.site.register(Profile)
admin.site.register(Weight)