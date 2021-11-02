import "./App.css"
import BooksContainer from "../BooksContainer/BooksContainer"
// import BookOverview from "../BookOverview/BookOverview"
import QueryContextProvider from "../../context/QueryContext"
import { Route } from "react-router-dom"
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
          path="/:searchTerm"
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
