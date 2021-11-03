import React, { useState, useEffect, useContext } from "react"
import { QueryContext } from "../../context/QueryContext"
import Nav from "../Nav/Nav"
import "./Detail.css"

const Detail = params => {
  const [bookInfo, setBookInfo] = useState({})
  const { bookId } = useContext(QueryContext)

  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}?key=AIzaSyBf2vrFs43KCXYdALCcDGm_EeC-3BpS-5w`)
    .then(response => response.json())
    .then(data => console.log(data))
  })

  return (
    <div className="detail-view">
      <Nav />
      <img className="go-back-arrow" alt="this is a left arrow" />
      <div className="detail-container">
        <img className="detail-cover" alt="large book cover" />
        <div className="detail-info">
          <p className="detail-title"></p>
          <p className="detail-overview"></p>
          <p className="detail-author">Author: </p>
          <p className="detail-rating">Rating:</p>
          <p className="buying-links">Links</p>
          <button className="add-readlist-btn">Add to reading list</button>
        </div>
      </div>
    </div>
  )
}

export default Detail
