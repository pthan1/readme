import React, { createContext, useState } from "react"
import { patchBookToReadingList } from "..//apiCalls"

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
    const usersReadingList = user.readingList;
    usersReadingList.push(book);
    patchBookToReadingList(usersReadingList, user.Id);
  }

  // const deleteBookFromReadinList = (id) => {
  //   //delete request 
  // }

  return (
    <AuthContext.Provider
      value={{
        isLoggedin,
        toggleLogin,
        user,
        grabUser,
        setBookToReadingList,
        // deleteBookFromReadingList
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
