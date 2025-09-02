import React, { createContext, useState } from 'react'


export const AuthContext=createContext()
const AuthContextProvider = (props) => {
    const [loggedInUser,setLoggestInUser]=useState(null)
  return (
    <div>
        <AuthContext.Provider value={{loggedInUser,setLoggestInUser}}>
            {props.children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthContextProvider