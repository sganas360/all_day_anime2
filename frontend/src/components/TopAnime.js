import apiThirdParty from "../API/apiThirdParty"
import { useEffect, useState } from "react"
import { Container,Row, Spinner } from "react-bootstrap"
import "../styles/anime-view.css"

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
      <Row>
        {topAnimes.slice(0,12).map(anime => (
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

export default TopAnime