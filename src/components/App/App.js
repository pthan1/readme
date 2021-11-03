import "./App.css"
import BooksContainer from "../BooksContainer/BooksContainer"
// import BookOverview from "../BookOverview/BookOverview"
import QueryContextProvider from "../../context/QueryContext"
import { Route } from "react-router-dom"
import LandingPage from "../LandingPage/LandingPage"
import RecommendationView from "../RecommendationView/RecommendationView"
import Detail from "../Detail/Detail"

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
            console.log(match)
            if (match.params.searchTerm !== "recommendations" && match.params.searchTerm !== "details") {
              return <BooksContainer />
            }
          }}
        />
        <Route
          exact
          path="/recommendations"
          render={({ match }) => {
            if (match.params.url === "recommendation") {
              return <RecommendationView />
            }
          }}
        />
        <Route
          exact
          path="/details/"
          render={({ match }) => {
            if (match.params.url === "details") {
              return <Detail />
            }
          }}
        />
      </QueryContextProvider>
    </div>
  )
}

export default App
