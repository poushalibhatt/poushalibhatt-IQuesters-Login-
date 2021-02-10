import React,{createContext, useState, useEffect} from 'react';
import {auth} from './../Firebase/index';

export const userContext= createContext()

export const UserProvider=({children})=>{

    const[currentUser, setCurrentUser]= useState(null);

    useEffect(()=>{
         auth.onAuthStateChanged(user =>{
            setCurrentUser(user)
         })
    },[]);

    return(
        <userContext.Provider value={currentUser}>
            {children}
        </userContext.Provider>
    )
}

export default UserProvider;