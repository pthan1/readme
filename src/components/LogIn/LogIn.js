import React, { useEffect, useState, useContext, useRef } from "react"
import { AuthContext } from "../../context/AuthContext"
import { Link } from "react-router-dom"
// import { useHistory } from "react-router-dom"

const Login = () => {
  const [users, setUsers] = useState([])
  const { toggleLogin, grabUser } = useContext(AuthContext)
  // const history = useHistory()

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/users")
      .then(response => response.json())
      .then(data => {
        // const names = data.map(ele => ele.name)
        setUsers(data)
      })
  })

  const dropdownRef = useRef()

  const loginUser = () => {
    toggleLogin()
    console.log("selected", dropdownRef.current.value)
    let selectedUser = users.find(ele => ele.id === dropdownRef.current.value)
    grabUser(selectedUser)
    // history.push("/")
  }

  return (
    <div className="login">
      <select ref={dropdownRef}>
        {users.map(user => (
          <option value={user.id} key={user.id}>
            {user.name}
          </option>
        ))}
      </select>
      <Link to="/">
        <button onClick={loginUser}>Log me in</button>
      </Link>
    </div>
  )
}

export default Login
