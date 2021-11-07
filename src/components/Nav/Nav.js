import React from "react"
import "./Nav.css"
import SearchBar from "../SearchBar/SearchBar"
import logo2 from "../../images/logo-book2.png"
import User from "../User/User"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="nav-bar">
    <Link to="/">
      <img src={logo2} alt="nav bar website logo" />
      </Link>
      <SearchBar />
      <User />
    </nav>
  )
}

export default NavBar
