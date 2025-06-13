import React from 'react'
import { createContext } from 'react'

export const dataContext=createContext()

function UserContext({children}) {



  return (
    <dataContext.Provider  >
        {children}
    </dataContext.Provider>
  )
}

export default UserContext