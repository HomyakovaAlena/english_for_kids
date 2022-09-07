from django.shortcuts import render
from django.http import Http404
from django.views.generic import ListView, DetailView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.models import User
from django.shortcuts import redirect
from django.http import HttpResponseRedirect

from django.db import models
from django.db.models import Sum

from .models import Words
from .models import Categories
from .models import Stats

from django.http import JsonResponse
import json
from django.db import connection
from .utils import Utils


class CategoriesListView(ListView):
    model = Categories
    context_object_name = "categories"
    template_name = "words/categories_list.html"


class WordsListView(Utils, LoginRequiredMixin, ListView):
    model = Words
    context_object_name = "words"
    template_name = "words/words_list.html"
    login_url = '/login'

    def get_queryset(self, **kwargs):
        qs = super().get_queryset(**kwargs)
        category = Categories.objects.get(
            category=self.kwargs['category_category'])
        return qs.filter(categories=category.id)


class StatsListView(LoginRequiredMixin, ListView):
    model = Stats
    context_object_name = "stats"
    template_name = "words/statistics.html"
    login_url = '/login'
    success_url = '/statistics'

    def get_queryset(self, **kwargs):
        query = Words.objects.raw(
            '''
            SELECT 1 as id, words_categories.category, words_words.word, words_words.translation, 
            words_stats.trained, words_stats.correct, words_stats.errors, words_stats.user_id
            FROM djangodatabase.words_words
            LEFT JOIN djangodatabase.words_stats
            ON words_words.id=words_stats.word_id AND words_stats.user_id= %s 
            JOIN djangodatabase.words_categories 
            ON words_words.categories_id=words_categories.id
            ''', [self.request.user.id])
        return query

    def post(self, request, *args, **kwargs):
        if request.method == 'GET':
            pass
        elif request.method == 'POST':
            data_from_post = json.load(request)['data']
            Stats.objects.filter(user_id=self.request.user.id).delete()
            return JsonResponse(data_from_post)


class DifficultListView(Utils, LoginRequiredMixin, ListView):
    model = Stats
    context_object_name = "stats"
    template_name = "words/difficult_list.html"
    login_url = '/login'

    def get_queryset(self, **kwargs):
        query = Stats.objects.filter(errors__gt=0, user_id=self.request.user.id).order_by(
            '-errors').prefetch_related('word')[0:8]
        return query


class leaderboardListView(LoginRequiredMixin, ListView):
    model = Stats
    context_object_name = "stats"
    template_name = "words/leaderboard_list.html"
    login_url = '/login'

    def get_queryset(self, **kwargs):
        query = Stats.objects.raw(
            '''
            WITH USERS AS (
            SELECT 1 as id, 
            ROW_NUMBER() OVER(
                ORDER BY SUM(djangodatabase.words_stats.correct) DESC, 
                ROUND(SUM(djangodatabase.words_stats.correct)/(SUM(djangodatabase.words_stats.correct) 
                + SUM(djangodatabase.words_stats.errors)) * 100, 1) DESC) 
            AS row_num, 
            djangodatabase.auth_user.id AS user_id, 
            djangodatabase.auth_user.username AS username, 
            SUM(djangodatabase.words_stats.correct) AS sum_correct,
            ROUND(SUM(djangodatabase.words_stats.correct)/(SUM(djangodatabase.words_stats.correct) 
            + SUM(djangodatabase.words_stats.errors)) * 100, 1) AS percent_correct
            FROM djangodatabase.words_stats 
            JOIN djangodatabase.auth_user 
            ON djangodatabase.words_stats.user_id=djangodatabase.auth_user.id
            GROUP BY username)
            (SELECT 1 AS id, row_num, user_id, username, sum_correct, percent_correct  
            FROM USERS
            LIMIT 5) 
            UNION  
            (SELECT 1 AS id, row_num, user_id, username, sum_correct, percent_correct   
            FROM USERS
            WHERE user_id = %s)
            ''', [self.request.user.id])
        return query


class WordsDetailView(DetailView):
    model = Words
    context_object_name = "word"
    template_name = "words/word.html"
