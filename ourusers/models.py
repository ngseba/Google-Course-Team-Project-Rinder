from django.db import models

# Create your models here.
class OurUser (models.Model) : 
    username = models.CharField(max_length = 20)
    password = models.CharField(max_length=20)
    email = models.EmailField()
    name = models.CharField(max_length=50)
    date_of_birth = models.DateField()
    description = models.TextField()
    