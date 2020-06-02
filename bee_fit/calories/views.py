from django.shortcuts import render
from rest_framework import viewsets, permissions
from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response
from .serializers import ProductsSerializer
from .models import Products
from rest_framework import filters

class ProductsViewset(viewsets.ModelViewSet):
    serializer_class = ProductsSerializer
    search_fields = ['product_name']
    filter_backends = (filters.SearchFilter,)
    queryset = Products.objects.all().order_by('product_name')
    