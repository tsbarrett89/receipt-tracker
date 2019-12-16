import React, {useContext} from 'react'

import { CredentialContext } from '../contexts/CredentialsContext'

import { NavStyled, NavLinkStyled } from './styling'

const Navigation = () => {
    const { currentUsername } = useContext(CredentialContext)

    return (
        <NavStyled>
            <NavLinkStyled to="/user-dashboard" >{currentUsername.length ? currentUsername : 'Dashboard'}</NavLinkStyled>
            <NavLinkStyled to="/saved-receipts">Saved Receipts</NavLinkStyled>
            <NavLinkStyled to="/create-receipt">Create New Receipt</NavLinkStyled>
        </NavStyled>
    )
}

export default Navigation