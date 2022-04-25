import { Row } from "react-bootstrap"
import Atropos from 'atropos/react';

function AnimeCardsList (props){

  return (
    <Row>
      {props.animes.slice(0,12).map(anime => (
        <div className="col col-sm-6 col-md-4 col-lg-3 col-xl-2 image" key={anime.title}>
            <Atropos className="my_atropos">
              <img className="my-2" src={anime.images.jpg.image_url}></img>
            <div className="image-overlay">
              <div className="image-title">
                <a className = "links" href = {`/#/anime/${anime.mal_id}`}>{anime.title_english ? anime.title_english : anime.title}</a>
              </div>
            </div>
          </Atropos>
        </div>
      )
    )}
    </Row>      
  )
}

export default AnimeCardsList