import React, { useContext } from "react"
import "./RecommendationCard.css"
// import { useHistory } from "react-router-dom"
import { QueryContext } from "../../context/QueryContext"

const BookCard = ({ imageLinks, title, id, overview }) => {
  // const history = useHistory()
  const { addBookToFind } = useContext(QueryContext)

  const handleClick = () => {
    addBookToFind(id, overview)
  }

  return (
    <div onClick={() => handleClick()} className="book-card">
      <img src={imageLinks} alt={`${title} cover`} />
      <p>{title}</p>
    </div>
  )
}

export default BookCard