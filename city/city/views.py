from django.shortcuts import render_to_response
from django.template import Template

def home(request):
    return render_to_response('index.html')

def about_us(request):
    return render_to_response('about.html')

def help_page(request):
    return render_to_response('qa.html')
