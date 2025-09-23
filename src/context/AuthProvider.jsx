import React, {useState ,createContext, useEffect } from 'react'
import { createDefaultImportMeta } from 'vite/module-runner'
import { getLocalStorage } from '../utils/localStorage'
export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [userData, setUserData] = useState(null)

    useEffect(()=>{
        const {employees,admin}=getLocalStorage()
    setUserData({employees,admin})
    },[])
    

  return (
    <div>
        <AuthContext.Provider value={userData} >
            {children}
        </AuthContext.Provider>
      
    </div>
  )
}

export default AuthProvider
