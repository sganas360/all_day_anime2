import CurrentAnime from "../components/CurrentAnime"
import TopAnime from "../components/TopAnime"
import SearchBar from "../components/SearchBar"
import HomeGraphic from "../components/HomeGraphic";

function HomePage(){

  return (
    <div>
      <HomeGraphic/>
      <SearchBar/>
      <CurrentAnime/> 
      <hr></hr>
      <TopAnime/>
      <hr className="text"></hr>
      <div className="d-flex justify-content-center">
       <a className = "mb-2"href="#/about-me">About Me</a>
      </div> 
    </div>
  )

}

export default HomePage