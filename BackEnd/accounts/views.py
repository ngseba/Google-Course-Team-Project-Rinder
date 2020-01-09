from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse, HttpResponse
import json
from django.contrib.auth import authenticate
from django.contrib.auth import get_user_model


# Create your views here.

@csrf_exempt
def login_view(request) :
    if(request.method == 'POST'):
         body = json.loads(request.body)
         user = body["email"]
         password = body["password"]
         user = authenticate(username=user, password=password)
         if user is not None:
             print(user.id)
         else : 
             print("Incorrect username or password")

    return HttpResponse('')

@csrf_exempt
def register_view(request) :
    if(request.method == 'POST') : 
        body = json.loads(request.body)
        email = body["email"]
        password = body["password"]
        name = body["first_name"] + " " + body["last_name"]
        date_of_birth = body["date_of_birth"]
        date_of_birth = date_of_birth.split('T',1)[0]
        get_user_model().objects.create_user(email,name,date_of_birth,password)
    return HttpResponse('')
