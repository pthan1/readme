import "./App.css"
import SearchBar from "../SearchBar/SearchBar"
import BooksContainer from "../BooksContainer/BooksContainer"
import BookCard from "../BookCard/BookCard"
import BookOverview from "../BookOverview/BookOverview"
import QueryContextProvider, { QueryContext } from "../../context/QueryContext"
import { Route } from "react-router-dom"
import Nav from "../Nav/Nav"
import LandingPage from "../LandingPage/LandingPage"

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
          render={({ match }) => {
            return <BooksContainer />
          }}
        />
        <Route
          exact
          path="/recommendations"
          render={({ match }) => {
            return <BooksContainer />
          }}
        />
      </QueryContextProvider>
    </div>
  )
}

export default App
