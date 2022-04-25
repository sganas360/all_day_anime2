import {Navbar, Container, Row, Nav, NavDropdown, Button} from "react-bootstrap"
import Cookies from "js-cookie";
import apiBackend from "../API/apiBackend";


function AppNav(props) { 

  const categories = [{name : "Action" , mal_id : "1"}, 
  {name : "Adventure" , mal_id : "2"}, {name : "Comedy" , mal_id : "4"}, 
  {name : "Drama" , mal_id : "8"}, {name : "Fantasy" , mal_id : "10"}, 
  {name : "Horror" , mal_id : "14"}, {name : "Romance" , mal_id : "22"}, 
  {name : "Sci-Fi" , mal_id : "24"}, {name : "Slice of Life" , mal_id : "36"}, 
  {name : "Sports" , mal_id : "30"}]

  const doLogout = async () => {
    const response = await apiBackend.logout()
    if (response) {
      Cookies.set("username","")
      props.setUsername(Cookies.get("username"))
    }
  }

  return (
    <div>
      <Navbar className="bar">
        <Container>
          <Row>
            <Nav>
              <Navbar.Brand href="/"><h4>Home</h4></Navbar.Brand>
              <NavDropdown title="Categories" id="navbarScrollingDropdown">
                {categories.map( category => (
                  <Nav.Link href ={`#/category/${category.mal_id}/${category.name}`}>{`${category.name}`}</Nav.Link>
                ))}
              </NavDropdown>
              {
                props.username
                ?
                <NavDropdown title="Posts" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#/all-posts">All Posts</NavDropdown.Item>
                  <NavDropdown.Item href="#/your-posts">Your Posts</NavDropdown.Item>
                </NavDropdown>
                :
                <Nav.Link href="#/all-posts">All Posts</Nav.Link>
              }
              {props.username && <Nav.Link  href="#/profile">Profile</Nav.Link>}
              <Nav.Link  href="#/guess-character">Guess the Character Game</Nav.Link>
              {
                props.username
                ?
                <Button onClick = { doLogout }className="btn-primary" type="submit" >Log Out</Button>
                :
                <>
                  <Nav.Link  href="#/signup">Sign Up</Nav.Link>
                  <Nav.Link  href="#/login">Log In</Nav.Link>
                </>
              }
            </Nav>
          </Row>
          {props.username && <h5>{`Hello ${props.username}`} </h5>}
        </Container>
      </Navbar> 
    </div>
  )
}

export default AppNav;