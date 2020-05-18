from rest_framework import serializers
from Users.models import Infos

class InfosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Infos
        fields = '__all__'