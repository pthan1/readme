import React, { useContext } from "react"
import "./ReadingListCard.css"
import { QueryContext } from "../../context/QueryContext"

const RecommendationCard = ({ imageLinks, title, id, overview }) => {

  const handleClick = () => {
  }

  return (
    <div onClick={() => handleClick()} className="rl-book-card">
      <img src={imageLinks} alt={`${title} cover`} />
      <p>{title}</p>
    </div>
  )
}

export default RecommendationCard
