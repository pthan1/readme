import React, { useState } from "react"
import './SearchBar.css'

const SearchBar = ( ) => {
  const [book, setBook] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch(`googleAPI${book}`)
    .then(response => response.json())
    .then()
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
