import React from 'react'
import { Link } from 'react-router-dom'

import { HeaderStyled } from './styling'


const Header = () => {
    return(
        <HeaderStyled>
            <h1>Receipt Tracker</h1>
            <Link to={'/login'}>Log In</Link>
        </HeaderStyled>
    )
}

export default Header