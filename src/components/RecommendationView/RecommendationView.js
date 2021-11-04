import React, { useState, useEffect, useContext } from "react"
import { QueryContext } from "../../context/QueryContext"
import RecommendationCard from "../RecommendationCard/RecommendationCard"
import "./RecommendationView.css"
import uniqueString from "unique-string"
import Nav from "../Nav/Nav"
import { Link, Redirect } from "react-router-dom"

const RecommendationView = () => {
  const [searchResults, setSearchResults] = useState([])
  const [error, setError] = useState('')
  const { category, bookTitle } = useContext(QueryContext)

  // const book = bookTitle.split('+').join()

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=subject:${category}&maxResults=40&key=AIzaSyBf2vrFs43KCXYdALCcDGm_EeC-3BpS-5w`
    )
      .then(response => {
        if (!response.ok) {
          throw new Error(`Status: ${response.status}`)
        }
        return response.json()
      })
      .then(data => {
        const filteredResults = data.items
          .filter(result => result.volumeInfo.imageLinks && result.volumeInfo.categories && result.volumeInfo.title)
          .filter(result => result.volumeInfo.averageRating)
          .sort((a, b) => b.volumeInfo.averageRating - a.volumeInfo.averageRating)

        const cardInfo = filteredResults.map(result => {
          let bookKey = uniqueString()
          return {
            category: result.volumeInfo.categories[0],
            imageLinks: result.volumeInfo.imageLinks.thumbnail,
            title: result.volumeInfo.title,
            key: bookKey,
            averageRating: result.volumeInfo.averageRating,
            id: result.id,
            overview: result.volumeInfo.description,
          }
        })
        setSearchResults(cardInfo)
      })
      .catch(error => {
        console.error(error)
        setError('Something went side ways')
      })
  }, [category])

  const recommendationCards = searchResults.map(searchResult => {
    return (
      <Link to="/details">
        <RecommendationCard
          className={"card"}
          imageLinks={searchResult.imageLinks}
          title={searchResult.title}
          key={searchResult.key}
          id={searchResult.id}
          overview={searchResult.overview}
        />
      </Link>
    )
  })

  return (
    !error && category ? (
      <div className="recommendation-view">
        <Nav />
        <div className="display-body-recommendation">
          <p className=".p-prompt-recommendation">Because you liked {bookTitle} you might like these books</p>
          <div className="card-container-recommendation">{recommendationCards}</div>
        </div>
      </div>
    ) : <Redirect to='/error' />
  )
}

export default RecommendationView
