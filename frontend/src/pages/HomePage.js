import CurrentAnime from "../components/CurrentAnime"
import TopAnime from "../components/TopAnime"
import SearchBar from "../components/SearchBar"
import light from "../images/light.png"
function HomePage(){

  return (
    <div>
      <div className=" d-flex justify-content-center">
        <img id="home-wallpaper" src={light}></img>
      </div> 
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