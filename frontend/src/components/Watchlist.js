import { Col } from "react-bootstrap"

function Watchlist (props){

  return (
        <Col>
          <h1 className="header">Watchlist</h1>
          {props.watchlist[0]
          ? 
          props.watchlist.map( entry => {
            return <li key = {`watchlist${entry.id}`}className="text"><a  href = {`/#/anime/${entry.mal_id}`}>{entry.anime_title}</a></li>
            }
          )
          :
          <p className="text">You do not have anything in your watchlist.</p>}
        </Col>
  )
}

export default Watchlist