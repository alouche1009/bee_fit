from django.contrib import admin
from .models import UserProfile, Weight, Health

admin.site.register(UserProfile)
admin.site.register(Health)
admin.site.register(Weight)