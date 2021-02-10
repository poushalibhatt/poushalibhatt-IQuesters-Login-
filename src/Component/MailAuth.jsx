import React from 'react';
import {auth} from '../Firebase/index';
import {Link} from 'react-router-dom';

let MailAuth=({history})=>{

    async function handleSubmit(e){

        e.preventDefault();
        const email= e.target.email;
        auth.sendSignInLinkToEmail(email)
          .then(() => {
            history.push('/signout')
          })
          .catch((error) => {
            alert(error);
          });
    }

      return(
        <div 
        className='container align-items-center justify-content-center' 
        style={{minHeight: '100vh', maxWidth: '400px'}}
    >  
        <div className="card card-body">
                <h2 className='text-center mb-4'>Mail Authentication</h2>
            <form onSubmit={handleSubmit}>
                <label>E-mail</label>
                <input type='email' name='email'/>
            </form>
                <button type='submit'>Log In</button>
            <div className='w-100 text-center mt-2'>
                <Link to='/'>LogIn</Link>
            </div>
        </div>
    </div>
      )
}

export default MailAuth;