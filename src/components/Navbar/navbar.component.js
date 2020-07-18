import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, logout, user } = authContext;

  const onLogout = () => {
    logout();
  };

  const authLinks = (
    <Fragment>
      <li>Hello {user && user.name}</li>
      <div>
        <Link to="/" className="link_main nav-link" id="main">
          Events Booking
        </Link>
      </div>
      <li>
        <Link to="/" className="nav-link link">
          Events
        </Link>
      </li>
      <li>
        <Link to="/create" className="nav-link link">
          Create Event Log
        </Link>
      </li>
      <li>
        <a onClick={onLogout} href="#!">
          <i className="fas fa-sign-out-alt"></i>{" "}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li style={{ color: "white" }}>
        <Link to="/register" className="nav-link link">
          Register
        </Link>
      </li>
      <li>
        <Link to="/login" className="nav-link link">
          Login
        </Link>
      </li>
    </Fragment>
  );
  return (
    <div className="navbar bg-primary">
      <h1>
        <i className={icon} />
        {title}
      </h1>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Event Management App",
  icon: "fas fa-id-card-alt",
};
export default Navbar;
