import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = (props) => {
  return (
    <nav>
      {/* <Link to="/" className="nav__projectName">
        Balance
      </Link> */}

      <div className="nav__authLinks">
        {props.user ? (
          <>
            <Link to="/Home" className="authLink">
              Home Page
            </Link>
            <Link to="/Upload" className="authLink">
              Upload Page
            </Link>
            <Link to="/Daily-Report" className="authLink">
              Daily Report
            </Link>
            <Link to="/Monthly-Report" className="authLink">
              Monthly Report
            </Link>
            <Link to="/Resources" className="authLink">
              Resources Page
            </Link>
            <Link to="/About" className="authLink">
              About us
            </Link>
            <button className="nav-logoutbtn" onClick={props.handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/" className="nav__projectName">
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
