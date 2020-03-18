import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/shared/Navbar.jsx";
import Layout from "../components/shared/Layout";

const authenticatedOptions=(
  <>
    <NavLink className='navLink' to="/change-password">
      Change Password
      </NavLink>
    <NavLink className="navLink" to="/sign-out">
      Sign Out
    </NavLink>
    <NavLink className="navLink" to="/wishlist">
        <span className="rocket-icon">
        <i className="fas fa-rocket fa-1x"></i> 
        </span>
      <span className="spaceship-header">Spaceship</span>
      
    </NavLink>
  </>
);

const unauthenticatedOptions = (
  <div className="links navGroup">
    <NavLink className="navLink" to="/sign-up">
      Sign Up
    </NavLink>
    <NavLink className="navLink" to="/sign-in">
      Sign In
    </NavLink>
  </div>
);

const alwaysOptions = (
  <div className="links navGroup">
    <NavLink className="navLink" to="/">
      Home
    </NavLink>
  </div>
);

const Header = ({ user }) => (
  <Navbar user={user}>
    <div className="nav">
      {alwaysOptions}
      {user ? authenticatedOptions : unauthenticatedOptions}
    </div>
  </Navbar>
)
export default Header;