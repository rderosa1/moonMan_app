import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
const Layout = props => (
  <div className="layout">
    <div className="content">
      {/* <Nav /> */}
      <div className="main">
        <h1>Items App over here</h1>
        <div className="path">
        <NavLink to="/items">Items Here</NavLink>
          <NavLink to="/create">Create Item</NavLink>
          </div>
        {props.children}
      </div>
    </div>
    <Footer />
  </div>
);
export default Layout;
