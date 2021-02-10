import React,{useContext, useState, useEffect} from 'react';
import {auth} from './firebase';

const AuthContext= React.createContext();

// function to use this context
export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children})
{
    const [currentUser, setCurrentUser]= useState();

    // this returns a promise
    function SignUp(email, password){
        return auth.createUserWithEmailAndPassword(email, password)
    }
    
    function LogIn(email, password){
        return auth.signInWithEmailAndPassword(email,password)
    }
    function LogOut(){
        return auth.signOut();
    }
    function resetPassword(email){
        return auth.sendPasswordResetEmail(email);
    }
    useEffect(()=>{
        // When createUserWithEmailAndPassword is called it calls setCurrentUser- and set the user for us
        auth.onAuthStateChanged(user =>{
            setCurrentUser(user)
        })
    },[])
    const value={
        currentUser,
        SignUp,
        LogIn,
        LogOut,
        resetPassword
    }
    return(
       <AuthContext.Provider value={value}>
           {children}
       </AuthContext.Provider>
    )
}


// set up authentication
// In order to set up all the authentication for our app, use context to give access to user anywhere in app

// value={value}- contain all the value that we are going to provide with our authentication