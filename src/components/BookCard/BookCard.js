import React, { useContext } from "react"
import "./BookCard.css"
import { QueryContext } from "../../context/QueryContext"

const BookCard = ({ imageLinks, title, bookCategory }) => {
  const { dispatch } = useContext(QueryContext)

  const handleClick = () => {
    dispatch({ type: "ADD_CATEGORY", category: bookCategory })
    dispatch({ type: "ASSIGN_TITLE", clickedTitle: title })
  }

  return (
    <div onClick={() => handleClick()} className="book-card">
      <img src={imageLinks} alt={`${title} cover`} />
      <p>{title}</p>
    </div>
  )
}

export default BookCard
