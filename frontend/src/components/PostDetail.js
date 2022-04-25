import { Card, Button, Form } from "react-bootstrap"

function PostDetail (props) {

  const renderEditPostForm = () => {
    return (
      <Form onSubmit = { props.handleEditPost }>
      <Form.Group className="mb-3">
        <Form.Label className="header">Title</Form.Label>
        <Form.Control type="text"  name = "title" defaultValue={props.post.title} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="header">Body</Form.Label>
        <textarea className = "form-control" rows = "3" defaultValue={props.post.body} name ="body" />
      </Form.Group>
      <Button variant="primary" type="submit">Submit</Button>
    </Form>
    )
  }

  return (
    <div>
      <Card>
        <Card.Body>
          <div>
          <h1 className="header"><strong>{props.post && props.post.anime_title}</strong></h1>
             <h4 className="header">{props.post && props.post.title}</h4>
             <p className="italics text">{props.author && `By: ${props.author.username} on ${props.post.date}`} </p>
             <p className="text">{props.post && props.post.body}</p>
             {(props.username == props.author.username)
             &&
             <div className="d-flex justify-content-between">
                <Button variant="primary" onClick = {() => props.setWantToEdit(!props.wantToEdit)}>{props.wantToEdit ? "Never Mind": "Edit" }</Button>
                <Button variant="danger mx-3" onClick = { () => props.handleDeletePost(props.post.id) }>Delete</Button>
             </div>}
          </div>
      </Card.Body>
    </Card>
    {props.wantToEdit && renderEditPostForm()}
  </div>
  )
}

export default PostDetail