# Fiz a minha própria implementação do serializador APOD e NASA por não usar um Model do Django para ambos
from rest_framework import serializers
from .models import Favorite

def APODSerializer(apod_request):
    data = {
        "title": apod_request.json()['title'],
        "date": apod_request.json()['date'],
        "explanation": apod_request.json()['explanation'],
        "url": apod_request.json()['url'],
        "media_type": apod_request.json()['media_type'],
    }

    return data

def NASASerializer(nasa_request):
    collection = nasa_request.json()['collection']

    images = {
        "data": []
    }

    # ERROR 404
    if len(collection['items']) == 0:
        images['data'].append({
            'title': "No image found",
            'creation_date': "-",
            'href': "https://moldura-pop.s3.sa-east-1.amazonaws.com/imagens-proprietarias/99927599-b_wuSN1qRrXVQJ2Uq1q5-Cpi_ToRNwkZ-cropped-7x5-browser.png",
            'description': "-"
        })
        return images

    max_items = 10
    try:
        for i in range(max_items):
            img = {
                'title': collection['items'][i]['data'][0]['title'],
                'creation_date': collection['items'][i]['data'][0]['date_created'],
                'href': collection['items'][i]['links'][0]['href'],
                'description': collection['items'][i]['data'][0]['description']
            }
            images['data'].append(img)
    except:
        return images
    
    print(images)
    return images

class FavoriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Favorite
        fields = ['id', 'title', 'date', 'explanation', 'url']