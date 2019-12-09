import React from 'react'
import { NavLink } from 'react-router-dom'

import { NavStyled, NavLinkStyled } from './styling'

const Navigation = () => {
    return (
        <NavStyled>
            {/* <NavLink to="/login">Log In</NavLink> */}
            <NavLinkStyled to="/register">Register</NavLinkStyled>
            <NavLinkStyled to="/saved-receipts">Saved Receipts</NavLinkStyled>
            <NavLinkStyled to="/create-receipt">Create New Receipt</NavLinkStyled>
            {/* <NavLink to="/login">Log Out</NavLink> */}
        </NavStyled>
    )
}

export default Navigation