import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import {
    Formik,
    Form,
    ErrorMessage
    } from 'formik';

let LogIn=()=>{
    const[name, setName]=useState('');
    const[password, setPassword]=useState('');
    const history= useHistory();
    
    let handleNameChange=(e)=>{
        setName(e.target.value);
    }
    let handlePasswordChange=(e)=>{
        setPassword(e.target.value);
    }
    let handleClick=(e)=>{
        e.preventDefault();
        history.push()
    }
    return(
        <Formik>
            
         
            <Form>
                <label htmlFor='name'>User Name</label>
                <input type="text" value={name} name='name' onChange={handleNameChange}/>
                <ErrorMessage name='name' />
                <label htmlFor='password'>Password</label>
                <input type="password" value={password} name='password' onChange={handlePasswordChange}/>
                <ErrorMessage name='password' />
                <button type='submit' onClick={handleClick}>LogIn</button>
            </Form>
        </Formik>
    )
}

export default LogIn;