from django.shortcuts import render
from .models import Website

def portfolio(request):
    return render(request,"portfolio.html")