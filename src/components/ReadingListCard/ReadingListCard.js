import React, { useContext } from "react"
import "./ReadingListCard.css"
import { AuthContext } from "../../context/AuthContext"

const ReadingListCard = ({ imageLinks, title, id, overview }) => {
  const { deleteBook } = useContext(AuthContext);
  const bookIdObj = {bookId:id};

  const handleClick = (e) => {
    e.preventDefault();
deleteBook(bookIdObj)
  }

  return (
    <div className="rl-book-card">
      <img src={imageLinks} alt={`${title} cover`} />
      <p>{title}</p>
      <button type="button" onClick={(e) => {handleClick(e)}}>Delete From Reading List</button>
    </div>
  )
}

export default ReadingListCard
