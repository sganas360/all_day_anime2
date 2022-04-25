from django.forms import ValidationError
from rest_framework.viewsets import ModelViewSet
from rest_framework import permissions
from .serializers import *
from django.http import JsonResponse
from rest_framework.decorators import action
from rest_framework.response import Response

class PostsViewSet(ModelViewSet):
    queryset = Posts.objects.all().order_by("-id")
    serializer_class = PostsSerializer

    def perform_create(self,serializer):
        serializer.save(author=self.request.user)
        return super().perform_create(serializer)
    
    def get_permissions(self):
        if self.request.method == "GET":
            return (permissions.AllowAny(),)
        return super().get_permissions()

    @action(detail=False)
    def get_user_posts(self, request):
        if self.request.user:
            if self.request.user.is_superuser:
                return Posts.objects.all()
            posts = Posts.objects.filter(author=self.request.user).order_by("anime_title")
            serializer = PostsSerializer(posts, many=True)
            return Response(serializer.data)
        return JsonResponse({ "Message": "User is not logged in, so no posts!" }, status=200)
        

class CommentsViewSet(ModelViewSet):
    queryset = Comments.objects.all().order_by("-id")
    serializer_class = CommentsSerializer

    def perform_create(self,serializer):
        serializer.save(author=self.request.user)
        return super().perform_create(serializer)

    def get_permissions(self):
        if self.request.method == "GET":
            return (permissions.AllowAny(),)
        return super().get_permissions()

class WatchlistViewSet(ModelViewSet):
    serializer_class = WatchlistSerializer

    def perform_create(self,serializer):
        serializer.save(creator=self.request.user)
        return super().perform_create(serializer)

    def get_queryset(self): 
        if self.request.user:
            if self.request.user.is_superuser:
                return Watchlist.objects.all()
            return Watchlist.objects.filter(creator=self.request.user).order_by("anime_title")
        return JsonResponse({ "Message": "User is not logged in, so no watchlist!" }, status=200)

    def get_permissions(self):
        if self.request.method == "GET":
            return (permissions.AllowAny(),)
        return super().get_permissions()

class GamesViewSet(ModelViewSet):
    queryset = Games.objects.all()
    serializer_class = GamesSerializer

    def perform_create(self,serializer):
        serializer.save(player=self.request.user)
        return super().perform_create(serializer)
    
    def get_queryset(self): 
        if self.request.user:
            if self.request.user.is_superuser:
                return Games.objects.all()
            return Games.objects.filter(player=self.request.user)
        return JsonResponse({ "Message": "User is not logged in, so no scores!" }, status=200)


class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_permissions(self):
        if self.request.method == "POST" or self.request.method == "GET":
            return (permissions.AllowAny(),)
        return (permissions.IsAdminUser(),)

    