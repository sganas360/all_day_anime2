import apiThirdParty from "../API/apiThirdParty"
import { useEffect, useState } from "react"
import { Container,Row } from "react-bootstrap"
import "../styles/anime-view.css"
import AnimeCardsList from "./AnimeCardsList"
import SpinnerComponent from "./SpinnerComponent"

function TopAnime(){

  const [topAnimes, setTopAnimes] = useState(null)
  const fetchData = async () => {
    const response = await apiThirdParty.getTopAnime()
    if(response){
      setTopAnimes(response.data.slice(0,12))
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    topAnimes
    ?
    <Container >
      <Row>
        <h1 className="header">Highly Rated Anime</h1>
      </Row>
        <AnimeCardsList animes = {topAnimes}/>
    </Container>
    :
    <SpinnerComponent/>
  )
}

export default TopAnime