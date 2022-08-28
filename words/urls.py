from django.urls import path, include
from . import views



urlpatterns = [
    path('categories', views.CategoriesListView.as_view()),

    path('categories/<str:category_category>',
         views.WordsListView.as_view(), name='selected_category'),
    path('statistics',
         views.StatsListView.as_view(), name='stats'),
]


