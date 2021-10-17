import React from "react";
import { Link } from "react-router-dom";
import logo from "./simple-octobass.svg";

const NavBar = () => (
  <div className="nav-bar">
    <Link className="nav-bar__logo" to="/">
      <img className="bass-logo" src={logo} alt="home" />
    </Link>
    <div className="nav-bar__right">
      <Link to="/team" className="link-inverse font">
        Team
      </Link>
      <Link to="/games" className="link-inverse font">
        Games
      </Link>
    </div>
  </div>
);

export default NavBar;
