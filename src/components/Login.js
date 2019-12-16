import React, {useContext} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Formik } from 'formik'
import * as Yup from 'yup'

import { CredentialContext } from '../contexts/CredentialsContext'

import { ContentStyled, LoginForm, LoginField, LoginButton } from './styling'

const NewLogin = (props) => {
    let { changeUsername } = useContext(CredentialContext);

    return (
    <ContentStyled>
    <Formik
        initialValues={{
            username: "",
            password: ""
        }}
        onSubmit={(values) => {
            axios
            .post('http://project-receipt-tracker.herokuapp.com/login', `grant_type=password&username=${values.username}&password=${values.password}`, {
                headers: {
                    Authorization: `Basic bGFtYmRhLWNsaWVudDpsYW1iZGEtc2VjcmV0`,
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            })
            .then(res => {
                console.log(res);
                changeUsername(values.username)
                localStorage.setItem('token', res.data.access_token);
                props.history.push('/user-dashboard');
            })
            .catch(err => console.log(err));
        }}
        validationSchema={Yup.object().shape({
            username: Yup.string()
                .min(4, "Username needs to be at least 3 characters long.")
                .required("We need to know whose receipts to look up."),
            password: Yup.string()
                .min(4, "Pleae make your password at least 4 characters long.")
                .required("Need a password so we know that you know that we know who you are.")
        })}
        >
            {props => {
                const {
                    values,
                    touched,
                    errors,
                    handleSubmit
                } = props;
           
            return (
                <LoginForm onSubmit={handleSubmit}>
                    <label>Username: 
                        <LoginField
                            type='text'
                            name='username'
                            value={values.username}
                        />
                        {touched.username && errors.username && (
                        <p className="error">{errors.username}</p>
                    )}
                    </label>
                    <label>Password: 
                        <LoginField
                            type='password'
                            name='password'
                            value={values.password}
                        />
                        {touched.password && errors.password && (
                            <p className="error">{errors.password}</p>
                        )}
                    </label>
                    <LoginButton type="submit">Log In</LoginButton>
                    <p>Not yet a user? <Link to='/register'>Register</Link> here.</p>
                </LoginForm>
    ) }}
        </Formik>
    </ContentStyled>
    )
}

export default NewLogin