from django.db import models

# Create your models here.
class Words(models.Model):
    category = models.CharField(max_length=200)
    category_image = models.CharField(max_length=200)
    category_icon = models.CharField(max_length=200)
    word = models.CharField(max_length=200)
    translation = models.CharField(max_length=200)
    word_image = models.CharField(max_length=200)
    word_audioSrc = models.CharField(max_length=200)
