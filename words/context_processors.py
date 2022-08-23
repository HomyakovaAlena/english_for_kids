from .models import Categories

def get_categories(request):
    return {'categories': Categories.objects.all()}
