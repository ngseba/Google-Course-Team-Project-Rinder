from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse, HttpResponse
import json
from django.contrib.auth import authenticate


# Create your views here.

@csrf_exempt
def login_view(request) :
    if(request.method == 'POST'):
         body = json.loads(request.body)
         user = body["user"]
         password = body["pass"]
         user = authenticate(username=user, password=password)
         if user is not None:
             print("User found, proceed to log in")
         else : 
             print("Incorrect username or password")

    return HttpResponse('')
