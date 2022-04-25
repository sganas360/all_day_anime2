from enum import unique
from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Posts(models.Model):
    title = models.CharField(max_length=128)
    body = models.TextField()
    date = models.DateTimeField(auto_now_add=True, blank=True)
    anime_title = models.CharField(max_length=128)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="posts", default="")

    
class Comments(models.Model):
    text = models.TextField()
    post = models.ForeignKey(Posts, on_delete=models.CASCADE, related_name="comments")
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="comments", default="")
    date = models.DateTimeField(auto_now_add=True, blank=True)

class Watchlist(models.Model):
    anime_title = models.CharField(max_length=128)
    is_finished = models.BooleanField(default=False)
    creator = models.ForeignKey(User, on_delete=models.CASCADE, related_name="list" , default="")
    mal_id = models.IntegerField(default=0)
    
    # class Meta:
    #     unique_together = ("creator" , "anime_title")

class Games(models.Model):
    anime_title = models.CharField(max_length=128)
    score = models.IntegerField(default=0)
    player = models.ForeignKey(User, on_delete=models.CASCADE, related_name="games", default="")
    