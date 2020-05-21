from rest_framework import serializers
from infos.models import Infos

class InfosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Infos
        fields = '__all__'
