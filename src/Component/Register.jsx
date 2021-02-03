import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import{
    Formik,
    Form,
    Field,
    ErrorMessage
}from 'formik';

let Register=()=>{

    const [name, setName]=useState('');
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [error, setError]= useState(null);

    const registerWithEmailAndPasswordHandler= async(e, email, password)=>{

        e.preventDefault();

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            generateUserDocument(user);
          }
          catch(error){
            setError('Error Signing up with email and password');
          }
      
          setEmail("");
          setPassword("");
          setName("");
          
        };

    return(
        <div>
            <Formik>
                <Form>
                    <div className='card card-body rounded'
                        style={{width: '20rem', height: '20rem'}}>
                            <h1 style={{color: 'darkgray'}}>Register</h1>
                        <div className='form-group'>
                            <Field type='text' placeholder='Enter user name'/>
                        </div>
                        <div className='form-group'>
                            <Field type='email' placeholder='Enter user email'/>
                        </div>
                        <div className='form-group'>
                            <Field type='password' placeholder='Enter user password'/>
                        </div>
                        <button className='btn btn-success' onClick={registerWithEmailAndPasswordHandler}>Register now</button>
                    </div>
                    
                </Form>
            </Formik>
        </div>
    )
}

export default Register;