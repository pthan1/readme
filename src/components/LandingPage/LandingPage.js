import React from "react"
import SearchBar from "../SearchBar/SearchBar"
import "./LandingPage.css"
import logo2 from "../../images/logo-book2.png"
import User from "../User/User"
import { Link } from "react-router-dom"
// import Login from "../LogIn/LogIn"
// import { QueryContext } from "../../context/QueryContext"
// import { AuthContext } from "../../context/AuthContext"

// import { Link } from "react-router-dom"
// import { Route } from "react-router-dom"

const LandingPage = () => {
  // const { isLoggedIn } = useContext(QueryContext)
  // const { user } = useContext(AuthContext)
  return (
    <section className="landing-body">
      <User />
      <img className="logo" alt="readme logo" src={logo2} />

      <p className="prompt">Welcome to readME! Tell us a book you like and we will help you find your next read!</p>
      <SearchBar />
      <Link to="/readinglist"> READING LIST</Link>
    </section>
  )
}

export default LandingPage
