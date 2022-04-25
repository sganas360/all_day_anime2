import apiThirdParty from "../API/apiThirdParty"
import { useEffect, useState } from "react"
import { Container,Row, Spinner } from "react-bootstrap"
import "../styles/anime-view.css"


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
          {currentAnimes.slice(0,12).map(anime => (
          <div className="col col-sm-6 col-md-4 col-lg-3 col-xl-2 image" key={anime.title}>
            <img className="my-2" src={anime.images.jpg.image_url}></img>
            <div className="image-overlay">
              <div className="image-title">
                <a className = "links" href = {`/#/anime/${anime.mal_id}`}>{anime.title_english ? anime.title_english : anime.title}</a>
                </div>
            </div>
          </div>
          )
        )}
      </Row>
    </Container>
    :
    <div className=" d-flex justify-content-center">
       <Spinner animation="border" role="status" >
        <span className="visually-hidden"></span>
      </Spinner>
    </div>
  )
}

export default CurrentAnime