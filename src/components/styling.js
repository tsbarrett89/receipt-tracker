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
    background-color: #6784FF;
`

export const NavStyled = styled.nav `
    display: flex;
    flex-direction: column;
    background-color: #2D6187;
    width: 25%;
`

export const NavLinkStyled = styled(NavLink) `
    text-decoration: none;
    color: white;
    font-size: 1.2rem;
    margin: 15px 0 0 20px;
`

export const ContentStyled = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

export const LoginForm = styled(Form) `
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1% auto 0;
    padding: 1%;
`

export const LoginField = styled(Field) `
    width: 50%;
    margin: 4% auto 0 3%;
`

export const LoginButton = styled.button `
    width: 20%;
    margin-top: 3.5%;
`

export const RegistrationForm = styled(Form) `
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1% auto auto 20%;
    padding: 1%;
`

export const RegistrationField = styled(Field) `
    width: 40%;
`

export const ReceiptCard = styled.div `
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .hide {
        display: none;
    }
`

export const ReceiptSpan = styled.span `
    display: flex;
    justify-content: space-between;
    width: 100%;
`

export const NewReceiptForm = styled(Form) `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
`

export const NewReceiptSpan = styled.span `
    display: flex;
    justify-content: space-between;
    width: 45%;
`

export const NewReceiptField = styled(Field) `
    margin-bottom: 2%;
`