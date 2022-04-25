import { Container, Row } from "react-bootstrap"
import naruto from '../images/naruto.jpeg'
import tanjiro from '../images/tanjiro.webp'
import goku from '../images/goku.webp'
import luffy from "../images/luffy.webp"
import gon from "../images/gon.png"


function GuessCharacterPage(){

  const render = () => {
    const elements = []
    const images = [{url: naruto , title: "Naruto" , id: "1735"}, { url: tanjiro , title: "Demon Slayer", id: "38000"},{url: gon, title: "Hunter X Hunter", id : "11061"} ,{url: luffy, title: "One Piece", id : "21"}, {url: goku , title: "Dragon Ball" , id: "813"}]

    for(let i = 0; i < images.length; i++){
      elements.push(
      <Row className="my-2" key={images[i].title}>
        <div className="col image game">
          <img className="my-2" src={images[i].url}></img>
          <div className="image-overlay">
            <div className="game-title">
              <a className = "game-links" href = {`/#/guess-character/${images[i].id}`}>{images[i].title}</a>
            </div>
          </div>
        </div>
      </Row>
      )
    }
    return elements
  }

  return (
    <div>
      <div className="d-flex justify-content-center">
        <h1 className="header">Guess the Character</h1>
      </div>
      <Container>
       {render()}
     </Container>
    </div>
  )

}

export default GuessCharacterPage