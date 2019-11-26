import React from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const Registration = ({ touced, errors }) => {
    return (
        <Form onSubmit={handleSubmit}>
            <Field
                type='text'
                name='email'
                placeholder='email'
            />
            {touched.email && errors.email && (
                <p className="error">{errors.email}</p>
            )}
            <Field 
                type='text'
                name='username'
                placeholder='username'
            />
            {touched.username && errors.username && (
                <p className="error">{errors.username}</p>
            )}
            <Field
                type='password'
                name='password'
                placeholder='password'
            />
            {touched.password && errors.password && (
                <p className="error">{errors.password}</p>
            )}
        </Form>
    )
}

const FormikRegistration = withFormik({
    mapPropsToValues({email, username, password}){
        return {
            email: email || '',
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
    })
})(Registration)