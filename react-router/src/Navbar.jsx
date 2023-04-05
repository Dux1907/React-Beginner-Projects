import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div class="server-side-rendering">
        <h3>Server side rendering</h3>
        <a href="/">About us</a>
        <br></br>
        <a href="/contact">Contact</a>
      </div>
      <br></br>
      <div class="client-side rendering">
        <h3>Client side rendering</h3>
        <NavLink exact activeClassName="active-class" to="/">
          About us
        </NavLink>
        <br></br>
        <NavLink exact activeClassName="active-class" to="/contact">
          Contact
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
