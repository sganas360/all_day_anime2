import json
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.contrib.auth import authenticate, login, logout
import requests, os
from dotenv import load_dotenv

load_dotenv()

def error_on_request(error_msg):
    return JsonResponse({ "Error!": error_msg }, status=400)

def bad_request():
    return error_on_request("Bad Request!")

@csrf_exempt
def handle_login(request):
    try:
        if request.method == "POST":
            data = json.loads(request.body)
            username = data.get("username")
            password = data.get("password")

            user = authenticate(username=username, password=password)
            if user and user.is_active:
                login(request, user)
                return JsonResponse({ "username": user.username }, status=200)
    
    except Exception as e:
        return error_on_request(str(e))
    
    return bad_request()
    
@csrf_exempt
def handle_logout(request):
    try:
        if request.method == "POST":
            logout(request)
            return JsonResponse({ "status": "Logged out successfully" }, status=200)
    
    except Exception as e:
        return error_on_request(str(e))
    
    return bad_request()

def handle_youtube_call(request):

    api_key =  os.environ.get("youtube_key")
    try:
        
        if request.method == "POST":
            data = json.loads(request.body)
            anime_title = data.get("title")
        response = requests.get(f"https://youtube.googleapis.com/youtube/v3/search?part=snippet&q={anime_title}trailer&key={api_key}")

        if(response.ok):
            return JsonResponse({"data":response.json()},status=200)

    except Exception as e:
        return error_on_request(str(e))
    
    return bad_request()