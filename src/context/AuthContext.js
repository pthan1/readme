import React, { createContext, useState } from "react"
import { addBookToReadingList, deleteBookFromReadingList } from "..//apiCalls"

export const AuthContext = createContext()

const AuthContextProvider = props => {
  const [isLoggedin, setIsLoggedin] = useState(false)
  const [user, setUser] = useState({})
  const [patchError, setPatchError] = useState("")

  const toggleLogin = () => {
    setIsLoggedin(!isLoggedin)
  }

  const grabUser = user => {
    setUser(user)
  }

  const patchBook = (book, overview) => {
    const newBook = {...book, overview: overview};
    addBookToReadingList(newBook, user.id)
    .then((newReadingList) => setUser({...user, readingList: newReadingList}))
    .catch(error => setPatchError(error));
  }

  const deleteBook = (bookIdObj) => {
  deleteBookFromReadingList(bookIdObj, user.id)
  .then((newReadingList) => setUser({...user, readingList: newReadingList}))
    .catch(error => setPatchError(error));
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedin,
        toggleLogin,
        user,
        grabUser,
        patchBook,
        deleteBook
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
