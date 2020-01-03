from django.db import models
from ourusers.models import OurUser
# Create your models here.
class Resolution(models.Model) :
    name = models.TextField()
    done = models.BooleanField()
    tags = models.TextField()
    id_user = models.ForeignKey(OurUser, on_delete=models.CASCADE)