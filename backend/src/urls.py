from django.contrib import admin
from django.urls import path, include
from django.shortcuts import redirect

def redirect_to_parse(request):
    return redirect('parse/')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', redirect_to_parse),
    path('', include('parseCode.urls')),
]