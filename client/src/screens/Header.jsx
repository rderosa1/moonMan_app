import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/shared/Navbar.jsx";
import Layout from "../components/shared/Layout";

const authenticatedOptions = (
  <div className="annouyance">
    <NavLink className='navLink' to="/change-password">
      Change Password
      </NavLink>
    <NavLink className="navLink" to="/sign-out">
      Sign Out
    </NavLink>
  </div>
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
    {/* {user && <span className="navbar-text">Welcome, {user.username}</span>}  */}
    <div className="nav">
      {alwaysOptions}
      {user ? authenticatedOptions : unauthenticatedOptions}
    </div>
  </Navbar>
)
export default Header;



//  const Header = ({ user }) => (
//    <Navbar user={user}>
//       {user && <span className="navbar-text">Welcome, {user.username}</span>} 
//      <div className="nav">
// //       {alwaysOptions}
// //       {user ? authenticatedOptions : unauthenticatedOptions}
// //     </div>
// //   </Navbar>