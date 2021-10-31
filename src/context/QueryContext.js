import React, { createContext, useState } from 'react'

export const QueryContext = createContext()

const QueryContextProvider = (props) => {
  const [bookTitle, setBookTitle] = useState('')

  const addBookTitle = (userInput) => {
    setBookTitle(userInput)
  }

  return ( 
    <QueryContext.Provider value={ { bookTitle, addBookTitle } }>
      {props.children}
    </QueryContext.Provider>
   );
}
 
export default QueryContextProvider;