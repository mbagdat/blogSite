from django.shortcuts import render,HttpResponse,get_object_or_404
from .models import Article

# Create your views here.

def index(request):
    return render(request,"index.html")

def about(request):
    return render(request,"about.html")

def portfolio(request):
    return render(request,"portfolio.html")

def blog(request):
    articles = Article.objects.all()
    context = {
        "articles" : articles
    }
    return render(request,"blog.html",context)

def contact(request):
    return render(request,"contact.html")

def postDetail(request,id):
    # ALT SATIRDAKİ KOD ÇALIŞIR DURUMDA SADECE MAKALE OLMADIĞI ZAMAN 404 HATASI VERMESİ İÇİN BU SATIRI KAPATTIK
    # article = Article.objects.all().filter(id=id).first()
    article = get_object_or_404(Article,id=id)
    return render(request, 'postDetail.html', {'article': article})
    


