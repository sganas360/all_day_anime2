import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import apiBackend from "../API/apiBackend"
import { Container } from "react-bootstrap"
import PostDetail from "../components/PostDetail"
import Comments from "../components/Comments"

function PostsPage (props){

  const postID = useParams()["postID"]
  const [post, setPost] = useState(null)
  const [author, setAuthor] = useState("")
  const [comments, setComments] = useState("")
  const navigate = useNavigate()
  const[wantToEdit, setWantToEdit] = useState(false)

  useEffect(() => {
    loadData()
  }, [postID])

  useEffect(() => {
    loadComments()
  }, [post])

  // useEffect(() => {
  //   loadCommentAuthors()
  // }, [comments])

  const loadData = async () => {
    const response = await apiBackend.getPostByID(postID)
    console.log(response)
    setPost(response ? response : [])
    const author = await apiBackend.getUserByID(response.author)
    setAuthor(author ? author : "Anonymous User")
  }

  const loadComments = async () => {
    if(post){
      let newComments = []
      if(post.comments){
        for(const commentID of post.comments){
          newComments.push(await apiBackend.getCommentByID(commentID))
        }
      }
      setComments(newComments)
    }
  }

  const handleDeletePost = async (postID) => {
    await apiBackend.deleteTaskByID(postID)
    navigate("/all-posts/")
  }

  const handleEditPost = async (event) => {
    event.preventDefault()
    const postData = {
      title: event.target.elements["title"].value,
      body: event.target.elements["body"].value,
    }
    const data = await apiBackend.editPostByID(postData, post.id)
    if(data){
      loadData()
    }
    setWantToEdit(!wantToEdit)
  }
  
  const handleSubmitComment = async (event) => {
    event.preventDefault()
    let commentData = {
      text: event.target.elements["text"].value,
      post: postID,
    }
    console.log(commentData)
    const response = await apiBackend.postComment(commentData)
    setComments( comments => [...comments,response])
    event.target.elements["text"].value = ""
  }

  const handleDeleteComment = async (commentID) => {
    const response = await apiBackend.deleteCommentByID(commentID)
    console.log(response)
    loadData()
  }

  const handleEditComment = async (commentID , defaultValue) =>{
    const editedComment = prompt("Enter edited comment" , defaultValue)
    let commentData = {
      text : editedComment
    }
    const response = await apiBackend.editComment(commentData, commentID )
    loadData()
  }



  return (
    <Container className="my-4">
      <PostDetail post ={post} author ={author} loadData = {loadData} username = {props.username} handleDeletePost = {handleDeletePost} handleEditPost = {handleEditPost} wantToEdit={wantToEdit} setWantToEdit = {setWantToEdit} />
      <Comments handleSubmitComment = {handleSubmitComment} username = {props.username} comments = {comments}  handleDeleteComment = {handleDeleteComment} handleEditComment = {handleEditComment}/>
    </Container>
  )
}

export default PostsPage