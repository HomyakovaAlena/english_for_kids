from django.urls import path
from . import views

urlpatterns = [
    path('words', views.CategoriesListView.as_view()),
    path('words/<int:pk>', views.WordsDetailView.as_view())
]
