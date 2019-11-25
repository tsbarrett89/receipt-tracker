import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <div>
            <NavLink to="">Log In</NavLink>
            <NavLink to="">Register</NavLink>
            <NavLink to="">Saved Receipts</NavLink>
            <NavLink to="">Create New Receipt</NavLink>
            <NavLink to="">Log Out</NavLink>
        </div>
    )
}