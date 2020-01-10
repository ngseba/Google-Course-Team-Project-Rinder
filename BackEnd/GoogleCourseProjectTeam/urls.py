"""GoogleCourseProjectTeam URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from products.views import *
from resolutions.views import *
from accounts.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('products/',get_products,name="products"),
    path('save_product/',save_product),
    path('resolution/get_resolutions/<id>', get_resolutions),
    path('resolution/update_resolution_done/<id>', update_resolution_done),
    path('resolution/create_resolution/', create_resolution),
    path('resolution/delete_resolution/<id>', delete_resolution),
    path('resolution/update_resolution_name/<id>', update_resolution_name),
    path('login',login_view),
    path('register',register_view),
    path('users/matching/<id>/<theresehold>', match_users)
]
