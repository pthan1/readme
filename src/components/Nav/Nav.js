import React from "react"
import "./Nav.css"
import SearchBar from "../SearchBar/SearchBar"
import logo2 from "../../images/logo-book2.png"
import User from "../User/User"

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <img src={logo2} alt="nav bar website logo" />
      <SearchBar />
      {/* <ul>
        <li> Log In </li>
        <li> Read List</li>
      </ul> */}
      <User />
    </nav>
  )
}

export default NavBar
