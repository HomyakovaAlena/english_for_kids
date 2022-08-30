from atexit import register
from django import template
from ..models import Words, Categories, Stats

register = template.Library()


@register.simple_tag
def get_percentage(word):
    if word.correct == word.errors == 0 or word.correct == word.errors == None:
        return f'0%'
    else:
        return f'{round((word.correct / (word.correct + word.errors) ) * 100)}%'

