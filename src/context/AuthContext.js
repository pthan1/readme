import React, { createContext, useState,useReducer,useEffect } from "react"
import { addBookToReadingList, deleteBookFromReadingList } from "..//apiCalls"
import { authReducer } from "../reducers/AuthReducer"

export const AuthContext = createContext()

const AuthContextProvider = props => {
  // const [isLoggedin, setIsLoggedin] = useState(false)
  // const [user, setUser] = useState(null)

  const [auth, dispatch] = useReducer(
    authReducer,
    {
      isLoggedin: false,
      user: null
    },
    () => {
      const localAuthData = localStorage.getItem("auth")
      return localAuthData
        ? JSON.parse(localAuthData)
        : {
           isLoggedin: false,
           user: null
        }
    }
  )

  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(auth))
  }, [auth])

  // const toggleLogin = () => {
  //   setIsLoggedin(!isLoggedin)
  // }

  // const grabUser = user => {
  //   setUser(user)
  // }

  // const patchBook = (book, overview) => {
  //   const newBook = {...book, overview: overview};
  //   addBookToReadingList(newBook, user.id)
  //   .then((newReadingList) => setUser({...user, readingList: newReadingList}))
  //   .catch(error => console.warn(error));
  // }

  // const deleteBook = (bookIdObj) => {
  // deleteBookFromReadingList(bookIdObj, user.id)
  // .then((newReadingList) => setUser({...user, readingList: newReadingList}))
  //   .catch(error => console.warn(error));
  // }

  return (
    <AuthContext.Provider
      value={{
        // isLoggedin,
        // toggleLogin,
        // user,
        // grabUser,
        // patchBook,
        // deleteBook,
        auth,
        dispatch
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
