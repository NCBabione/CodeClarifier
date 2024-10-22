from django.urls import path
from . import views

urlpatterns = [
    path('parse/', views.parseCode, name='parseCode'),
]