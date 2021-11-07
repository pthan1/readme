import "./App.css"
import BooksContainer from "../BooksContainer/BooksContainer"
// import BookOverview from "../BookOverview/BookOverview"
import QueryContextProvider from "../../context/QueryContext"
import { Route } from "react-router-dom"
import LandingPage from "../LandingPage/LandingPage"
import RecommendationView from "../RecommendationView/RecommendationView"
import Detail from "../Detail/Detail"
import Login from "../LogIn/LogIn"
import AuthContextProvider from "../../context/AuthContext"
import Error from "../Error/Error"
import ReadingList from "../ReadingList/ReadingList"

const App = () => {
  return (
    <div className="App">
      <QueryContextProvider>
        <AuthContextProvider>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/login">
            <Login />
          </Route>

          <Route
            exact
            path="/search/:searchTerm"
            render={() => {
              return <BooksContainer />
            }}
          />
          <Route exact path="/recommendations" render={() => <RecommendationView />} />
          <Route exact path="/details/" render={() => <Detail />} />
          <Route exact path="/error" render={() => <Error />} />
          <Route exact path="/readinglist" render={() => <ReadingList />} />
        </AuthContextProvider>
        {/* <Route exact path="/">
          <LandingPage />
        </Route>
        <Route
          exact
          path="/search/:searchTerm"
          render={() => {
            return <BooksContainer />
          }}
        />
        <Route exact path="/recommendations" render={() => <RecommendationView />} />
        <Route exact path="/details/" render={() => <Detail />} />
        <Route exact path="/error" render={() => <Error />} /> */}
      </QueryContextProvider>
    </div>
  )
}

export default App
