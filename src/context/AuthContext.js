import React, { createContext, useReducer, useEffect } from "react"
import { authReducer } from "../reducers/AuthReducer"

export const AuthContext = createContext()

const AuthContextProvider = props => {
  const [auth, dispatch] = useReducer(
    authReducer,
    {
      isLoggedin: false,
      user: null
    },
    () => {
      const localAuthData = localStorage.getItem("auth")
      return localAuthData
        ? JSON.parse(localAuthData)
        : {
           isLoggedin: false,
           user: null
        }
    }
  )

  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(auth))
  }, [auth])

  return (
    <AuthContext.Provider
      value={{
        auth,
        dispatch
      }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
