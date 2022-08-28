from django.contrib import admin
from . import models

# Register your models here.
# class WordsAdmin(admin.ModelAdmin):
#     list_display = ('category', 'word')


admin.site.register(models.Words)


# class WordsAdmin(admin.ModelAdmin):
#     list_display = ('category', 'word')


admin.site.register(models.Categories)
admin.site.register(models.Stats)
