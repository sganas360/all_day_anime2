import { Col,Dropdown } from "react-bootstrap"

function GameScores (props){

  const headers = []

  const getUniqueHeaders = () => {
    for(let i = 0; i < props.games.length; i++){
      if(!headers.includes(props.games[i].anime_title)){
        headers.push(props.games[i].anime_title)
      }
    }
  }

  const handleClick = (title) => {
    const filteredGames = props.games.filter(game => game.anime_title == title)
    props.setSelectedGames(filteredGames)
  }

  return(
      <Col>
        <h1 className="header">Game Scores</h1>
        {props.games && getUniqueHeaders()}
        {headers.length != 0  
        ?
        <Dropdown>
          <Dropdown.Toggle className="btn-primary">
            Select Title
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {headers.map(title => (<Dropdown.Item onClick = {()=>handleClick(title)}>{title}</Dropdown.Item>) )}
          </Dropdown.Menu>
        </Dropdown>
        :
        <p className="text">You do not have any game scores.</p>
        }
        <div className="my-2">
          {props.selectedGames
            &&
            props.selectedGames.map( game => {
              return <li key={`game${game.id}`}className="text">{game.anime_title} : {game.score}</li>
              })
          }
        </div>
      </Col>
    
  )

}

export default GameScores