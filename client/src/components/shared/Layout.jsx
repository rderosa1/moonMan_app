import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
// import Greet from './Greet'


const Layout =  props  => (
    <div className="layout">
      <div className="content">
        {/* <Nav /> */}
        <div className="main">
        {props.user && <span className="navbar-text">Welcome, {props.user.username}</span>}

          <div className="path">
            <NavLink to="/items">Browse Spaceship Items</NavLink>
            <NavLink to="/create">Add to Inventory</NavLink>
          </div>
          {props.children}
        </div>
      </div>
      <Footer />
    </div>
  );

export default Layout;
