import {Button, Form, Container, Row, Col } from "react-bootstrap"
import apiBackend from "../API/apiBackend"
import levi from "../images/levi.png"
import { useNavigate } from "react-router-dom"
import Cookies from "js-cookie"

function LoginPage (props) {

  //router params
  const navigate = useNavigate()

  const handleLogin = async (event) => {
    event.preventDefault()
    let loginData = {
      username: event.target.elements["username"].value,
      password: event.target.elements["password"].value
    }
    console.log(loginData)
    const response = await apiBackend.login(loginData)
    console.log(response)
    if(response){
      Cookies.set("username", response.username)
      props.setUsername(response.username)
      navigate("/")
    }
    else{
      alert("Incorrect username/password combination")
    }
  }

   return ( 
   <Container className="my-4">
    <Row>
      <Col className=" d-flex justify-content-center">
        <div>
          <h3 className="header">Log In</h3>
          <img src={levi}></img>
        </div>
      </Col> 
      <Col>
        <Form onSubmit={ handleLogin }>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label className="header">Username</Form.Label>
            <Form.Control type="text" name="username" placeholder="Enter username" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="header">Password</Form.Label>
            <Form.Control type="password" name ="password" placeholder="Enter password" />
          </Form.Group>
          <Button variant="primary" type="submit">Login</Button>
        </Form>
      </Col>
    </Row>
    
  </Container>
  )
}

export default LoginPage