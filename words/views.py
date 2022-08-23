from django.shortcuts import render
from django.http import Http404
from django.views.generic import ListView, DetailView

# Create your views here.
from .models import Words
from .models import Categories


class CategoriesListView(ListView):
    model = Words
    context_object_name = "words"
    template_name = "words/categories_list.html"


class WordsDetailView(DetailView):
    model = Words
    context_object_name = "word"
    template_name = "words/words_list.html"




