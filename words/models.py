from django.db import models
from django.contrib.auth.models import User


class Categories(models.Model):
    category = models.CharField(max_length=200)
    category_image = models.CharField(max_length=200)
    category_icon = models.CharField(max_length=200)

    def __str__(self):
        return self.category

class Words(models.Model):
    word = models.CharField(max_length=200)
    translation = models.CharField(max_length=200)
    word_image = models.CharField(max_length=200)
    word_audioSrc = models.CharField(max_length=200)
    categories = models.ForeignKey(
        'Categories',
        on_delete=models.CASCADE
    )

    def __str__(self):
        return self.word


class Stats(models.Model):
    trained = models.IntegerField(default=0)
    correct = models.IntegerField(default=0)
    errors = models.IntegerField(default=0)
    word = models.ForeignKey(
        'Words',
        on_delete=models.CASCADE, related_name='words'
    )
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE, related_name='stats'
    )

    def __str__(self):
        return f'{self.user}, {self.word}: {self.trained}, {self.correct}, {self.errors}'
