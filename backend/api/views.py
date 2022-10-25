# import codecs
# import csv
#
# from django.core.files.base import ContentFile
# from django.core.files.storage import FileSystemStorage
#
# from rest_framework import serializers, viewsets
# from rest_framework.decorators import action
# from rest_framework.response import Response
#
# from .models import Product
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Note
from .serializers import NoteSerializer
from api import serializers

@api_view(['GET'])
def getRoutes(request):
    routes = [
        {
            'Endpoint': '/notes/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of notes'
        },
        {
            'Endpoint': '/notes/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single note object'
        },
        {
            'Endpoint': '/notes/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting note'
        },
    ]
    return Response(routes)

@api_view(['GET'])
def getNotes(request):
    notes = Note.objects.all()
    serializer = NoteSerializer(notes, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getNote(request, pk):
    notes = Note.objects.get(id=pk)
    serializer = NoteSerializer(notes, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
def updateNote(request, pk): 
    data = request.data
    note = Note.objects.get(id=pk) 
    serializer = NoteSerializer(instance=note, data=data)

    if serializer.is_valid():
      serializer.save()

    return Response(serializer.data)

    
@api_view(['DELETE'])
def deleteNote(request, pk):
  note = Note.objects.get(id=pk)
  note.delete()
  return Response('note was deleted')

@api_view(['POST'])
def createNote(request):
  data = request.data
  note = Note.objects.create(
    body=data['body']
    )
  serializer = NoteSerializer(note, many=False)
  return Response(serializer.data)



# fs = FileSystemStorage(location='tmp/')
#
#
# # Serializer
# class ProductSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Product
#         fields = "__all__"
#
# # Viewset
# class ProductViewSet(viewsets.ModelViewSet):
#     """
#     A simple ViewSet for viewing and editing Product.
#     """
#     queryset = Product.objects.all()
#     serializer_class = ProductSerializer
#
#     @action(detail=False, methods=['POST'])
#     def upload_data(self, request):
#         """Upload data from CSV"""
#         file = request.FILES["file"]
#
#         content = file.read()  # these are bytes
#         file_content = ContentFile(content)
#         file_name = fs.save(
#             "_tmp.csv", file_content
#         )
#         tmp_file = fs.path(file_name)
#
#         csv_file = open(tmp_file, errors="ignore")
#         reader = csv.reader(csv_file)
#         next(reader)
#         
#         product_list = []
#         for id_, row in enumerate(reader):
#             (
#                 user,
#                 Pos_gaze,
#                 Neg_gaze,
#                 Pos_control,
#                 Neg_control,
#                 Pos_object,
#                 Neg_object
#             ) = row
#             product_list.append(
#                 Product(
#                     user_id=user,
#                     Pos_gaze=Pos_gaze,
#                     Neg_gaze=Neg_gaze,
#                     Pos_control=Pos_control,
#                     Neg_control=Neg_control,
#                     Pos_object=Pos_object,
#                     Neg_object=Neg_object,
#                 )
#             )
#
#         Product.objects.bulk_create(product_list)
#
#         return Response("Successfully upload the data")
