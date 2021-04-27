from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import Http404
from .serializers import APODSerializer
import requests

api_key = "6E0VJLKPg4m6Mwf25Hgj7noeckNppYaHlY018kVf"
# api_key = "DEMO_KEY"

@api_view(['GET'])
def api_apod(request):
    apod_response = requests.get("https://api.nasa.gov/planetary/apod" + "?api_key={}".format(api_key))
    print(APODSerializer(apod_response))
    return Response(APODSerializer(apod_response))

@api_view(['GET'])
def api_apod_date(request, date):
    apod_response = requests.get("https://api.nasa.gov/planetary/apod/?date={}".format(date) + "&api_key={}".format(api_key))
    print(APODSerializer(apod_response))
    return Response(APODSerializer(apod_response))