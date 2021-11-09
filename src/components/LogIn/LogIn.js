import React, { useEffect, useState, useContext, useRef } from "react"
import { AuthContext } from "../../context/AuthContext"
import { Link } from "react-router-dom"
import logo2 from "../../images/logo-book2.png"
import "./LogIn.css"

const Login = () => {
  const [users, setUsers] = useState([])
  // const { toggleLogin, grabUser } = useContext(AuthContext)
  const {auth, dispatch} = useContext(AuthContext)
  const dropdownRef = useRef()

  useEffect(() => {
    fetch("https://readme-user-api.herokuapp.com/api/v1/users")
      .then(response => response.json())
      .then(data => {
        const names = data.map(ele => ele.name)
        setUsers(data)
      })
  },[])

  
  const loginUser = () => {
    dispatch({type:"TOGGLE_ISLOGGEDIN"});
    let selectedUser = users.find(ele => ele.id === dropdownRef.current.value)
    // grabUser(selectedUser)
    dispatch({type:"GRAB_USER", user:selectedUser})
  }

  return (
    <section className="landing-body">
      <img className="logo" alt="readme logo" src={logo2} />
      <p className="prompt">Welcome back. Please select your name</p>
      <select ref={dropdownRef} className="select">
        {users.map(user => (
          <option value={user.id} key={user.id}>
            {user.name}
          </option>
        ))}
      </select>
      <Link to="/">
        <button onClick={loginUser} className="login-btn">
          Log me in
        </button>
      </Link>
    </section>
  )
}

export default Login
