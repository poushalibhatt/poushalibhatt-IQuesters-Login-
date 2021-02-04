import React,{useCallback} from 'react';
import{
    Formik,
    Form,
    Field
}from 'formik';
import config from './../Firebase/index';

const initialValues={
    name: '',
    email: '',
    password: '',
    error: null
}

let Register=({history})=>{

    const handleSubmit= useCallback(async e =>{
        e.preventDefault();
        const{email, password} = e.target.elements;
        try{
            await config
            .auth()
            .createUserWithEmailAndPassword(email.value, password.value);
            history.push('/');
        }catch(error){
            alert(error);
        }
        },[history]);

    return(
        <div>
            <Formik
                initialValues={initialValues}>
                <Form onSubmit={handleSubmit}>
                    <div className='card card-body rounded'
                        style={{width: '20rem', height: '20rem'}}>
                            <h1 style={{color: 'darkgray'}}>Register</h1>
                        <div className='form-group'>
                            <Field 
                                type='text'
                                name='name'
                                placeholder='Enter user name'/>
                        </div>
                        <div className='form-group'>
                            <Field 
                                type='email'
                                name='email' 
                                placeholder='Enter user email'/>
                        </div>
                        <div className='form-group'>
                            <Field 
                                type='password' 
                                name='password'
                                placeholder='Enter user password'/>
                        </div>
                        <button type='submit' className='btn btn-success'>Register now</button>
                    </div>
                    
                </Form>
            </Formik>
        </div>
    )
}

export default Register;