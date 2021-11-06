import React, { useContext } from "react"
import "./RecommendationCard.css"
// import { useHistory } from "react-router-dom"
import { QueryContext } from "../../context/QueryContext"

const RecommendationCard = ({ imageLinks, title, id, overview }) => {
  // const history = useHistory()
  const { addBookToFind, dispatch } = useContext(QueryContext)

  const handleClick = () => {
    dispatch( { type:'ADD_BOOK_ID', bookId: id } )
    dispatch( { type: 'ADD_OVERVIEW', overview: overview } )
    addBookToFind(id, overview)
  }

  return (
    <div onClick={() => handleClick()} className="book-card">
      <img src={imageLinks} alt={`${title} cover`} />
      <p>{title}</p>
    </div>
  )
}

export default RecommendationCard
