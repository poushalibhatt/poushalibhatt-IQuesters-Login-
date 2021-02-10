import React,{useRef} from 'react';
import {useAuth} from './AuthContext';
import {Link} from 'react-router-dom';

let LogIn=()=>{
    const emailRef= useRef();
    const passwordRef= useRef();
    const confirmRef= useRef();
    const{LogIn}= useAuth()

    function handleSubmit(e){
        e.preventDefault()

        LogIn(emailRef.current.value, passwordRef.current.value)
    }
    return(
        <>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <label>email</label>
                <input type='email' ref={emailRef} />
                <label>Password</label>
                <input type='password'ref={passwordRef} />
                <label>Password Confirm</label>
                <input type='password'ref={confirmRef} />
                <button type='submit'>Log In</button>
            </form>
            <div className='w-100 text-center mt-2'>
                <Link to='/forgot-password'>Forgot Password?</Link>
            </div>
            <div>
                Already have an account? Log In
            </div>
        </>
    )
}

export default LogIn;

