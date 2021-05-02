from django.db import models

class Favorite(models.Model):
    id = models.AutoField(primary_key = True)
    title = models.CharField(max_length = 200, blank = True)
    date = models.CharField(max_length = 200, blank = True)
    explanation = models.CharField(max_length = 10000, blank = True)
    url = models.CharField(max_length = 200, blank = True)

    def __str__(self):
        return f"{self.id}. {self.title}"