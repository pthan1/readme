import React, { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import ReadingListCard from "../ReadingListCard/ReadingListCard"
import Nav from "../Nav/Nav"
import { Link, Redirect} from "react-router-dom"
import "./ReadingList.css"


const ReadingList = () => {
  const {auth} = useContext(AuthContext)

  const readingListCards = 
  auth.user ? 
     auth.user.readingList.map(book => {
      return (
        <Link to="/details" className="rl-card-link">
          <ReadingListCard
            imageLinks={book.imageLinks}
            title={book.title}
            key={book.key}
            id={book.id}
          />
        </Link>
      )
  }) : [];

  return  !auth.user ? <Redirect to="/" /> :
    <div className="reading-list-view">
        <Nav />
        <div className="display-body-reading-list">
          <p className="p-prompt-reading-list">Your Reading List</p>
          <div className="card-container-reading-list">    
          {auth.user && auth.user.readingList.length < 1 ? <p>Your Reading List is empty.  Search for a book and add it to view it here!</p> : readingListCards}
          </div>
        </div>
    </div>;
  
}

export default ReadingList
