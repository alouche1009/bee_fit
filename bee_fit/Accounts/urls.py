from django.conf.urls import url
from . import views

urlpatterns = [
    url('api/accounts', views.UserCreate.as_view(), name='account-create'),
]


