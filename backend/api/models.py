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

# ELECTRONICS = "ELECTRONICS"
# BOOKS = "BOOKS"
# COMPUTERS = "COMPUTERS"
#
# CATEGORY_CHOICES = (
#   (ELECTRONICS, ELECTRONICS),
#   (BOOKS, BOOKS),
#   (COMPUTERS, COMPUTERS),
# )

# class Product(models.Model):
#     user = models.ForeignKey(
#         settings.AUTH_USER_MODEL,
#         on_delete=models.CASCADE,
#         related_name="product",
#         null=True,
#     )
#     Pos_gaze = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
#     Neg_gaze = models.IntegerField(default=0)
#     Pos_control = models.IntegerField(default=0)
#     Neg_control = models.IntegerField(default=0)
#     Pos_object = models.IntegerField(default=0)
#     Neg_object = models.IntegerField(default=0)
