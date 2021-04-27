from django.urls import path

from . import views

urlpatterns = [
    path('api/ndv/apod', views.api_apod),
    path('api/ndv/apod/<str:date>/', views.api_apod_date),
]