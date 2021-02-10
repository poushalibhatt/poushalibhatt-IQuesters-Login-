import React from 'react';
import {
    Formik,
    Form,
    Field,
    ErrorMessage
    } from 'formik';
import * as Yup from 'yup';
import {Link} from 'react-router-dom';
import {auth} from './../Firebase/index';

const validationSchema= Yup.object({
    name: Yup.string().required('Please enter user name'),
    password: Yup.string().min(6,'6 characters minimum').required('Please enter password')
})
const initialValues={
    name: '',
    password: ''
}

let LogIn=({history})=>{
        
    async function handleSubmit(e){
        e.preventDefault();
        const{email, password}= e.target.elements;
        try{
            await auth.signInWithEmailAndPassword(email.value, password.value)
            history.push('/signout');
        }catch(error){
            alert(error);
        }
    }
    let handleClick=()=>{
        history.push('/register');
    }
    return(
        <div 
            className='container align-items-center justify-content-center' 
            style={{minHeight: '100vh', maxWidth: '400px'}}
        >
            <div class="card card-body">
                <h2 className='text-center mb-4'>Log In</h2>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    <Form onSubmit={handleSubmit}>
                            
                            <div className='form-group'>
                                <label htmlFor='email' className='font-weight-bold'>E-mail</label>
                                <Field 
                                    style={{backgroundColor: '#b3e8f7'}}
                                    className='border border-dark rounded'
                                    type="email" 
                                    name='email' 
                                    placeholder='Enter email'
                                />
                                    <span className='text-danger'><ErrorMessage name='email' /></span>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='password' className='font-weight-bold'>Password</label>
                                <Field 
                                    style={{backgroundColor: '#b3e8f7'}}
                                    className='border border-dark rounded'
                                    type="password"  
                                    name='password' 
                                    placeholder='Enter Password'
                                />
                                    <span className='text-danger'><ErrorMessage name='password' /></span>
                            </div>
                            <button type='submit' className='btn btn-dark w-100'>LogIn</button>
                            <button onClick={handleClick} className='btn btn-primary w-100 mt-2'>Register</button>
                    </Form>
                </Formik>
                <div className='w-100 text-center mt-2'>
                    <Link to='/passwordreset'>Forgot Password?</Link>
                </div>
                <div>
                    Not Registered? <Link to='/register'>Register</Link>
                </div>
            </div>
        </div>
    )
}

export default LogIn;
