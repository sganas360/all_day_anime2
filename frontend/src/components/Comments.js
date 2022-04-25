import { Container, Form, Button, Row, Col, Dropdown  } from "react-bootstrap"

function comments (props){

  const renderComments = () => {
    let elements = []
    for(let i = 0; i < props.comments.length; i++){
      if(props.comments[i]){
          elements.push(
            <Container key={`comment${props.comments[i].id}`}>
              <Row>
                <hr className="text"></hr>
                <Col className="text" key={`comment#${props.comments[i].id}`}>
                  <h6>{props.comments[i].text}</h6>
                  <p className="italics">By: {props.comments[i].author}</p> 
                </Col>
                { props.username == props.comments[i].author &&
                <Col className="col-1">
                  <Dropdown>
                    <Dropdown.Toggle className="btn-primary">
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item onClick = { ()=> props.handleEditComment(props.comments[i].id , props.comments[i].text) }>
                        Edit
                      </Dropdown.Item> 
                      <Dropdown.Item onClick={()=>props.handleDeleteComment(props.comments[i].id)}>
                        Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>}
              </Row>
            </Container>
        )
      }
    }
    return elements
  }

  const renderCommentForm = () => {
    return(
      <Form onSubmit = { props.handleSubmitComment }>
        <Form.Group className="my-3">
        <Form.Label className="header">Add New Comment:</Form.Label>
        <textarea className = "form-control" placeholder="Enter your comment" name ="text" />
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    )
  }

 
  return (
    <Container>
      <h1 className="header">Comments:</h1>
      { props.comments && renderComments()}
      {props.username && renderCommentForm()}
    </Container>
  ) 
}

export default comments