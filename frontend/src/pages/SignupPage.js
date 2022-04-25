import {Button, Form, Container, Row, Col } from "react-bootstrap"
import killua from "../images/killua.jpeg"
import { useNavigate } from "react-router-dom"
import apiBackend from "../API/apiBackend"

function SignupPage () {
  const navigate = useNavigate()

  const handleSignup = async (event) => {
    event.preventDefault()
    let signupData = {
      username: event.target.elements["username"].value,
      password: event.target.elements["password"].value,
      list: [],
      posts: []
    }
    const response = await apiBackend.signup(signupData)
    if(response){
      navigate("/login")
    }
  }

   return ( 
   <Container className="my-4">
    <Row>
      <Col>
        <Form onSubmit = { handleSignup }>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label className="header">Username</Form.Label>
            <Form.Control type="text" name = "username" placeholder="Enter username" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="header">Password</Form.Label>
            <Form.Control type="password" name = "password" placeholder="Enter password" />
          </Form.Group>
          <Button variant="primary" type="submit">Sign Up</Button>
        </Form>
      </Col>
      <Col>
      <h3 className="header">Sign Up</h3>
      <img src= {killua} ></img>
      </Col>
    </Row>
  </Container>
  )
}

export default SignupPage