import React from 'react';
import {Link} from 'react-router-dom';
import {auth} from './../Firebase/index';

let PasswordReset=({history})=>{

    async function handleSubmit(e) {
        e.preventDefault();
        const email= e.target.email
        // try{
        //     await auth.sendPasswordResetEmail(email)
        //     history.push('/');
        // }catch(error){
        //     alert('Failed to reset password');
        // }
        auth.sendPasswordResetEmail(email)
        .then(()=>{
            history.push('/')
        })
        .catch((error)=>{
            alert(error);
        })
}

    return(
        
        <div 
            className='container align-items-center justify-content-center' 
            style={{minHeight: '100vh', maxWidth: '400px'}}
        >  
            <div className="card card-body">
                    <h2 className='text-center mb-4'>Password Reset</h2>
                <form onSubmit={handleSubmit}>
                    <label>E-mail</label>
                    <input type='email' name='email'/>
                </form>
                    <button type='submit'>Reset</button>
                <div className='w-100 text-center mt-2'>
                    <Link to='/'>LogIn</Link>
                </div>
            </div>
        </div>
    )
}

export default PasswordReset;
