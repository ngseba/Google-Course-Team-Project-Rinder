from django.db import models
from accounts.models import User
# Create your models here.
class Resolution(models.Model) :
    name = models.CharField(max_length=100)
    done = models.BooleanField()
    tags = models.TextField()
    id_user = models.ForeignKey(User, on_delete=models.CASCADE)