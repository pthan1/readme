import React, { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { Link } from "react-router-dom"
import ReadingList from "../ReadingList/ReadingList"
import "./User.css"

export default function User() {
  // const { user, isLoggedin, toggleLogin } = useContext(AuthContext)
  const { auth, dispatch }  = useContext(AuthContext)

  return auth.isLoggedin ? (
    <div className="loggedin">
      <p>Hello, {auth.user.name} </p>
      {window.location.pathname === "/readinglist" ? null : <Link to="/readinglist"> <p className="reading-list-link"> Reading List </p> </Link>}
      <p onClick={()=>{
        dispatch({type:"TOGGLE_ISLOGGEDIN"})
        dispatch({type:"GRAB_USER",user:null})
        }} 
        className="logout">
        Log out
      </p>
    </div>
  ) : (
    <Link to="/login" className="login-link">
      <p class="link-to-login">Login</p>
    </Link>
  )
}
