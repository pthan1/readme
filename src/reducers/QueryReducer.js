export const queryReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_BOOK_TITLE' :
      const processedInput = action.bookTitle.split(" ")
    if (processedInput.length === 1) {
      return {
        ...state,
        bookTitle: processedInput,
      }
    } else {
      const multipleQuery = processedInput.join("+")
      return {
        ...state,
        bookTitle: multipleQuery,
      }
    }
      case 'ADD_CATEGORY' :
        return {
          ...state,
          category: action.category,
        }
        case 'ADD_BOOK_ID' :
          return {
            ...state,
            bookId: action.bookId,
          }
          case 'ADD_OVERVIEW' :
            return {
              ...state,
              overview: action.overview,
            }
      default : 
        return state
  }
}