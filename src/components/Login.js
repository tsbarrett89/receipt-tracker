import React from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const Login = ({ touched, errors, handleSubmit }) => {
    return (
        <Form onSubmit={handleSubmit}>
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
            {touched.username && errors.username && (
                <p className="error">{errors.username}</p>
            )}
            <button>Log In</button>
        </Form>
    )
}

const FormikLogin = withFormik({
    mapPropstoValues({username, password}){
        return {
            username: username || "",
            password: password || ""
        }
    },

    validationSchema: Yup.object().shape({
        username: Yup.string()
            .min(4, "Username needs to be at least 3 characters long.")
            .required("We need to know whose receipts to look up."),
        password: Yup.string()
            .min(4, "Pleae make your password at least 4 characters long.")
            .required("Need a password so we know that you know that we know who you are.")
    }),
    handleSubmit (values, {props}){
        axios
            .post('http://project-receipt-tracker.herokuapp.com/login', `grant_type=password&username=${values.username}&password=${values.password}`, {
                headers: {
                    Authorization: `Basic bGFtYmRhLWNsaWVudDpsYW1iZGEtc2VjcmV0`,
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            })
            .then(res => {
                console.log(res);
                localStorage.setItem('token', res.data.access_token);
                props.history.push('/receipts-list')
            })
            .catch(err => console.log(err));
    }
})(Login)

export default FormikLogin