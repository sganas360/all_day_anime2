import { Col } from "react-bootstrap"

function PostList (props){

  return (
    <Col>
      {
      props.posts
      &&
      props.posts.map( 
        post =>  
        <ul key={`post${post.id}`}className="header">{post.anime_title}:
        &nbsp; 
          <a href={`#/all-posts/${post.id}`}>{post.title}</a>
        </ul>
        )
      }
    </Col>
  )

}

export default PostList