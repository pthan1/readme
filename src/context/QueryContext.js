import React, { createContext, useReducer, useEffect } from "react"
import { queryReducer } from "../reducers/QueryReducer"

export const QueryContext = createContext()

const QueryContextProvider = props => {
  const [query, dispatch] = useReducer(
    queryReducer,
    {
      bookTitle: "",
      category: "",
      bookId: "",
      overview: "",
      clickedTitle: "",
    },
    () => {
      const localData = localStorage.getItem("query")
      return localData
        ? JSON.parse(localData)
        : {
            bookTitle: "",
            category: "",
            bookId: "",
            overview: "",
            clickedTitle: "",
          }
    }
  )

  useEffect(() => {
    localStorage.setItem("query", JSON.stringify(query))
  }, [query])

  return (
    <QueryContext.Provider
      value={{
        query,
        dispatch,
      }}
    >
      {props.children}
    </QueryContext.Provider>
  )
}

export default QueryContextProvider
