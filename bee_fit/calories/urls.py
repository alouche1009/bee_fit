from rest_framework import routers
from .views import ProductsViewset

router = routers.DefaultRouter()
router.register('api/products', ProductsViewset, 'Products')

urlpatterns = router.urls