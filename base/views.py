from django.shortcuts import render
from django.conf import settings
from django.shortcuts import render, redirect
from django.utils.translation import activate



# Create your views here.
def index(request):
    return render(request, 'base/index.html')

def set_language(request):
    user_language = request.GET.get('language', settings.LANGUAGE_CODE)
    activate(user_language)
    response = redirect('/')
    response.set_cookie(settings.LANGUAGE_COOKIE_NAME, user_language)
    return response
