import React, { createContext, useState } from "react"

export const AuthContext = createContext()

const AuthContextProvider = props => {
  const [isLoggedin, setIsLoggedin] = useState(false)
  const [user, setUser] = useState({})

  const toggleLogin = () => {
    setIsLoggedin(!isLoggedin)
  }

  const grabUser = user => {
    setUser(user)
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedin,
        toggleLogin,
        user,
        grabUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
