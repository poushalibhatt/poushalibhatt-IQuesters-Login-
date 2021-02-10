import React,{useRef} from 'react';
import {useAuth} from './AuthContext';
import {Link} from 'react-router-dom';

let ForgotPassword=()=>{
    const emailRef= useRef();
    // const passwordRef= useRef();
    // const confirmRef= useRef();
    const{resetPassword}= useAuth();
    const [message, setMessage]= useState('');
    const history = useHistory();

    function handleSubmit(e){
        e.preventDefault();
        setMessage('');
        setMessage('Check your email to reset password');
    }
    return(
        <>
            <h2>Password Reset</h2>
            <form onSubmit={handleSubmit}>
                <label>email</label>
                <input type='email' ref={emailRef} />
                <button type='submit'>Reset Password</button>
            </form>
            <div className='w-100 text-center mt-2'>
                <Link to='/login'>LogIn</Link>
            </div>
        </>
    )
}

export default ForgotPassword;

