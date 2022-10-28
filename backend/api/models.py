from django.db import models
from django.conf import settings

class Note(models.Model):
    body = models.TextField(null=True, blank=True)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    #string method 
    def __str__(self):
      return self.body[0:50]

# Create your models here.

# class Product(models.Model):
#     Speech_Binary = models.BooleanField(default=True)
#     Pos_gaze = models.BooleanField(default=True)
#     Neg_gaze = models.BooleanField(default=True)
#     Pos_control = models.BooleanField(default=True)
#     Neg_control = models.BooleanField(default=True)
#     Pos_object = models.BooleanField(default=True)
#     Neg_object = models.BooleanField(default=True)
