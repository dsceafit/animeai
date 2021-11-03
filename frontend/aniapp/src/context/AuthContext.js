import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../main/firebase.js'
const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({ children }){
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function signup(email, password){
        auth.createUserWithEmailAndPassword(email, password)
    }

    function login(email, password){
        auth.signInWithEmailAndPassword(email, password)
    }

    function logout() {
        return auth.signOut()
    }

    function updateEmail(email) {
        return currentUser.updateEmail(email)
    }

    function updatePassword(password) {
        return currentUser.updatePassword(password)
    }

    function updateProfile(dataToChange){
        return currentUser.updateProfile(dataToChange)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user =>{
            setCurrentUser(user)
            setLoading(false)            
        })
        return unsubscribe
    }, [])
    

    const value = {
        currentUser,
        login,
        signup,
        logout,
        updateEmail,
        updatePassword,
        updateProfile
    }

    return(         
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}