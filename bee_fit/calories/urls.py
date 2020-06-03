from rest_framework import routers;
from .views import ProductsViewset;
from calories import views
from django.conf.urls import url;
from django.urls import path;

router = routers.DefaultRouter()
router.register(r'products', ProductsViewset, 'Products')

urlpatterns = [
    url(r'^products/(?P<id>[0-9]+)$', views.product_details),
]

urlpatterns += router.urls