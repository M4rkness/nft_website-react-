from django.shortcuts import render
from rest_framework.generics import CreateAPIView, DestroyAPIView, UpdateAPIView, ListAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
""""""
class IndexAPIView(APIView):
    def get(self, request):
        return Response(dict())
