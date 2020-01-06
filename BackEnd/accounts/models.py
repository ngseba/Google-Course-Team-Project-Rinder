from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser,
    BaseUserManager,
    PermissionsMixin
)
# Create your models here.

class UserManager(BaseUserManager) :
    def create_user(self,email,name,date_of_birth,password = None):
        if not email:
            raise ValueError("Users must have an email adress")
        user = self.model(
            email = self.normalize_email(email)
        )
        user.set_password(password)
        user.set_name(name)
        user.date_of_birth = date_of_birth
        user.save()
        return user
        
    def create_superuser(self, email,password = None):
        if not email:
            raise ValueError("Users must have an email adress")
        user = self.model(
            email = self.normalize_email(email)

        )
        user.set_password(password)
        user.date_of_birth = None
        user.name = None
        user.is_superuser = True
        user.is_staff = True
        user.save()
        return user



class User (AbstractBaseUser,PermissionsMixin) :
     email = models.EmailField(max_length = 255,unique = True)   
     name = models.CharField(max_length=50,null = True)
     date_of_birth = models.DateField(null = True)
     description = models.TextField(null = True)
     USERNAME_FIELD = 'email'
     objects = UserManager()
     is_superuser = models.BooleanField(default = False)
     is_staff = models.BooleanField(default = False)
    

