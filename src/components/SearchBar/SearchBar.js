import React, { useContext, useState } from "react"
import { QueryContext } from "../../context/QueryContext"
import "./SearchBar.css"
import { useHistory } from "react-router-dom"

const SearchBar = () => {
  const [book, setBook] = useState("")
  const { addBookTitle } = useContext(QueryContext)
  const history = useHistory()

  const handleSubmit = event => {
    event.preventDefault()
    addBookTitle(book)
    history.push(`/search/${book}`)
    setBook("")
  }

  // const handleChange = event => {
  //   setBook(event.target.value)
  // }

  return (
    <div className="search-container">
      <form className="search-form" onSubmit={event => handleSubmit(event)}>
        <input
          className="search-input"
          type="text"
          placeholder="search for a book..."
          value={book}
          onChange={event => setBook(event.target.value)}
        />
      </form>
    </div>
  )
}

export default SearchBar
