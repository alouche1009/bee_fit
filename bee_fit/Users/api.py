from Users.models import Infos
from rest_framework import viewsets, permissions
from .serializers import InfosSerializer

class InfosViewSet(viewsets.ModelViewSet):
    queryset = Infos.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = InfosSerializer