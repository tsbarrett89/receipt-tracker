import React from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import { RegistrationForm, RegistrationField } from './styling'

const Registration = ({ values, touched, errors, handleSubmit }) => {
    console.log(values)
    
    return (
        <RegistrationForm onSubmit={handleSubmit}>
            <h3>Register for a Receipt Tracker account.</h3>
            <h4>What is your email?</h4> 
            <RegistrationField
                type='text'
                name='primaryemail'
                placeholder='email'
            />
            {touched.primaryemail && errors.primaryemail && (
                <p className="error">{errors.primaryemail}</p>
            )}
            <h4>Choose a username</h4>
            <RegistrationField 
                type='text'
                name='username'
                placeholder='username'
            />
            {touched.username && errors.username && (
                <p className="error">{errors.username}</p>
            )}
            <h4>Now come up with a good password.</h4>
            <RegistrationField
                type='password'
                name='password'
                placeholder='password'
            />
            {touched.password && errors.password && (
                <p className="error">{errors.password}</p>
            )}
            <h4>And register!</h4>
            <button type='submit'>Register Account</button>
        </RegistrationForm>
    )
}

const FormikRegistration = withFormik({
    mapPropsToValues({primaryemail, username, password}){
        return {
            primaryemail: primaryemail || '',
            username: username || '',
            password: password || ''
        }
    },
    validationSchema: Yup.object().shape({
        email: Yup.string()
            .email('Needs to be a real email.'),
        username: Yup.string()
            .min(4, 'At least 4 characters long')
            .required('We will be saving your receipts so we need to know who you are.'),
        password: Yup.string()
            .min(4, "At least 4 characters long")
            .required("You're going to need one the get your receipts!")
    }),
    handleSubmit (values, {props}){
        axios
            .post('http://project-receipt-tracker.herokuapp.com/createnewuser', values)
            .then(res => {
                console.log(res);
                localStorage.setItem('token', res.data.access_token);
                props.history.push('/login')
            })
            .catch(err => console.log(err));
    }
})(Registration)

export default FormikRegistration