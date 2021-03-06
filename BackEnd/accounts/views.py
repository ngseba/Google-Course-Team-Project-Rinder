from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse, HttpResponse
import json
from django.contrib.auth import authenticate
from django.contrib.auth import get_user_model

# Create your views here.
from resolutions.models import Resolution

from accounts.models import User


@csrf_exempt
def match_users(request, id, theresehold):
    # Get current user
    my_user = User.objects.get(id=id)

    # Get other users
    list_query = User.objects.values_list('id', flat=True)

    # Build the list of ids
    id_list = []
    for el in list_query:
        if el != int(id):
            id_list.append(el)

    # Get all of current user resolution
    product_list = Resolution.objects.filter(id_user=my_user).values()
    list_tags_current_user = []
    for el in product_list:
        tags_list = el['tags'].split()
        for ex in tags_list:
            list_tags_current_user.append(ex)

    # Iterate through each user and get its list of tags and compare it with original
    all_matched_users = []
    for id in id_list:
        other_user = User.objects.get(id=id)
        product_other_list = Resolution.objects.filter(id_user=other_user).values()
        list_tags_other_user = []
        for el in product_other_list:
            tags_other_list = el['tags'].split()
            for ex in tags_other_list:
                list_tags_other_user.append(ex)
        if ((set(list_tags_current_user) & set(list_tags_other_user)).__len__() >= int(theresehold)):
            build_up = {'email': str(other_user.email), 'name': other_user.name, 'description': other_user.description}
            all_matched_users.append(build_up)

    return JsonResponse(list(all_matched_users), safe=False)


@csrf_exempt
def login_view(request):
    if (request.method == 'POST'):
        body = json.loads(request.body)
        user = body["email"]
        password = body["password"]
        user = authenticate(username=user, password=password)
        if user is not None:
            return JsonResponse(user.id, safe=False)
        else:
            print("Incorrect username or password")

    return HttpResponse('')


@csrf_exempt
def register_view(request):
    if (request.method == 'POST'):
        body = json.loads(request.body)
        email = body["email"]
        password = body["password"]
        name = body["first_name"] + " " + body["last_name"]
        date_of_birth = body["date_of_birth"]
        date_of_birth = date_of_birth.split('T', 1)[0]
        get_user_model().objects.create_user(email, name, date_of_birth, password)
    return HttpResponse('')


def get_first_names(request, id):
    my_user = User.objects.get(id=id)
    return JsonResponse(my_user.name.split(), safe = False)

