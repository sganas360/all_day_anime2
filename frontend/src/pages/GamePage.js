import { useState, useEffect } from "react"
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Container } from "react-bootstrap";
import apiThirdParty from "../API/apiThirdParty";
import apiBackend from "../API/apiBackend";

function GamePage (){

  const animeID = useParams()["animeID"]
  const [animeTitle, setAnimeTitle] = useState("")
  const [currentCharacters, setCurrentCharacters] = useState("")
  const [characterImg, setCharacterImg] = useState("")
  const [correctAnswer, setCorrectAnswer] = useState("")
  const [answers, setAnswers ] = useState([])
  const [score, setScore] = useState(0)
  const [isGameStarted, setIsGameStarted] = useState(false)
  const navigate = useNavigate()

  const fetchData = async () => {
    const response = await apiThirdParty.getCharactersByAnimeID(animeID)
    if(response.data){
      setCurrentCharacters(response.data)
    }
    const response2 = await apiThirdParty.getAnimeByID(animeID)
    if(response2.data){
      setAnimeTitle(response2.data.title_english ? response2.data.title_english : response2.data.title)
    }
  }

  useEffect(() => {
    fetchData()
  }, [animeID])

  const renderGame = () => {
    let randomNum = Math.floor(Math.random() * currentCharacters.length)
    let elements = []
    setCharacterImg(currentCharacters[randomNum].character.images.jpg.image_url)
    setCorrectAnswer(currentCharacters[randomNum].character.name)
    elements.push(currentCharacters[randomNum].character.name)
    currentCharacters.splice(randomNum,1)
    for(let i = 0; i < 3; i++){
      randomNum = Math.floor(Math.random() * currentCharacters.length)
      elements.push(currentCharacters[randomNum].character.name)
    }
    setAnswers(elements)
    setIsGameStarted(true)
  }

  const checkAnswer = async (answerToCheck) => {
    console.log(answerToCheck)
    if(answerToCheck == correctAnswer){
      setScore(score + 1)
      renderGame()
    }
    else{
      alert(`Sorry! Your answer was incorrect. The correct answer is ${correctAnswer}. Your final score was ${score}`)
      const gameData = {
        anime_title : animeTitle,
        score : score,
      }
      const response = await apiBackend.recordGame(gameData)
      if(response){
        navigate("/profile")
      }
      else{
        navigate("/guess-character")
      }
    }
  }

  return (
    <div className="my-4">
      <Container>
        <div className="d-flex justify-content-center">
          { characterImg && <img className="character" src={characterImg}></img>} 
        </div> 
        <div className="d-flex justify-content-between">
          <h3 className="header">Who That?</h3>
          <h2 className="header">Your Score: {score} </h2> 
        </div>
        <Row>
          {currentCharacters
          &&
          <>
              { isGameStarted ?  null : <Button onClick = {renderGame}>START</Button>}
          </>
          }
          { answers && answers.sort(() => Math.random() - 0.5).map((answer,index) => 
            {
            return <Button className="my-2" key = {`${answer}`+answer+index} onClick = {() => checkAnswer(answer)}>{answer}</Button>
            })
          }
        </Row>
      </Container>
    </div>
  )
}

export default GamePage