# Generated by Django 3.0.6 on 2020-06-10 15:31

from django.conf import settings
import django.contrib.postgres.fields
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0011_update_proxy_permissions'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Health',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('daily_calories', models.IntegerField(null=True)),
                ('goal_weight', models.FloatField(null=True)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='UserProfile',
            fields=[
                ('age', models.PositiveIntegerField(blank=True, null=True, validators=[django.core.validators.MaxValueValidator(100), django.core.validators.MinValueValidator(18)])),
                ('sexe', models.CharField(blank=True, choices=[('FEMME', 'Femme'), ('HOMME', 'Homme'), ('NON_BINAIRE', 'Non binaire')], max_length=11, null=True)),
                ('taille', models.PositiveIntegerField(blank=True, null=True, validators=[django.core.validators.MaxValueValidator(250), django.core.validators.MinValueValidator(80)])),
                ('objectif_poids', models.FloatField(blank=True, null=True, validators=[django.core.validators.MaxValueValidator(300), django.core.validators.MinValueValidator(20)])),
                ('expected_calories', models.IntegerField(blank=True, default=2000, null=True)),
                ('allergies', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, choices=[('LACTOSE', 'Lactose'), ('GLUTEN', 'Gluten'), ('VEGETARIEN', 'Végétarien'), ('ARACHIDES', 'Arachides'), ('FRUITS_DE_MER', 'Fruits de mer')], max_length=32, null=True), blank=True, default=list, size=None)),
                ('diabetique', models.CharField(choices=[('OUI', 'Oui'), ('NON', 'Non')], max_length=5)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, related_name='userprofile', serialize=False, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Weight',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('number', models.FloatField()),
                ('date_recorded', models.DateField(auto_now_add=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='user_profile.Health')),
            ],
        ),
    ]
