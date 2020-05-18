from rest_framework import routers
from .api import InfosViewSet


router = routers.DefaultRouter()
router.register('api/Users', InfosViewSet, 'Users')

urlpatterns = router.urls

