import { Container, Form, Button } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import apiBackend from "../API/apiBackend"

function WritePostPage(){

  const animeTitle = useParams()["animeTitle"]
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    let reviewData = {
      title: event.target.elements["title"].value,
      body: event.target.elements["body"].value,
      anime_title : animeTitle,
      comments : []
    }
    const response = await apiBackend.postPost(reviewData)
    if(response){
      navigate(`/all-posts/${response.id}`)
    }
  }

  return (
    <Container>
      <h2 className="header">Write a Post About: "{animeTitle}"</h2>
      <Form onSubmit = { handleSubmit }>
          <Form.Group className="mb-3">
            <Form.Label className="header">Title</Form.Label>
            <Form.Control type="text"  name = "title" placeholder="Enter title" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="header">Body</Form.Label>
            <textarea className = "form-control" rows = "3" placeholder="Enter body" name ="body" />
          </Form.Group>
          <Button variant="primary" type="submit">Submit</Button>
        </Form>
    </Container>
  )
}

export default WritePostPage