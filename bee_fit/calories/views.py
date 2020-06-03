from django.shortcuts import render
from rest_framework import viewsets, permissions
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .serializers import ProductsSerializer
from .models import Products
from rest_framework import filters

class ProductsViewset(viewsets.ModelViewSet):
    serializer_class = ProductsSerializer
    search_fields = ['product_name']
    filter_backends = (filters.SearchFilter,)
    queryset = Products.objects.all().order_by('product_name')

@api_view(['GET'])
def product_details(request, id):
    try:
        product = Products.objects.get(id=id)
    except product.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = ProductsSerializer(product,context={'request': request})
        return Response(serializer.data)
    