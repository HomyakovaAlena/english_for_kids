from django.shortcuts import render
from django.http import Http404
from django.views.generic import ListView, DetailView

# Create your views here.
from .models import Words
from .models import Categories


class CategoriesListView(ListView):
    model = Categories
    context_object_name = "categories"
    template_name = "words/categories_list.html"


class WordsListView(ListView):
    model = Words
    context_object_name = "words"
    template_name = "words/words_list.html"

    def get_queryset(self, **kwargs):
       qs = super().get_queryset(**kwargs)
       category = Categories.objects.get(category=self.kwargs['category_category'])
       print(self.kwargs)
       return qs.filter(categories=category.id)


# class NavView(ListView):
#     model = Categories
#     context_object_name = "categories"
#     template_name = "words/nav.html"


class WordsDetailView(DetailView):
    model = Words
    context_object_name = "word"
    template_name = "words/word.html"




