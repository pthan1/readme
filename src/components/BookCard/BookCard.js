import React, { useContext } from "react"
import "./BookCard.css"
import { useHistory } from "react-router-dom"
import { QueryContext } from "../../context/QueryContext"

const BookCard = ({ imageLinks, title, bookCategory, averageRating, id }) => {
  const history = useHistory()
  const { category, addCategory, addBookToFind } = useContext(QueryContext)

  const handleClick = () => {
    if (!category) {
      addCategory(bookCategory)
      history.push(`/recommendations`)
    } else {
      addBookToFind(id)
      history.push(`/details`)
    }
  }

  return (
    <div onClick={() => handleClick()} className="book-card">
      <img src={imageLinks} alt={`${title} cover`} />
      <p>{title}</p>
    </div>
  )
}

export default BookCard
