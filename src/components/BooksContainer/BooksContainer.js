import React, { useState, useEffect, useContext } from "react"
import { QueryContext } from "../../context/QueryContext"
import BookCard from "../BookCard/BookCard"
import "./BooksContainer.css"
import uniqueString from "unique-string"
import Nav from "../Nav/Nav"
import { Link, Redirect } from "react-router-dom"

const BooksContainer = () => {
  const [searchResults, setSearchResults] = useState([])
  const [error, setError] = useState('')
  const { bookTitle } = useContext(QueryContext)

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}&maxResults=15&key=AIzaSyBf2vrFs43KCXYdALCcDGm_EeC-3BpS-5w`
    )
      .then(response => {
        if (!response.ok) {
          throw new Error(`Status: ${response.status}`)
        }
        return response.json()
      })
      .then(data => {
        const filteredResults = data.items.filter(
          result => result.volumeInfo.imageLinks && result.volumeInfo.categories && result.volumeInfo.title
          )
          const cardInfo = filteredResults.map(result => {
            let bookKey = uniqueString()
            return {
              category: result.volumeInfo.categories[0],
              imageLinks: result.volumeInfo.imageLinks.thumbnail,
              title: result.volumeInfo.title,
              key: bookKey,
            }
          })
          setSearchResults(cardInfo)
        })
        .catch(error => {
          console.error(error)
          setError('Something went side ways')
        })
  }, [bookTitle])

  const bookCards = searchResults.map(searchResult => {
    return (
      <Link to="/recommendations">
        <BookCard
          className={"card"}
          imageLinks={searchResult.imageLinks}
          title={searchResult.title}
          key={searchResult.key}
          bookCategory={searchResult.category}
        />
      </Link>
    )
  })

  return (
    !error ? (
      <div className="books-container-view">
        <Nav />
        <div className="display-body">
          <p className="p-prompt">To give you more precise recommendations, please select one of these books</p>
          <div className="card-container">{bookCards}</div>
        </div>
      </div>
    ) : <Redirect to='/error' />
  )
}

export default BooksContainer
