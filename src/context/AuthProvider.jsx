import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'

export const AuthContext=createContext()

const AuthProvider =({children})=>{

    const [userData,setUserData]=useState(null)
    useEffect(()=>{
        // Ensure getLocalStorage() returns a valid object to avoid destructuring error
        setLocalStorage()
        const data=getLocalStorage() || {};
        const {employees=[],admin=[]}=data  //  Default to empty array and null if not found
        //const {employees,admin}=getLocalStorage()
        setUserData({employees,admin})
        // console.log('Fetch Data: ',{employees,admin}) //ensure only one console log

    }, [])  //run only once on mount

    return(
        <div>
            <AuthContext.Provider value={userData}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}
export default AuthProvider