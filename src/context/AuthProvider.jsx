import React, {useState ,createContext, useEffect } from 'react'
import { createDefaultImportMeta } from 'vite/module-runner'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'
export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    // const [userData, setUserData] = useState(null)
    const [userData, setUserData] = useState([])

    useEffect(()=>{
      setLocalStorage()
        const {employees}=getLocalStorage()
    setUserData(employees)
    },[])
    

  return (
    // <div>
        <AuthContext.Provider value={[userData,setUserData]} >
            {children}
        </AuthContext.Provider>
      
    // </div>
  )
}

export default AuthProvider

