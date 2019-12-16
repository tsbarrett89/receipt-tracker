import React, {useContext} from 'react'

import { CredentialContext } from '../contexts/CredentialsContext'

import { HeaderStyled, HeaderDiv, LoginStyled } from './styling'

import logo from '../images/logo.png'


const Header = () => {
    const { currentUsername, changeUsername } = useContext(CredentialContext)

    const logOut = e => {
        localStorage.clear();
        changeUsername('')
    }

    return(
        <HeaderStyled>
            <HeaderDiv>
                <img src={logo} alt="receipt logo" />
                <h1>Receipt Tracker</h1>
            </HeaderDiv>
            <LoginStyled to={'/login'} onClick={logOut}>
                {currentUsername ? 'Log Out' : 'Log In'}
            </LoginStyled>
        </HeaderStyled>
    )
}

export default Header