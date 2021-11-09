export const authReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_ISLOGGEDIN":
      return {
        ...state, 
        isLoggedin: !state.isLoggedin
      }
    case "GRAB_USER":
      return {
        ...state,
        user: action.user
      }
    
    case "SET_READING_LIST":
      return {
        ...state,
        user: {
          ...state.user, 
          readingList: action.newReadingList
        }
      }
    default:
      return state;
  }
}