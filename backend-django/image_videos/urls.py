from django.urls import path

from . import views

urlpatterns = [
    path('api/ndv/apod', views.api_apod),
    path('api/ndv/apod/<str:date>/', views.api_apod_date),
    path('api/ndv/NASA/<str:query>/', views.api_nasa_search),
    path('api/ndv/NASA/', views.api_nasa),
]