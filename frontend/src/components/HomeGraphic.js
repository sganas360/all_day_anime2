import light from "../images/light.png"
import Atropos from 'atropos/react';

function HomeGraphic (){
  return (
    <div className=" d-flex justify-content-center">
      <Atropos className="my-atropos">
        <img id="home-wallpaper" src={light}></img>
      </Atropos>
    </div> 
  )
}

export default HomeGraphic