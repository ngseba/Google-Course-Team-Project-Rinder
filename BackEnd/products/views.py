from django.shortcuts import render
from .models import Product
from django.http import JsonResponse,HttpResponse
import json
from django.views.decorators.csrf import csrf_exempt

# Create your views here.

def get_products(request) :
    product_list = Product.objects.all().values()
    return JsonResponse (list(product_list), safe=False)

@csrf_exempt #todo
def save_product(request,*args) :
    body = json.loads(request.body)
    p = Product(title = body["title"]["product_name"],description = "yas",price = "20.20")
    print(body["title"]["product_name"])
    p.save()
    print(request)
    print(body)
    return HttpResponse(" ")

@csrf_exempt #todo
def update_product(request,product_id):
    p = Product.objects.get(pk = product_id)
    p.description = "DESCRIEREA NOUA"
    p.save()
    return HttpResponse("e ok")
@csrf_exempt #todo
def delete_product(request,product_id):
    p = Product.objects.get(pk = product_id).delete()
    return HttpResponse("e ok")