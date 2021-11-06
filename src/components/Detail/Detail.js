import React, { useState, useEffect, useContext } from "react"
import { Link, Redirect } from "react-router-dom"
import { getSingleBook } from "../../apiCalls"
import { QueryContext } from "../../context/QueryContext"
import Nav from "../Nav/Nav"
import "./Detail.css"
import arrow from '../../arrow.svg'

const Detail = props => {
  const [bookInfo, setBookInfo] = useState({})
  const [error, setError] = useState('')
  const { query } = useContext(QueryContext)

  useEffect(() => {
    getSingleBook(query.bookId)
      .then(data => {
        setBookInfo({
          author: data.volumeInfo.authors[0],
          category: data.volumeInfo.categories[0],
          imageLinks: data.volumeInfo.imageLinks.medium,
          title: data.volumeInfo.title,
          rating: data.volumeInfo.averageRating,
        })
      })
      .catch(error => {
        console.error(error)
        setError('Something went side ways')
      })
  }, [query.bookId])

  return (
    !error && query.bookId ? (
    <div className="detail-view">
      <Nav />
      <div className="overview-display">
        <div className="right-container">
          <Link to="/recommendations">
            <img className="go-back-arrow" alt="this is a left arrow" src={arrow} />
          </Link>
          {bookInfo.imageLinks ? <img className="detail-cover" alt="large book cover" src={bookInfo.imageLinks} /> : 
          <h2>We don't have a cover for this book but it is a good one :)</h2>}
        </div>
        <div className="detail-container">
          <div className="detail-info">
            <p className="detail-title">{bookInfo.title}</p>
            <div className="overview-container">
              <p className="detail-overview">{query.overview}</p>
            </div>
            <p className="detail-author">Author: {bookInfo.author} </p>
            <p className="detail-rating">Rating:{bookInfo.rating}</p>
            <p className="buying-links">Links</p>
            <button className="add-readlist-btn">Add to reading list</button>
          </div>
        </div>
      </div>
    </div>
  ) : <Redirect to="/error" />
  )
}

export default Detail
