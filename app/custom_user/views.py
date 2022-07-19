from django.shortcuts import render
from rest_framework.decorators import api_view
from django.http.response import JsonResponse
from custom_user.models import CustomUser
from django.core import serializers

@api_view(['GET'])
def index(request):
    user=CustomUser.objects.all()
    json_res = serializers.serialize('json', user)  
    return JsonResponse({'msg': json_res}, status=200) 