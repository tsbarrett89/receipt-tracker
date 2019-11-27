import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <div>
            <NavLink to="/login">Log In</NavLink>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/saved-receipts">Saved Receipts</NavLink>
            <NavLink to="/create-receipt">Create New Receipt</NavLink>
            <NavLink to="/login">Log Out</NavLink>
        </div>
    )
}

export default Navigation