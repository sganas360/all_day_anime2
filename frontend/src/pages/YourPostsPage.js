import apiBackend from "../API/apiBackend"
import { useState, useEffect } from "react"
import gojo from "../images/gojo.png"
import PostList from "../components/PostList"
import { Container, Row, Col, Spinner } from "react-bootstrap"

function YourPostsPage () {
  const [yourPosts, setYourPosts] = useState(null)
  
  useEffect(() => {
    loadPosts()
  }, [])

  const loadPosts = async () => {
    const response = await apiBackend.getUserPosts()
    setYourPosts(response ? response : [])
  }
  
  return (
    <div>
      {yourPosts
      ?
      <Container>
        <div className="d-flex justify-content-center">
          <h1 className="header">Your Posts</h1>  
        </div>
        <Row>
         <Col>
            <img id = "gojo" src={gojo}></img>
          </Col> 
          <PostList posts = {yourPosts} />
        </Row>
      </Container>
      :
      <div className=" d-flex justify-content-center">
        <Spinner animation="border" role="status" >
          <span className="visually-hidden"></span>
        </Spinner>
      </div>}
    </div>
  )
}

export default YourPostsPage