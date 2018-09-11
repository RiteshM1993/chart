from __future__ import unicode_literals

from django.db import models

# Create your models here.


class adult_Data(models.Model):

    age =models.IntegerField()
    workclass= models.CharField(max_length=100)
    fnlwgt =models.BigIntegerField()
    education = models.CharField(max_length=100)
    education_num=models.BigIntegerField()
    marital_status=models.TextField()
    occupation=models.CharField(max_length=100)
    relationship = models.TextField()
    race=models.TextField()
    sex=models.TextField()
    capital_gain=models.BigIntegerField()
    capital_loss=models.BigIntegerField()
    hours_per_week=models.BigIntegerField()
    native_country=models.CharField(max_length=100)
    country_value=models.TextField()

    class Meta:
        db_table = "adult_data"





