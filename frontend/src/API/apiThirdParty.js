import axios from "axios"
import Category from "../components/Category"
import apiHelpers from "./apiHelpers"

const apiThirdParty = {}

//anime API
const BASE_URL = "https://api.jikan.moe/v4/"

apiThirdParty.getCurrentAnime = async () => {
  return await apiHelpers.tryCatchFetch(
    () =>  axios.get(`${BASE_URL}seasons/now`)
  )
}

apiThirdParty.getTopAnime = async () => {
  return await apiHelpers.tryCatchFetch(
    () =>  axios.get(`${BASE_URL}top/anime`)
  )
}

apiThirdParty.getAnimeByTitle = async (animeTitle) => {
  return await apiHelpers.tryCatchFetch(
    () =>  axios.get(`${BASE_URL}anime?q=${animeTitle}&sfw`)
  )
}

apiThirdParty.getAnimeByID = async (animeID) => {
  return await apiHelpers.tryCatchFetch(
    () =>  axios.get(`${BASE_URL}anime/${animeID}`)
  )
}

apiThirdParty.getCharactersByAnimeID = async (animeID) => {
  return await apiHelpers.tryCatchFetch(
    () =>   axios.get(`${BASE_URL}anime/${animeID}/characters`)
  )
}

apiThirdParty.getRecommendationsByAnimeID = async (animeID) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.get(`${BASE_URL}anime/${animeID}/recommendations`)
  )
}

apiThirdParty.getCategoryByID = async (categoryID) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.get(`${BASE_URL}anime?genres=${categoryID}`)
  )
}


// Youtube API

apiThirdParty.getYoutubeVideoWithTitle = async (animeTitle) => {
  return await apiHelpers.tryCatchFetch(
    () =>   axios.post(`http://localhost:8000/get-video`, {"title" : animeTitle},apiHelpers.getCsrfConfig()))

}

export default apiThirdParty