import React, { useState, useEffect, useContext } from "react"
import { QueryContext } from "../../context/QueryContext"
import BookCard from "../BookCard/BookCard"
import "./BooksContainer.css"
import uniqueString from "unique-string"
import Nav from "../Nav/Nav"
import { Link, Redirect } from "react-router-dom"
import { getBooksTitle } from "../../apiCalls"

const BooksContainer = () => {
  const [searchResults, setSearchResults] = useState([])
  const [error, setError] = useState("")
  const { query } = useContext(QueryContext)

  useEffect(() => {
    getBooksTitle(query.bookTitle)
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
        setError("Something went side ways")
      })
  }, [query.bookTitle])

  const bookCards = searchResults.map(searchResult => {
    return (
      <Link to="/recommendations" className="search-card-link">
        <BookCard
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
          <p className="p-prompt">Please select a book to receive tailored recommendations</p>
          <div className="card-container">
          {bookCards.length < 1 ? <p>Sorry we didn't find any books.  Please search again.</p> : bookCards}
        </div>
      </div>
      </div>
    ) : <Redirect to='/error' />
  )
}

export default BooksContainer
