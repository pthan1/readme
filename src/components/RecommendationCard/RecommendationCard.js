import React, { useContext } from "react"
import "./RecommendationCard.css"
import { QueryContext } from "../../context/QueryContext"

const RecommendationCard = ({ imageLinks, title, id, overview }) => {
  const { dispatch } = useContext(QueryContext)

  const handleClick = () => {
    dispatch( { type:'ADD_BOOK_ID', bookId: id } )
    dispatch( { type: 'ADD_OVERVIEW', overview: overview } )
  }

  return (
    <div onClick={() => handleClick()} className="recommendation-card">
      <img src={imageLinks} alt={`${title} cover`} />
      <p>{title}</p>
    </div>
  )
}

export default RecommendationCard
