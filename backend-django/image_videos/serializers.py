# Fiz a minha própria implementação do serializador por não usar um Model do Django

def APODSerializer(apod_request):
    data = {
        "title": apod_request.json()['title'],
        "date": apod_request.json()['date'],
        "explanation": apod_request.json()['explanation'],
        "url": apod_request.json()['url'],
        "media_type": apod_request.json()['media_type'],
    }

    return data