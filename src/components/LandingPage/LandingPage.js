import React from "react"
import SearchBar from "../SearchBar/SearchBar"
import "./LandingPage.css"
import logo2 from "../../images/logo-book2.png"

const LandingPage = () => {
  return (
    <section className="landing-body">
      <p className="login-link">Login</p>
      <img className="logo" src={logo2} />
      <p className="prompt">Welcome to readME, tell us a book you like and we will help you find your next reading</p>
      <SearchBar />
    </section>
  )
}

export default LandingPage
