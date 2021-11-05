const getBooksTittle = (bookTitle) => {
  return fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}&maxResults=15&key=AIzaSyBf2vrFs43KCXYdALCcDGm_EeC-3BpS-5w`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(`Status: ${response.status}`)
      }
      return response.json()
    })
}

export { getBooksTittle }