import React from 'react';
import {useHistory} from 'react-router-dom';
import {
    Formik,
    Form,
    Field,
    ErrorMessage
    } from 'formik';
import * as Yup from 'yup';

const validationSchema= Yup.object({
    name: Yup.string().required('Please enter user name'),
    password: Yup.string().min(6,'6 characters minimum')
})
const initialValues={
    name: 'Poushali',
    password: 'Poushali123'
}

let LogIn=()=>{
    
    const history= useHistory();
    
    let handleSubmit=(e)=>{
            history.push('/todo');
    }
    let handleClick=()=>{
        history.push('/register');
    }
    return(
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form>
                <div className='card card-body rounded' 
                    style={{width: '20rem', height: '15rem', backgroundColor: 'rgb(247, 233, 216)'}}
                >
                    <div className='form-group'>
                        <label htmlFor='name' className='font-weight-bold'>User Name</label>
                        <Field 
                            style={{backgroundColor: '#b3e8f7'}}
                            className='border border-dark rounded'
                            type="text" 
                            name='name' 
                            placeholder='Enter name'/>
                            <span className='text-danger'><ErrorMessage name='name' /></span>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password' className='font-weight-bold'>Password</label>
                        <Field 
                            style={{backgroundColor: '#b3e8f7'}}
                            className='border border-dark rounded'
                            type="password"  
                            name='password' 
                            placeholder='Enter Password'/>
                            <span className='text-danger'><ErrorMessage name='password' /></span>
                    </div>
                    <button type='submit' onSubmit={handleSubmit} className='btn btn-dark'>LogIn</button>
                    <button onClick={handleClick} className='btn btn-primary'>Register</button>
                </div>
            </Form>
        </Formik>
    )
}

export default LogIn;
