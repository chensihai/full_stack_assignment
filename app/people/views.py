from django.shortcuts import render
from django.http.response import JsonResponse
# from rest_framework.parsers import JSONParser 
# from rest_framework import status
from rest_framework.decorators import api_view
from people.models import People
from django.core import serializers

# Create your views here.
# @api_view(['GET'])
# def index(request):
#   return JsonResponse({'message': 'people index'}, status=status.HTTP_200_OK)

@api_view(['GET'])
def index(request):
    people = People.objects.all()[:10]
    json_res = serializers.serialize('json',people)  
    # return render(request, 'people.html', {'people': people})  
    return JsonResponse({'people': json_res}, status=200)