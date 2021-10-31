import React, { useContext, useState } from "react"
import { QueryContext } from "../../context/QueryContext"
import './SearchBar.css'

const SearchBar = ( ) => {
  const [book, setBook] = useState('')
  const { addBookTitle } = useContext(QueryContext)

  const handleSubmit = (event) => {
    event.preventDefault()
    addBookTitle(book)
    setBook('')
  }
  
  const handleChange = (event) => {
    setBook(event.target.value)
  }

  return (
    <div className="search-container">
      <form className="search-form" onSubmit={handleSubmit}>
        <input className="search-input" 
        type="text" 
        placeholder="book"
        value={book}
        onChange={event => handleChange(event)}
        />
      </form>
    </div>
  )
}

export default SearchBar
