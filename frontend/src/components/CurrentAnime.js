import apiThirdParty from "../API/apiThirdParty"
import { useEffect, useState } from "react"
import { Container,Row } from "react-bootstrap"
import "../styles/anime-view.css"
import AnimeCardsList from "./AnimeCardsList"
import SpinnerComponent from "./SpinnerComponent"

function CurrentAnime(){

  const [currentAnimes, setCurrentAnimes] = useState("")
  
  const fetchData = async () => {
    const response = await apiThirdParty.getCurrentAnime()
    if (response.data){
      setCurrentAnimes(response.data.sort(function(a, b){return a.popularity - b.popularity}).slice(0,12))
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    currentAnimes
    ?
    <Container >
      <Row>
        <h1 className="header">Currently Airing</h1>
      </Row>
      <Row>
          <AnimeCardsList animes = {currentAnimes}/>
      </Row>
    </Container>
    :
    <SpinnerComponent/>
  )
}

export default CurrentAnime