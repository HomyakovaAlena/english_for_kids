from django.urls import path, include
from . import views


# urlnavpattern = [
#     path(r'categories', views.NavView.as_view()),
# ]


urlpatterns = [
    # path(r'categories', include(urlnavpattern)),
    path('categories', views.CategoriesListView.as_view()),

    path('categories/<str:category_category>',
         views.WordsListView.as_view(), name='selected_category'),
    # path('words', views.WordsListView.as_view()),
    # path('categories/category<int:pk>/word<int:pk>',
    #      views.WordsDetailView.as_view())
]


