# Generated by Django 3.1.2 on 2021-01-11 00:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('visualizations', '0002_auto_20210110_1603'),
    ]

    operations = [
        migrations.AddField(
            model_name='reportpreferences',
            name='preset_name',
            field=models.CharField(default='blank', max_length=100),
            preserve_default=False,
        ),
    ]
