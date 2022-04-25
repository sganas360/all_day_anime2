import apiBackend from "../API/apiBackend"
import { Container, Row, Button, Col } from "react-bootstrap"

function AnimeDetail(props){

  const handleAddToWatchlist = async () => {
    const watchlistData = {
      anime_title : props.anime.title_english ? props.anime.title_english : props.anime.title,
      is_finished : false,
      mal_id : props.anime.mal_id
    }
    console.log(props.anime.id)
    const response = await apiBackend.addWatchlist(watchlistData)
    console.log("response?",response)
    props.loadWatchlist()
  }

  const handleRemoveFromWatchlist = async (watchlistID) =>{
    const response = await apiBackend.deleteWatchlistByID(watchlistID)
    if(response){
      props.loadWatchlist()
    }
    
  }

  const renderWatchlistButton = () => { 
    if(props.watchlist){
      for(let i = 0; i < props.watchlist.length; i++){
      if(props.watchlist[i].anime_title == (props.anime.title_english ? props.anime.title_english : props.anime.title)){
        return <Button className="btn-primary my-2" onClick = { () => handleRemoveFromWatchlist(props.watchlist[i].id) } >Remove From Watchlist</Button>
        }
      }
    }
    
    return <Button className="btn-primary my-2" onClick = { handleAddToWatchlist } >Add To Watchlist</Button>
  }

  return(
    <Container>
      <Row>
        <div className="col"> 
          <img src = {props.animeImage && props.animeImage}></img>
          {props.username
          &&
          <div>
            <Button className="btn-primary my-2" href = {`#/write-post/${props.anime.title_english ? props.anime.title_english : props.anime.title}`}type="submit" >Write a Post</Button>
            <br></br>
            {renderWatchlistButton()}
          </div>}
        </div>
        <div className="col-8">
          <h1 className="header">{props.anime.title_english ? props.anime.title_english : props.anime.title }</h1>
          <p  className ="text-justify header">{props && props.anime.synopsis}</p>
          <a href={props.anime.url} target="_blank">More Information</a>
        </div>
      </Row>
      <Row>
        <h3 className="header my-2">Related Video:</h3>
          <div className = "wrapper">
          <iframe src={`https://www.youtube.com/embed/${props.youtubeId}`} title="YouTube video player"  allowFullScreen></iframe>
        </div>
      </Row> 
    </Container>
  )
}

export default AnimeDetail