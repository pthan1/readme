import React, { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { Link } from "react-router-dom"
import './User.css'

export default function User() {
  const { user, isLoggedin, toggleLogin } = useContext(AuthContext)
  return isLoggedin ? (
    <div className='user'>
      <span>Hello, {user.name} </span>
      <span onClick={toggleLogin}>Log out</span>
    </div>
  ) : (
    <Link to="/login">
      <div className='user'>
      <p className="login-link">Login</p>
      </div>
    </Link>
  )
}
