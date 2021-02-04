import React,{createContext, useState, useEffect} from 'react';
// import {auth} from './../Firebase/index';
import config from './../Firebase/index';

// export const userContext= createContext({user: null})
export const userContext= createContext()

const UserProvider=({children})=>{
    const[user, setUser]= useState(null);

    useEffect(()=>{
         config.auth().onAuthStateChanged(setUser)
    },[]);

    return(
        <userContext.Provider value={{user}}>
            {children}
        </userContext.Provider>
    )
}

export default UserProvider;