
from .models import Resolution
from accounts.models import User
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json


# Create your views here.
def get_resolutions(request, id):
    user = User.objects.only('id').get(id = id)
    product_list = Resolution.objects.filter(id_user=user).values()
    return JsonResponse(list(product_list), safe=False)


@csrf_exempt
def update_resolution_done(request, id):
    r = Resolution.objects.get(pk=id)
    r.done = not r.done
    r.save()
    return HttpResponse('')


@csrf_exempt
def update_resolution_name(request, id):
    body = json.loads(request.body)
    r = Resolution.objects.get(pk=id)
    r.name =  body["name"]
    r.tags =  body["tags"]
    r.save()
    return HttpResponse('')


@csrf_exempt
def create_resolution(request):
    body = json.loads(request.body)
    user  = User.objects.only('id').get(id = body["id"])
    r = Resolution(name=body["name"], done=False, tags=body["tags"], id_user = user)
    r.save()
    return HttpResponse(" ")


@csrf_exempt
def delete_resolution(request, id):
    r = Resolution.objects.get(id =  id)
    r.delete()
    return HttpResponse(" ")


