import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = (props) => {
  return (
    <nav>
      <img src="./balanceLogo-white.png" alt="" />

      <div className="nav__authLinks">
        {props.user ? (
          <>
            <Link to="/home" className="authLink">
              Home
            </Link>
            <Link to="/upload" className="authLink">
              Upload
            </Link>
            <Link to="/daily-report" className="authLink">
              Daily Report
            </Link>
            <Link to="/monthly-report" className="authLink">
              Monthly Report
            </Link>
            <Link to="/resources" className="authLink">
              Resources
            </Link>
            <Link to="/about" className="authLink">
              Contact
            </Link>
            <button className="nav-logoutbtn" onClick={props.handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/" className="nav__projectName authLink">
              Balance
            </Link>
            <Link to="/auth/signup" className="authLink">
              Signup
            </Link>
            <Link to="/auth/login" className="authLink">
              Log In
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
