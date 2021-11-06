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

  const setBookToReadingList = (book) => {
    //check if a user is Logged in
      //if so, do a PATCH
    //if not
      // set a book to a state variable? 
    
  }

  const deleteBookFromReadinList = (id) => {
    //delete request 
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedin,
        toggleLogin,
        user,
        grabUser,
        setBookToReadingList,
        deleteBookFromReadingList
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
