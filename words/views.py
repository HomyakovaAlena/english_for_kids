from django.shortcuts import render
from django.http import Http404
from django.views.generic import ListView, DetailView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.models import User


from django.db import models
from django.db.models import Count, F, Value

# Create your views here.
from .models import Words
from .models import Categories
from .models import Stats

from django.http import JsonResponse
import json
from django.db import connection


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
       return qs.filter(categories=category.id)

    def post(self, request, *args, **kwargs):
        if request.method == 'GET':
            pass
        elif request.method == 'POST':
            data_from_post = json.load(request)['data']
            print(data_from_post)
            action = data_from_post['action']
            print(action)
            try:
                query_word = Stats.objects.get(
                    word=data_from_post['id'], user=self.request.user)
                print({query_word})
                if action == 'trained':
                    query_word.trained += 1 if query_word.trained else 1
                elif action == 'correct':
                    query_word.correct += 1 if query_word.correct else 1
                else:
                    query_word.errors += 1 if query_word.errors else 1
                query_word.save()
            except Exception as _:
                if action == 'trained':
                    query_word = Stats(
                        word=Words.objects.get(pk=data_from_post['id']), trained=1, user=self.request.user)
                elif action == 'correct':
                    query_word = Stats(
                        word=Words.objects.get(pk=data_from_post['id']), correct=1, user=self.request.user)
                else:
                    query_word = Stats(
                        word=Words.objects.get(pk=data_from_post['id']), errors=1, user=self.request.user)
                query_word.save()
            print(query_word)
                            #     en=Stats(trained=data_from_post['trained'], correct=data_from_post['correct'],
            #            errors=data_from_post['errors'])
            # en.save()
            # en.user.set([User.objects.get(
            #     user_id=self.request.user.id)])
            # en.word.set([Words.objects.get(
            #     word=data_from_post['word'])])
            
            return JsonResponse(data_from_post)


class StatsListView(LoginRequiredMixin, ListView):
    model = Stats
    context_object_name = "stats"
    template_name = "words/statistics.html"
    login_url = '/login'

    def get_queryset(self, **kwargs):
        qs = super().get_queryset(**kwargs)

        query = Words.objects.raw(
            '''
            SELECT 1 as id, words_categories.category, words_words.word, words_words.translation, 
            words_stats.trained, words_stats.correct, words_stats.errors, words_stats.user_id
            FROM djangodatabase.words_words
            LEFT JOIN djangodatabase.words_stats
            ON words_words.id=words_stats.word_id AND words_stats.user_id= %s 
            Join djangodatabase.words_categories 
            on words_words.categories_id=words_categories.id
            ''', [self.request.user.id])

        return query
    
  

class WordsDetailView(DetailView):
    model = Words
    context_object_name = "word"
    template_name = "words/word.html"




