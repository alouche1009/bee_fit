# Generated by Django 3.0.6 on 2020-05-25 07:59

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('infos', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='infos',
            name='allergies',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, choices=[('LACTOSE', 'Lactose'), ('GLUTEN', 'Gluten'), ('VEGETARIEN', 'Végétarien'), ('ARACHIDES', 'Arachides'), ('POISSON', 'Fruits de mer')], max_length=32), blank=True, default=list, size=None),
        ),
    ]
