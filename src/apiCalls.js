const getBooksTitle = (bookTitle) => {
  return fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}&maxResults=15&key=AIzaSyBf2vrFs43KCXYdALCcDGm_EeC-3BpS-5w`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Status: ${response.status}`)
      }
      return response.json()
    })
}

const getRecommendations = (category) => {
  return fetch(
    `https://www.googleapis.com/books/v1/volumes?q=subject:${category}&maxResults=40&key=AIzaSyBf2vrFs43KCXYdALCcDGm_EeC-3BpS-5w`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Status: ${response.status}`)
      }
      return response.json()
    })
}

const getSingleBook = (bookId) => {
  return fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}?key=AIzaSyBf2vrFs43KCXYdALCcDGm_EeC-3BpS-5w`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Status: ${response.status}`)
    }
    return response.json()
  })
}

const addBookToReadingList = (newBook, userId) => {
  return fetch(`https://readme-user-api.herokuapp.com/api/v1/users/add/${userId}`, {
				method: 'PATCH',
				body: JSON.stringify({newBook}),
				headers: {
					'Content-Type': 'application/json'
				}
			})
      .then(response => {
          if (!response.ok) {
            throw new Error(`Status: ${response.status}`)
          }
          return response.json()
        })        
}

const deleteBookFromReadingList = (bookIdObj, userId) => {
  return fetch(`https://readme-user-api.herokuapp.com/api/v1/users/delete/${userId}`, {
				method: 'PATCH',
				body: JSON.stringify(bookIdObj),
				headers: {
					'Content-Type': 'application/json'
				}
			})
      .then(response => {
          if (!response.ok) {
            throw new Error(`Status: ${response.status}`)
          }
          return response.json()
        })        
}

export { getBooksTitle, getRecommendations, getSingleBook, addBookToReadingList, deleteBookFromReadingList }