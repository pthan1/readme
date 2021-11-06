import React, { createContext, useState, useReducer, useEffect } from "react"
import { queryReducer } from "../reducers/QueryReducer"

export const QueryContext = createContext()

const QueryContextProvider = props => {
  const [isLoggedin, setIsLoggedin] = useState(false)

  const [query, dispatch] = useReducer(queryReducer, {
    bookTitle: '',
    category: '',
    bookId: '',
    overview: '',
  }, () => {
    const localData = localStorage.getItem('query')
    return localData ? JSON.parse(localData) : {
      bookTitle: '',
      category: '',
      bookId: '',
      overview: '',
    }
  })
  
  useEffect(() => {
    localStorage.setItem('query', JSON.stringify(query))
  }, [query])

  const toggleLogin = () => {
    setIsLoggedin(!isLoggedin)
  }

  return (
    <QueryContext.Provider
      value={{
        query,
        dispatch,
        toggleLogin
      }}
    >
      {props.children}
    </QueryContext.Provider>
  )
}

export default QueryContextProvider
