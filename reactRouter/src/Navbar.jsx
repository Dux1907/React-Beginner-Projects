import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="server-side-rendering">
        <h3>Server side rendering</h3>
        <a href="/">About us</a>
        <br></br>
        <a href="/contact">Contact</a>
      </div>
      <br></br>
      <div className="client-side rendering">
        <h3>Client side rendering</h3>
        <NavLink to="/">
          About us
        </NavLink>
        <br></br>
        <NavLink to="/contact">
          Contact
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
