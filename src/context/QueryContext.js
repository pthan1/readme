import React, { createContext, useState } from "react"

export const QueryContext = createContext()

const QueryContextProvider = props => {
  const [bookTitle, setBookTitle] = useState("")
  const [category, setCategory] = useState("")
  const [bookId, setBookId] = useState("")
  const [bookInfo, setBookInfo] = useState({})

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

  const addBookToFind = id => {
    setBookId(id)
  }

  return (
    <QueryContext.Provider
      value={{ bookTitle, addBookTitle, category, addCategory, bookId, addBookToFind, bookInfo, setBookInfo }}
    >
      {props.children}
    </QueryContext.Provider>
  )
}

export default QueryContextProvider
