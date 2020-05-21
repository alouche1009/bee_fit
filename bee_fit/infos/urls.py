from rest_framework import routers
from .api import InfosViewSet

router = routers.DefaultRouter()
router.register('api/infos', InfosViewSet, 'infos')
urlpatterns = router.urls

