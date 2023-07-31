from django.urls import path
from . import views

urlpatterns = [
    path('', views.burger_builder_view, name='burger_builder'),
    path('print-details/', views.print_details, name='print_details'),
]