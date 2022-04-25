import axios from "axios"
import apiHelpers from "./apiHelpers"

const apiBackend = {}
const BASE_URL = "http://localhost:8000"

//authentication API methods

apiBackend.login = async (loginData) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.post(`${BASE_URL}/login`, loginData, apiHelpers.getCsrfConfig())
  )
}

apiBackend.logout = async () => {
  return await apiHelpers.tryCatchFetch(
    () => axios.post(`${BASE_URL}/logout`, null, apiHelpers.getCsrfConfig())
  )
}

apiBackend.signup = async (signupData) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.post(`${BASE_URL}/users/`, signupData, apiHelpers.getCsrfConfig())
  )
}

// API methods
// POSTS methods
apiBackend.postPost = async (postData) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.post(`${BASE_URL}/posts/`, postData, apiHelpers.getCsrfConfig())
  )
}

apiBackend.getAllPosts = async () => {
  return await apiHelpers.tryCatchFetch(
    () => axios.get(`${BASE_URL}/posts/`, apiHelpers.getCsrfConfig())
  )
}

apiBackend.getPostByID = async (postID) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.get(`${BASE_URL}/posts/${postID}`, apiHelpers.getCsrfConfig())
  )
}

apiBackend.deleteTaskByID = async (postID) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.delete(`${BASE_URL}/posts/${postID}`, apiHelpers.getCsrfConfig())
  )
}

apiBackend.getUserPosts = async () => {
  return await apiHelpers.tryCatchFetch(
    () => axios.get(`${BASE_URL}/posts/get_user_posts/`, apiHelpers.getCsrfConfig())
  )
}

apiBackend.editPostByID = async (postData, postID) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.patch(`${BASE_URL}/posts/${postID}/`, postData, apiHelpers.getCsrfConfig())
  )
}

// USER methods
apiBackend.getUserByID = async (userID) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.get(`${BASE_URL}/users/${userID}`, apiHelpers.getCsrfConfig())
  )
}

// COMMENTS methods
apiBackend.postComment = async (commentData) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.post(`${BASE_URL}/comments/`, commentData, apiHelpers.getCsrfConfig())
  )
}

apiBackend.getCommentByID = async (commentID) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.get(`${BASE_URL}/comments/${commentID}`, apiHelpers.getCsrfConfig())
  )
}

apiBackend.deleteCommentByID = async (commentID) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.delete(`${BASE_URL}/comments/${commentID}`, apiHelpers.getCsrfConfig())
  )
}

apiBackend.editComment = async (commentData , commentID) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.patch(`${BASE_URL}/comments/${commentID}/`, commentData, apiHelpers.getCsrfConfig())
  )
}

//WATCHLIST methods
apiBackend.addWatchlist = async (watchlistData) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.post(`${BASE_URL}/watchlist/`, watchlistData, apiHelpers.getCsrfConfig())
  )
}

apiBackend.getWatchlist = async () => {
  return await apiHelpers.tryCatchFetch(
    () => axios.get(`${BASE_URL}/watchlist/`, apiHelpers.getCsrfConfig())
  )
}

apiBackend.deleteWatchlistByID = async (watchlistID) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.delete(`${BASE_URL}/watchlist/${watchlistID}`, apiHelpers.getCsrfConfig())
  )
}

//GAMES methods
apiBackend.recordGame = async (gameData) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.post(`${BASE_URL}/games/`, gameData, apiHelpers.getCsrfConfig())
  )
}

apiBackend.getPlayerScores = async () => {
  return await apiHelpers.tryCatchFetch(
    () => axios.get(`${BASE_URL}/games/`, apiHelpers.getCsrfConfig())
  )
}

export default apiBackend