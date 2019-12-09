import styled from 'styled-components'
import { Form, Field } from 'formik'
import { NavLink, Link } from 'react-router-dom'

export const HeaderStyled = styled.div `
    background-color: #8DBEFF;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    
`

export const HeaderDiv = styled.div `
    display: flex;
    margin: 2% 0 1% 3%;

    img {
        width: 75px;
    }
`

export const LoginStyled = styled(Link) `
    text-decoration: none;
    margin: 0 2% 1% 0;
    font-size: 1.2rem;
    color: black
`

export const BodyStyled = styled.div `
    display: flex;
`

export const NavStyled = styled.nav `
    display: flex;
    flex-direction: column;
    background-color: #2D6187;
    width: 20%;
`

export const NavLinkStyled = styled(NavLink) `
    text-decoration: none;
    color: white;
    font-size: 1.2rem;
    margin: 15px 0 0 20px;
`

export const LoginForm = styled(Form) `
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid black;
    margin: 5% auto auto 20%;
    padding: 3%;
`

export const LoginField = styled(Field) `

`

export const ReceiptCard = styled.div `
    width: 40%;
    background-color: blue;

    img {
        width: 80%;
    }
`