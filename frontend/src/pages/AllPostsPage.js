import apiBackend from "../API/apiBackend"
import { useEffect, useState } from "react"
import { Container,Row,Col } from "react-bootstrap"
import kakashi from "../images/kakashi.png"
import PostList from "../components/PostList"

function AllPostsPage () {
  const [allPosts, setAllPosts] = useState(null)
  
  useEffect(() => {
    loadPosts()
  }, [])

  const loadPosts = async () => {
    const response = await apiBackend.getAllPosts()
    setAllPosts(response ? response : [])
  }
  
  return (
    <div>
      <Container>
        <div className="d-flex justify-content-center">
          <h1 className="header">All Posts</h1>  
        </div>
        <Row>
          <PostList posts = {allPosts} />
          <Col>
            <img id = "kakashi" src={kakashi}></img>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AllPostsPage