from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import Http404 
from .serializers import *
from .models import Favorite
import requests
import json

api_key = "6E0VJLKPg4m6Mwf25Hgj7noeckNppYaHlY018kVf"
# api_key = "DEMO_KEY"

@api_view(['GET'])
def api_apod(request):
    apod_response = requests.get("https://api.nasa.gov/planetary/apod" + "?api_key={}".format(api_key))
    return Response(APODSerializer(apod_response))

@api_view(['GET'])
def api_apod_date(request, date):
    apod_response = requests.get("https://api.nasa.gov/planetary/apod/?date={}".format(date) + "&api_key={}".format(api_key))
    return Response(APODSerializer(apod_response))

@api_view(['GET'])
def api_nasa(request):
    nasa_response = requests.get("https://images-api.nasa.gov/search" + "?media_type=image")
    return Response(NASASerializer(nasa_response))

@api_view(['GET'])
def api_nasa_search(request, query):
    nasa_response = requests.get("https://images-api.nasa.gov/search" + "?q={}".format(query) + "&media_type=image")
    return Response(NASASerializer(nasa_response))

@api_view(['GET', 'POST'])
def favorite_request(request):
    if request.method == 'POST':
        new_favorite = Favorite(title = request.data['title'],
                                date = request.data['date'],
                                explanation = request.data['explanation'],
                                url = request.data['url'])
        new_favorite.save()
        return Response('')
    
    elif request.method == 'GET':
        all_favorites = Favorite.objects.all()
        return Response(FavoriteSerializer(all_favorites, many = True).data)