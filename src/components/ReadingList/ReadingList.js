import React, { useContext} from "react";
import { AuthContext } from "../../context/AuthContext";
import ReadingListCard from "../ReadingListCard/ReadingListCard";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";

const ReadingList = () => {
  const { user, isLoggedIn, deleteBookFromReadingList } = useContext(AuthContext);
// needs deleteBook funcion and button too
// 
  const readingListCards = user.readingList.map(book => {
  return (
      <Link to="/details">
        <ReadingListCard
          className={"card"}
          imageLinks={book.imageLinks}
          title={book.title}
          key={book.key}
          id={book.id}
          overview={book.overview}
          deleteBookFromReadingList={deleteBookFromReadingList}
        />
      </Link>
    )})

return (
    <div className="reading-list-view">
        <Nav />
        <div className="display-body-reading-list">
          <p className="p-prompt-reading-list">Your Reading List</p>
          <div className="card-container-reading-list">
          {/* if a user is logged in, show rading list cards, if rading list cards is empty show error
          if a user is not logged in, shw cards that have been added, if no cards, then don't show anything */}
          
          {readingListCards}</div>
        </div>
      </div>
  )
}

export default ReadingList