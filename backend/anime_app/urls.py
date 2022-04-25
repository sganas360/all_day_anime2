from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views_auth import handle_login, handle_logout, handle_youtube_call
from .views import *

router = DefaultRouter()
router.register("posts" , PostsViewSet, basename="post")
router.register("comments" , CommentsViewSet, basename="comment")
router.register("watchlist" , WatchlistViewSet, basename="watchlist")
router.register("games" , GamesViewSet, basename="game")
router.register("users" , UserViewSet, basename="user")
# router.register("anime" , AnimeViewSet, basename="anime")



urlpatterns = [
    path("",include(router.urls)),
    path("login",handle_login),
    path("logout",handle_logout),
    path("get-video",handle_youtube_call)

]
