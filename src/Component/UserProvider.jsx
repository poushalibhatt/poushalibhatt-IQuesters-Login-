import React,{createContext, useState, useEffect} from 'react';
import { generateUserDocument } from '../Firebase';
import {auth} from './../Firebase/index';

export const userContext= createContext({user: null})
let UserProvider=(props)=>{
    const[user, setUser]= useState(null);

    useEffect(()=>{
        auth.onAuthStateChanged(async userAuth => {
            // confusion
            const user= await generateUserDocument(userAuth)
            setUser(userAuth)
        })
    })
    return(
        <userContext.Provider value={user}>
            {props.children}
        </userContext.Provider>
    )
}

export default UserProvider;