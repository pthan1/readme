import React, { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { Link } from "react-router-dom"

export default function User() {
  const { user, isLoggedin, toggleLogin } = useContext(AuthContext)
  return isLoggedin ? (
    <div>
      <span>Hello, {user.name}</span>
      <span onClick={toggleLogin}>Log out</span>
    </div>
  ) : (
    <Link to="/login">
      <p className="login-link">Login</p>
    </Link>
  )
}
