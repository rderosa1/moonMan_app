import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/shared/Navbar.jsx'

const authenticatedOptions = (
    <div className="links">
        <NavLink to="/change-password">Change Password</NavLink>
        <NavLink to="/sign-out">Sign Out</NavLink>
    </div>
)

const unauthenticatedOptions = (
    <div className="links">
        <NavLink to="/sign-up">Sign Up</NavLink>
        <NavLink to="/sign-in">Sign In</NavLink>
    </div>
)

const alwaysOptions = (
    <div className="links">
        <NavLink to="/">Home</NavLink>
    </div>
)

const Header = ({ user }) => (
    <Navbar>
        {user && <span className="navbar-text">Welcome, {user.email}</span>}
        <div className="nav">
            {alwaysOptions}
            {user ? authenticatedOptions : unauthenticatedOptions}
        </div>
    </Navbar>
)

export default Header