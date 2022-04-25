import { useEffect, useState } from "react"
import { Container, Row } from "react-bootstrap"
import apiBackend from "../API/apiBackend"
import apiThirdParty from "../API/apiThirdParty"
import GameScores from "../components/GameScores"
import RecommendedTitles from "../components/RecommendedTitles"
import Watchlist from "../components/Watchlist"

function ProfilePage () {

  const [watchlist, setWatchlist] = useState("")
  const [games, setGames] = useState("")
  const [recommendations, setRecommendations] = useState("")
  const [selectedGames, setSelectedGames] = useState("")
  
  useEffect(() =>{
    loadData()
    loadGame()
    
  },[])

const loadData = async () => {
  const watchlistData = await apiBackend.getWatchlist()
  if(watchlistData.length != 0){
    setWatchlist(watchlistData)
    let recommendations = []
    let randomNum = Math.floor(Math.random() * watchlistData.length)
    const recommendationsData = await apiThirdParty.getRecommendationsByAnimeID(watchlistData[randomNum].mal_id)
    if(recommendationsData){
      for(let i = 0; i < 6; i++){
        if(recommendationsData.data[i]){
          recommendations.push(recommendationsData.data[i])
        }
      }
    }
    setRecommendations(recommendations)
  }
}

const loadGame = async () => {
  const gameData = await apiBackend.getPlayerScores()
  if(gameData){
    setGames(gameData)
  }
}

  return (
    <Container>
      <Row>
        <Watchlist watchlist ={watchlist}/>
        <GameScores games = {games} selectedGames = {selectedGames} setSelectedGames = {setSelectedGames}/>
      </Row>
      <Row className="my-4">
        {recommendations && <RecommendedTitles recommendations ={recommendations}/>}
      </Row>
    </Container>
    
  )
}

export default ProfilePage