from django.db import models

# Create your models here.


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





