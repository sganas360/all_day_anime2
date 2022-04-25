import { Col, Row } from "react-bootstrap";
import Atropos from 'atropos/react';

function RecommendedTitles (props){
  return(
    <Col>
      <h1 className="header">Recommended Titles</h1>
      <Row>
        {props.recommendations
        &&
         props.recommendations.map((anime,index) => (
          <div className="col col-sm-6 col-md-4 col-lg-3 col-xl-2 image" key={`${anime.entry.title}${index}`}>
            <Atropos className="my_atropos">
              <img className="my-2" src={anime.entry.images.jpg.image_url}></img>
            <div className="image-overlay">
              <div className="image-title">
                <a className = "links" href = {`/#/anime/${anime.entry.mal_id}`}>{anime.entry.title}</a>
                </div>
            </div>
            </Atropos>
          </div>
          )
        )}
        </Row>
    </Col>
  )
}

export default RecommendedTitles