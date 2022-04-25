import { Container,Row,Col } from "react-bootstrap"
import profile from "../images/profile.jpg"

function AboutMePage (){
  return(
    <Container>
        <div className="d-flex justify-content-center">
          <div>
            <img className ="my-4" id="profile" src = {profile} ></img>
            <p className="text">First of all, thank you so much for visiting my site. This personal project took a lot of time and effort.
              I wanted to highlight everything I have learned thus far. This includes using state values and conditional rendering
              in React and building a REST api for the backend in Django. I am also a big anime fan, so I thought it would be fitting to make
              my first application on something that I am passionate about. I hope you all enjoy.
            </p>
            <h6 className="text">- Shun G</h6>
          </div>
        </div> 
    </Container>
  )
}

export default AboutMePage