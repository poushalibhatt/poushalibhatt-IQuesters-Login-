import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';
import LogIn from './LogIn';
import Todo from './Todo';
import Register from './Register';
import UserProvider from './UserProvider';

let DashBoard=()=>{
    return(
        <UserProvider>
            <BrowserRouter>
            <Switch>
                <Route exact path='/' component={LogIn}/>
                <Route path='/todo' component={Todo} />
                <Route path='/register' component={Register} />
            </Switch>
            </BrowserRouter>
        </UserProvider>
        
    )
}

export default DashBoard;