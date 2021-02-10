import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useAuth} from './AuthContext';

let PrivateRoute=({component: Component, ...rest})=>{
    const {currentUser} = useAuth();
    return(
        <Route
        {...rest}
        render={props =>{
            // checks to see if we have current user
            return currentUser ? <Component {...props} /> : 
            <Redirect to='/login' />
        }}
        >

        </Route>
    )
}

export default PrivateRoute;
// private route creates a wrapper for current route