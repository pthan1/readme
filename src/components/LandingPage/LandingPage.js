import React from "react"
import SearchBar from "../SearchBar/SearchBar"
import "./LandingPage.css"

const LandingPage = () => {
  return (
    <section className="landing-body">
      <p className="login-link">Login</p>
      <h1 className="logo">readME</h1>
      <p className="prompt">Welcome to readME, tell us a book you like and we will help you find your next reading</p>
      <SearchBar />
    </section>
  )
}

export default LandingPage
