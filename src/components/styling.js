import styled from 'styled-components'
import { Form, Field } from 'formik'
import { NavLink } from 'react-router-dom'

export const HeaderStyled = styled.div `
    background-color: green;
`

export const BodyStyled = styled.div `
    display: flex;
`

export const NavStyled = styled.nav `
    display: flex;
    flex-direction: column;
    background-color: purple;
    width: 20%;
`

export const NavLinkStyled = styled(NavLink) `
    text-decoration: none;
    color: white
`

export const LoginForm = styled(Form) `
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid black;
    margin: 5% auto auto 10%;
`

export const ReceiptCard = styled.div `
    width: 40%;
    background-color: blue;

    img {
        width: 80%;
    }
`