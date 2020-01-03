from django.db import models

# Create your models here.
class OurUser (models.Model) : 
    username = models.CharField(max_length = 20)
    password = models.TextField()
    email = models.EmailField()
    name = models.TextField()
    date_of_birth = models.DateField()
    description = models.TextField()
    