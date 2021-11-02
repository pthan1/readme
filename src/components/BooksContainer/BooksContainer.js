import React, { useState, useEffect, useContext } from "react"
import { QueryContext } from "../../context/QueryContext"
import BookCard from "../BookCard/BookCard"
import "./BooksContainer.css"
import uniqueString from "unique-string"
import Nav from "../Nav/Nav"

const BooksContainer = () => {
  const [searchResults, setSearchResults] = useState([])
  const { bookTitle, category, addCategory, searchToggle, switchSearchToggle } = useContext(QueryContext)

  useEffect(() => {
    if (searchToggle) {
      fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}&maxResults=15&key=AIzaSyBf2vrFs43KCXYdALCcDGm_EeC-3BpS-5w`
      )
        .then(response => response.json())
        .then(data => {
          const filteredResults = data.items.filter(
            result => result.volumeInfo.imageLinks && result.volumeInfo.categories && result.volumeInfo.title
          )
          const cardInfo = filteredResults.map(result => {
            if (result.volumeInfo.imageLinks && result.volumeInfo.categories && result.volumeInfo.title) {
              let bookKey = uniqueString()
              return {
                category: result.volumeInfo.categories[0],
                imageLinks: result.volumeInfo.imageLinks.thumbnail,
                title: result.volumeInfo.title,
                key: bookKey,
              }
            }
          })
          setSearchResults(cardInfo)
        })
    }
    if (!searchToggle) {
      fetch(
        `https://www.googleapis.com/books/v1/volumes?q=subject:${category}&maxResults=40&key=AIzaSyBf2vrFs43KCXYdALCcDGm_EeC-3BpS-5w`
      )
        .then(response => response.json())
        .then(data => {
          const filteredResults = data.items
            .filter(result => result.volumeInfo.imageLinks && result.volumeInfo.categories && result.volumeInfo.title)
            .filter(result => result.volumeInfo.averageRating)
            .sort((a, b) => b.volumeInfo.averageRating - a.volumeInfo.averageRating)

          const cardInfo = filteredResults.map(result => {
            if (result.volumeInfo.imageLinks && result.volumeInfo.categories && result.volumeInfo.title) {
              let bookKey = uniqueString()
              return {
                category: result.volumeInfo.categories[0],
                imageLinks: result.volumeInfo.imageLinks.thumbnail,
                title: result.volumeInfo.title,
                key: bookKey,
                averageRating: result.volumeInfo.averageRating,
              }
            }
          })
          setSearchResults(cardInfo)
          switchSearchToggle()
        })
    }
  }, [bookTitle])

  const bookCards = searchResults.map(searchResult => {
    return (
      <BookCard
        className={"card"}
        imageLinks={searchResult.imageLinks}
        title={searchResult.title}
        key={searchResult.key}
        category={searchResult.category}
        addCategory={addCategory}
        switchSearchToggle={switchSearchToggle}
      />
    )
  })

  return searchResults ? (
    <>
      <div className="books-container-view">
        <Nav />
        <div className="display-body">
          {searchToggle ? (
            <p className="p-prompt">To give your more precise recommendations, please select one of these books</p>
          ) : (
            <h2>Our Recommendations</h2>
          )}
          <div className="card-container">{bookCards}</div>
        </div>
      </div>
    </>
  ) : (
    <>
      <Nav />
      <div>
        <h2>something went wrong</h2>
      </div>
    </>
  )
}

export default BooksContainer
