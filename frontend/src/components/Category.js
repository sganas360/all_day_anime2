import { useState, useEffect } from "react"
import apiThirdParty from "../API/apiThirdParty"
import { useParams } from "react-router-dom"
import SpinnerComponent from "./SpinnerComponent"
import AnimeCardsList from "./AnimeCardsList"
import { Container, Row } from "react-bootstrap"

function Category () {

  const [categoryAnimes, setCategoryAnimes] = useState("")
  const categoryID = useParams()["categoryID"]
  const categoryName = useParams()["categoryName"]
  
  const fetchData = async () => {
    const response = await apiThirdParty.getCategoryByID(categoryID)
    console.log(response)
    if (response.data){
      setCategoryAnimes(response.data.sort(function(a, b){return a.popularity - b.popularity}).slice(0,12))
    }
  }

  useEffect(() => {
    fetchData()
  }, [categoryID])

  return (
    categoryAnimes
    ?
    <Container >
      <Row>
        <h1 className="header">{categoryName}</h1>
      </Row>
      <Row>
          <AnimeCardsList animes = {categoryAnimes}/>
      </Row>
    </Container>
    :
    <SpinnerComponent/>
  )

}

export default Category