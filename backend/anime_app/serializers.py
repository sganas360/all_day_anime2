from django.forms import ValidationError
from requests import request
from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from .models import *

class PostsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Posts
        fields = ["id" , "title" , "body", "date", "anime_title", "comments", "author"]

    # def is_valid(self, raise_exception=False):
    #     return_value = super().is_valid(raise_exception)
    #     if(self.instance.author != self.context["request"].user):
    #         raise ValidationError({"message": "can't update"})
    #     return return_value
        


class CommentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comments
        fields = ["id" , "text" , "post", "author"]
    
    def to_representation(self, instance):
        data = super().to_representation(instance)
        author = User.objects.get(pk=data["author"])
        data["author"] = author.username
        return data

    

class WatchlistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Watchlist
        fields = ["id" , "anime_title" , "is_finished",  "mal_id", "creator"]

class GamesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Games
        fields = ["id" , "anime_title" , "score", "player"]

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id" , "username" , "password" , "list", "posts" ]

    password = serializers.CharField(write_only=True)

    def create(self, validated_data):
        validated_data["password"] = make_password(validated_data["password"])
        return super().create(validated_data)

# class AnimeSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Anime
#         fields = ["id" , "title" , "reviews", "games"]



