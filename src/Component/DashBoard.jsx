import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';
import LogIn from './LogIn';
import Signout from './Signout';
import Register from './Register';
import UserProvider from './UserProvider';
import PasswordReset from "./PasswordReset";
import MailAuth from './MailAuth';

let DashBoard=()=>{
    return(
        <UserProvider>
            <BrowserRouter>
            <Switch>
                <Route exact path='/' component={LogIn}/>
                <Route path='/signout' component={Signout} />
                <Route path='/register' component={Register} />
                <Route path='/passwordreset' component={PasswordReset} />
                <Route path='/mailauth' component={MailAuth} />
            </Switch>
            </BrowserRouter>
        </UserProvider>
        
    )
}

export default DashBoard;