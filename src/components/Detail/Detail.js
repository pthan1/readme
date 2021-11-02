import React, { useState, useEffect, useContext } from "react"
import { QueryContext } from "../../context/QueryContext"
import BookCard from "../BookCard/BookCard"
import "./BooksContainer.css"
import uniqueString from "unique-string"
import Nav from "../Nav/Nav"

const Detail = params => {
  return (
    <div className="detail-view">
      <Nav />
      <img className="go-back-arrow" alt="this is a left arrow" />
      <div className="detail-container">
        <img className="detail-cover" alt="large book cover image" />
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
