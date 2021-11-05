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

export { getBooksTitle, getRecommendations, getSingleBook }