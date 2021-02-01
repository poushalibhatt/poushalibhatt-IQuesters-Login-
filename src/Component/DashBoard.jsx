import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';
import LogIn from './LogIn';
import Todo from './Todo';

let DashBoard=()=>{
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path='/' component={LogIn}/>
            <Route path='/todo' component={Todo} />
        </Switch>
        </BrowserRouter>
    )
}

export default DashBoard;