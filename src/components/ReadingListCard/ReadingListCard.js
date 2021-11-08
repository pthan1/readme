import React, { useContext } from "react"
import "./ReadingListCard.css"
import { AuthContext } from "../../context/AuthContext"

const ReadingListCard = ({ imageLinks, title, id, overview }) => {
  const { deleteBook } = useContext(AuthContext)
  const bookIdObj = { bookId: id }

  const handleClick = e => {
    e.preventDefault()
    deleteBook(bookIdObj)
  }

  return (
    <div className="rl-book-card">
      <img src={imageLinks} alt={`${title} cover`} />
      <div className="rl-card-detail">
        <p className="rl-card-title">{title}</p>
        <p className="top-cat">
          Top Cat! The most effectual Top Cat! Who’s intellectual close friends get to call him T.C., providing it’s
          with dignity. Top Cat! The indisputable leader of the gang. He’s the boss, he’s a pip, he’s the championship.
          He’s the most tip top, Top Cat.
        </p>
        <button
          className="rl-delete-btn"
          type="button"
          onClick={e => {
            handleClick(e)
          }}>
          Delete From Reading List
        </button>
      </div>
    </div>
  )
}

export default ReadingListCard
