# Generated by Django 3.0.6 on 2020-06-10 18:54

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Products',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('url', models.TextField(blank=True, null=True)),
                ('product_name', models.TextField(blank=True, null=True)),
                ('quantity', models.TextField(blank=True, null=True)),
                ('categories', models.TextField(blank=True, null=True)),
                ('ingredients_text', models.TextField(blank=True, null=True)),
                ('allergens', models.TextField(blank=True, null=True)),
                ('traces', models.TextField(blank=True, null=True)),
                ('traces_tags', models.TextField(blank=True, null=True)),
                ('serving_size', models.TextField(blank=True, null=True)),
                ('serving_quantity', models.FloatField(blank=True, null=True)),
                ('nutriscore_score', models.FloatField(blank=True, null=True)),
                ('nutriscore_grade', models.TextField(blank=True, null=True)),
                ('main_category', models.TextField(blank=True, null=True)),
                ('image_url', models.TextField(blank=True, null=True)),
                ('image_small_url', models.TextField(blank=True, null=True)),
                ('image_ingredients_url', models.TextField(blank=True, null=True)),
                ('image_ingredients_small_url', models.TextField(blank=True, null=True)),
                ('image_nutrition_url', models.TextField(blank=True, null=True)),
                ('image_nutrition_small_url', models.TextField(blank=True, null=True)),
                ('energy_kj_100g', models.FloatField(blank=True, db_column='energy-kj_100g', null=True)),
                ('energy_kcal_100g', models.FloatField(blank=True, db_column='energy-kcal_100g', null=True)),
                ('energy_100g', models.FloatField(blank=True, null=True)),
                ('energy_from_fat_100g', models.FloatField(blank=True, db_column='energy-from-fat_100g', null=True)),
                ('fat_100g', models.FloatField(blank=True, null=True)),
                ('sugars_100g', models.FloatField(blank=True, null=True)),
                ('proteins_100g', models.FloatField(blank=True, null=True)),
                ('nutrition_score_fr_100g', models.FloatField(blank=True, db_column='nutrition-score-fr_100g', null=True)),
                ('glycemic_index_100g', models.FloatField(blank=True, db_column='glycemic-index_100g', null=True)),
            ],
            options={
                'ordering': ('product_name',),
            },
        ),
    ]
