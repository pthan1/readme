import "./App.css"
import BooksContainer from "../BooksContainer/BooksContainer"
// import BookOverview from "../BookOverview/BookOverview"
import QueryContextProvider from "../../context/QueryContext"
import { Route } from "react-router-dom"
import LandingPage from "../LandingPage/LandingPage"
import RecommendationView from "../RecommendationView/RecommendationView"

const App = () => {
  return (
    <div className="App">
      <QueryContextProvider>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route
          exact
          path="/search/:searchTerm"
          render={() => <BooksContainer />}
        />
        <Route
          exact
          path="/recommendations"
          render={() => <RecommendationView />}
        />
      </QueryContextProvider>
    </div>
  )
}

export default App
