import AnimeDetail from '../components/AnimeDetail'
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import apiThirdParty from '../API/apiThirdParty';
import { Spinner } from 'react-bootstrap';
import apiBackend from '../API/apiBackend';

function AnimeDetailPage(props){

  const animeID = useParams()["animeID"]
  const [anime, setAnime] = useState("")
  const [youtubeId, setYoutubeId] = useState("")
  const [animeImage, setAnimeImage] = useState({})
  const [watchlist, setWatchlist] = useState("")

  const fetchData = async () => {
    const response = await apiThirdParty.getAnimeByID(animeID)
    if(response.data){
      setAnime(response.data)
      setAnimeImage(response.data.images.jpg.image_url)
    }
    const youtubeData = await apiThirdParty.getYoutubeVideoWithTitle(response.data.title)
    console.log(youtubeData)
    if(youtubeData){
      setYoutubeId(youtubeData.data.items[0].id.videoId)
    }
  }

  const loadWatchlist = async () => {
    const watchlistData = await apiBackend.getWatchlist()
    setWatchlist(watchlistData)
  }
  
  useEffect(() =>{
      fetchData()
      loadWatchlist()
  },[animeID])

  return (
    <div className='my-4'>
      {
      anime
      ?
      <AnimeDetail anime = {anime} animeImage = {animeImage} youtubeId = {youtubeId} watchlist ={watchlist} loadWatchlist = {loadWatchlist} username ={props.username}/>
      :
      <div className=" d-flex justify-content-center">
      <Spinner className = "text" animation="border" role="status">
          <span className="visually-hidden"></span>
      </Spinner>
      </div>
      }
    </div>
  )
}

export default AnimeDetailPage