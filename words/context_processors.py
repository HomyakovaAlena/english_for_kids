from .models import Categories, Words, Stats
from django.contrib.auth.models import User

def get_categories(request):
    return {'categories': Categories.objects.all()}


def get_words(request):
    return {'words': Words.objects.all()}


def get_stats(request):
    return {'stats': Stats.objects.all()}


def get_users(request):
    return {'users': User.objects.all()}
