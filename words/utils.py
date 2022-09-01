from django.shortcuts import render
from django.views.generic import ListView
from django.contrib.auth.models import User

from django.db import models
from .models import Words
from .models import Stats

from django.http import JsonResponse
import json


class Utils(ListView):
    def post(self, request, *args, **kwargs):
        if request.method == 'GET':
            pass
        elif request.method == 'POST':
            data_from_post = json.load(request)['data']
            action = data_from_post['action']
            try:
                query_word = Stats.objects.get(
                    word=data_from_post['id'], user=self.request.user)
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
            return JsonResponse(data_from_post)
