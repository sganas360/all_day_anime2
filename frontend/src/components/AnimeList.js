import { Card, Container, Row, Col, Button } from "react-bootstrap"
import "../styles/anime-list.css"

function AnimeList(props){
  return (
    <Container>  
      <Row>
      {
        props.animes.map((anime) => (
          <Col className="mb-2 mt-2 hovereffect col-sm-6 col-md-4 col-lg-3 col-xl-2" key={anime.title}>
            <Card style= {{ width: "12rem"}} className ="h-100 cards">
              <a href = {`/#/anime/${anime.mal_id}`}><Card.Img className = "card-image" src = {anime.images.jpg.image_url}/></a>
              <Card.Body>
                <Card.Text>{anime.title}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))
      } 
      </Row>
    </Container>
  )
}

export default AnimeList