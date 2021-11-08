import React, { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import ReadingListCard from "../ReadingListCard/ReadingListCard"
import Nav from "../Nav/Nav"
import { Link } from "react-router-dom"
import "./ReadingList.css"

const ReadingList = () => {
  const { user, isLoggedIn, deleteBookFromReadingList } = useContext(AuthContext)
  const readingListCards = user.readingList.map(book => {
    return (
      <Link to="/details" className="rl-card-link">
        <ReadingListCard
          // className={"card"}
          imageLinks={book.imageLinks}
          title={book.title}
          key={book.key}
          id={book.id}
          // overview={book.overview}
          deleteBookFromReadingList={deleteBookFromReadingList}
        />
      </Link>
    )
  })

  return (
    <div className="reading-list-view">
        <Nav />
        <div className="display-body-reading-list">
          <p className="p-prompt-reading-list">Your Reading List</p>
          <div className="card-container-reading-list">    
          {user.readingList.length < 1 ? <p>Your Reading List is empty.  Search for a book and add it to view it here!</p> : readingListCards}
          </div>
        </div>
      </div>
  )
}

export default ReadingList
