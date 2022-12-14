from django.urls import path, include
from . import views


urlpatterns = [
    path('categories', views.CategoriesListView.as_view()),
    path('categories/<str:category_category>',
         views.WordsListView.as_view(), name='selected_category'),
    path('statistics',
         views.StatsListView.as_view(), name='stats'),
    path('statistics/difficult',
         views.DifficultListView.as_view(), name='difficult'),
    path('leaderboard',
         views.leaderboardListView.as_view(), name='leaderboard'),
]
