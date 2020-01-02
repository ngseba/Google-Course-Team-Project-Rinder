from django.shortcuts import render
from .models import Product
from django.http import JsonResponse,HttpResponse
import json
from django.views.decorators.csrf import csrf_exempt

# Create your views here.

def get_products(request) :
    product_list = Product.objects.all().values()
    return JsonResponse (list(product_list), safe=False)

@csrf_exempt
def save_product(request) :
    p = Product(title = "Produs nou",description = "yas",price = "20.20")
    p.save()
    print(request)

    return HttpResponse(" ")
