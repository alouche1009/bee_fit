# Generated by Django 3.0.6 on 2020-05-26 17:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_profile', '0002_auto_20200526_1913'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='expected_calories',
            field=models.IntegerField(blank=True, default=2000, null=True),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='sexe',
            field=models.CharField(blank=True, choices=[('FEMME', 'Femme'), ('HOMME', 'Homme'), ('NON_BINAIRE', 'Non binaire')], max_length=11, null=True),
        ),
    ]
