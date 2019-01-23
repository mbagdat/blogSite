from django.contrib import admin
from .models import Website



@admin.register(Website)
class WebsiteAdmin(admin.ModelAdmin):

    list_display = ["title","created_date"]

    list_display_links = ["title"]

    list_filter = ["created_date"]

    search_fields = ["title"]
    class Meta:
        model = Website

