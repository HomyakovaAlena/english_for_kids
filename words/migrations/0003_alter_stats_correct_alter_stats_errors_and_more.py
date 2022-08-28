# Generated by Django 4.1 on 2022-08-24 20:00

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('words', '0002_stats'),
    ]

    operations = [
        migrations.AlterField(
            model_name='stats',
            name='correct',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='stats',
            name='errors',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='stats',
            name='trained',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='stats',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='stats', to=settings.AUTH_USER_MODEL),
        ),
    ]