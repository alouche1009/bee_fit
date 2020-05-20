from infos.models import Infos
from rest_framework import viewsets, permissions
from .serializers import InfosSerializer

class InfosViewSet(viewsets.ModelViewSet):
    permissions_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = InfosSerializer

    def get_queryset(self):
        return self.request.user.infos.all()

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


 