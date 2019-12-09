import React from 'react'

import { HeaderStyled, HeaderDiv, LoginStyled } from './styling'

import logo from '../images/logo.png'


const Header = () => {
    return(
        <HeaderStyled>
            <HeaderDiv>
                <img src={logo} alt="receipt logo" />
                <h1>Receipt Tracker</h1>
            </HeaderDiv>
            <LoginStyled to={'/login'}>Log In</LoginStyled>
        </HeaderStyled>
    )
}

export default Header