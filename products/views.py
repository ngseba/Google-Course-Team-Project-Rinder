from django.shortcuts import render
from .models import Product
from django.http import JsonResponse

# Create your views here.

def get_products(request) :
    product_list = Product.objects.all().values()
    return JsonResponse (list(product_list), safe=False)