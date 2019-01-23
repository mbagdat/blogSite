from django.db import models
from ckeditor.fields import RichTextField

# Create your models here.

class Article(models.Model):
    author = models.ForeignKey("auth.User",verbose_name = "Yazar",on_delete = models.CASCADE)
    title = models.CharField(max_length = 50,verbose_name="Başlık")
    content = RichTextField()
    created_date = models.DateTimeField(auto_now_add= True,verbose_name="Oluşturulma Tarihi")
    image = models.FileField(blank = True,null = True,verbose_name="Makaleye Resim Ekle",default="default/images.jpg")

    def __str__(self):
        return self.title




    