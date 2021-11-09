import React, { useState, useEffect, useContext } from "react"
import { Link, Redirect } from "react-router-dom"
import { getSingleBook, addBookToReadingList } from "../../apiCalls"
import { QueryContext } from "../../context/QueryContext"
import Nav from "../Nav/Nav"
import "./Detail.css"
import arrow from "../../arrow.svg"
import { AuthContext } from "../../context/AuthContext"

const Detail = props => {
  const [bookInfo, setBookInfo] = useState({})
  const [error, setError] = useState("")
  // const { user, patchBook, isLoggedin } = useContext(AuthContext)
  const { query } = useContext(QueryContext)
  const { auth, dispatch } = useContext(AuthContext)

  useEffect(() => {
    getSingleBook(query.bookId)
      .then(data => {
        setBookInfo({
          author: data.volumeInfo.authors[0],
          category: data.volumeInfo.categories[0],
          imageLinks: data.volumeInfo.imageLinks.medium,
          title: data.volumeInfo.title,
          rating: data.volumeInfo.averageRating,
          id: data.id,
        })
      })
      .catch(error => {
        setError("Something went side ways")
      })
  }, [query.bookId])

  const addToReadingListDisplay = () => {
    if (auth.isLoggedin) {
      if (auth.user.readingList.some(book => book.id === bookInfo.id)) {
        return <p className="added-text">Added to Reading List</p>
      } else {
        return (
          <button
            className="add-readlist-btn"
            onClick={() => {
              patchBook(bookInfo, query.overview)
            }}>
            Add to reading list
          </button>
        )
      }
    } else {
      return null
    }
  }
   
  const patchBook = (book, overview) => {
    const newBook = {...book, overview: overview};
    addBookToReadingList(newBook, auth.user.id)
    .then((newReadingList) => {
      dispatch({
        type:'SET_READING_LIST', 
        newReadingList: newReadingList
      })
    })
  }

  return !error && query.bookId ? (
    <div className="detail-view">
      <Nav />
      <div className="overview-display">
        <div className="left-container">
          <div className="arrow-container">
            <Link to="/recommendations">
              <img className="go-back-arrow" alt="this is a left arrow" src={arrow} />
            </Link>
          </div>
          {bookInfo.imageLinks ? (
            <img className="detail-cover" alt="large book cover" src={bookInfo.imageLinks} />
          ) : (
            <h2>We don't have a cover for this book but it is a good one </h2>
          )}
        </div>
        <div className="detail-container">
          <div className="detail-info">
            <p className="detail-title">{bookInfo.title}</p>
            <div className="overview-container">
              <p className="detail-overview">{query.overview}</p>
            </div>
            <p className="detail-author">Author: {bookInfo.author} </p>
            <p className="detail-rating">Rating:{bookInfo.rating}</p>
            {addToReadingListDisplay()}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Redirect to="/error" />
  )
}

export default Detail
