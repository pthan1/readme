import React, { useContext} from "react";
import { AuthContext } from "../../context/AuthContext";
import ReadingListCard from "../ReadingListCard/ReadingListCard";
import RecommendationCard from "../RecommendationCard/RecommendationCard";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";
import ReadingList from "../ReadingList/ReadingList"

const ReadingList = () => {
  const { user } = useContext(AuthContext);

  const readingListCards = user.readingList.map(book => {
  return (
      <Link to="/details">
        <RecommendationCard
          className={"card"}
          imageLinks={book.imageLinks}
          title={book.title}
          key={book.key}
          id={book.id}
          overview={book.overview}
        />
      </Link>
    )})

return (
    <div className="recommendation-view">
        <Nav />
        <div className="display-body-recommendation">
          <p className="p-prompt-recommendation">Your Reading List</p>
          <div className="card-container-recommendation">{recommendationCards}</div>
        </div>
      </div>
  )
}