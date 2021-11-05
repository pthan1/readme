import React, { createContext, useState } from "react"

export const QueryContext = createContext()

const QueryContextProvider = props => {
  const [bookTitle, setBookTitle] = useState("")
  const [category, setCategory] = useState("")
  const [bookId, setBookId] = useState("")
  const [overview, setOverview] = useState("")
  const [isLoggedin, setIsLoggedin] = useState(false)

  const addBookTitle = userInput => {
    const processedInput = userInput.split(" ")
    if (processedInput.length === 1) {
      setBookTitle(userInput)
    } else {
      const multipleQuery = processedInput.join("+")
      setBookTitle(multipleQuery)
    }
  }

  const addCategory = userCategory => {
    const processedInput = userCategory.split(" ")
    if (processedInput.length === 1) {
      setCategory(userCategory)
    } else {
      const multipleQuery = processedInput.join("+")
      setCategory(multipleQuery)
    }
  }

  const addBookToFind = (id, overview) => {
    setBookId(id)
    setOverview(overview)
  }

  const toggleLogin = () => {
    setIsLoggedin(!isLoggedin)
  }

  return (
    <QueryContext.Provider
      value={{
        bookTitle,
        addBookTitle,
        category,
        addCategory,
        bookId,
        addBookToFind,
        overview,
        isLoggedin,
        toggleLogin,
      }}
    >
      {props.children}
    </QueryContext.Provider>
  )
}

export default QueryContextProvider
