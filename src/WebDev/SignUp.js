import React,{useRef} from 'react';
import {useAuth} from './AuthContext';

let SignUp=()=>{
    const emailRef= useRef();
    const passwordRef= useRef();
    const confirmRef= useRef();
    const{SignUp}= useAuth()

    function handleSubmit(e){
        e.preventDefault()

        SignUp(emailRef.current.value, passwordRef.current.value)
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
                <button type='submit'>Sign Up</button>
            </form>
            <div>
                Already have an account? Log In
            </div>
        </>
    )
}

export default SignUp;

