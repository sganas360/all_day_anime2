import { Form, FormControl, Button, Container, Row } from "react-bootstrap"
import { useState, useEffect, useCallback } from "react"
import apiThirdParty from "../API/apiThirdParty"
import AnimeList from "./AnimeList"

function SearchBar() {
  const [animeTitle, setAnimeTitle] = useState("")
  const [animes, setAnimes] = useState([])

  const fetchData = async () => {
    const response = await apiThirdParty.getAnimeByTitle(animeTitle)
    if(response.data){
      setAnimes(response.data)
    }
    console.log(response)
  }
  
  useEffect(() =>{
    if(animeTitle){
      fetchData()
    }
  }, [animeTitle])

  const handleSubmit = (event) => {
    event.preventDefault()
    let title = document.getElementById("searchbar").value
    console.log(title)
    setAnimeTitle(title)
  }

  return (
    <Container >
      <Row>
        <Form className="d-flex" onSubmit ={handleSubmit} >
          <FormControl
            type="text"
            placeholder="Search by title"
            className="me-2"
            aria-label="Search"
            id = "searchbar"
          />
          <Button className="btn-primary" type="submit" >Search</Button>
        </Form>
      </Row>
        {animes && <AnimeList animes = {animes}/>}
    </Container>
  )
}

export default SearchBar;