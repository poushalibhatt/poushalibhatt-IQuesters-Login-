import React,{useContext} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {userContext} from './UserProvider';

const PrivateRoute=({component: RouteComponent, ...rest})=>{
    const {user}= useContext(userContext);
    return(
        <Route 
        {...rest}
        render={routeProps=>
        !! user?(
            <RouteComponent {...routeProps} />
        ) : (
            <Redirect to={'/register'} />
        )
        }
        />
    );
};

export default PrivateRoute;