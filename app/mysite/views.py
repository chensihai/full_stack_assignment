from django.shortcuts import render
from django.http import HttpResponse
from django.template.loader import render_to_string


# Create your views here.
def index(request):
    rendered = render_to_string('index.html', {'foo': 'bar'})
    response = HttpResponse(rendered)
    return response