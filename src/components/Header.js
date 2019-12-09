import React from 'react'
import { Link } from 'react-router-dom'

import { HeaderStyled, HeaderDiv } from './styling'

import logo from '../images/logo.png'


const Header = () => {
    return(
        <HeaderStyled>
            <HeaderDiv>
                <img src={logo} alt="receipt logo" />
                <h1>Receipt Tracker</h1>
            </HeaderDiv>
            <Link to={'/login'}>Log In</Link>
        </HeaderStyled>
    )
}

export default Header