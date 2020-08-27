import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import "./navbar.css";

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, logout, user } = authContext;

  const onLogout = () => {
    logout();
  };

  const authLinks = (
    <Fragment>
      <li
        style={{ display: "inline-block", lineHeight: "70px", margin: "0 5px" }}
      >
        {user && user.name}
      </li>
      <div
        style={{ display: "inline-block", lineHeight: "70px", margin: "0 5px" }}
      ></div>
      <li
        style={{ display: "inline-block", lineHeight: "70px", margin: "0 5px" }}
      >
        <Link to="/" className="nav-link link" style={{ color: "white" }}>
          Events
        </Link>
      </li>
      <li
        style={{ display: "inline-block", lineHeight: "70px", margin: "0 5px" }}
      >
        <Link to="/create" className="nav-link link" style={{ color: "white" }}>
          Create Event Log
        </Link>
      </li>
      <li
        style={{
          display: "inline-block",
        }}
      >
        <a
          onClick={onLogout}
          href="#!"
          style={{
            color: "white",
          }}
        >
          <i className="fas fa-sign-out-alt"></i> <span>Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li
        style={{
          display: "inline-block",
          lineHeight: "70px",
          margin: "0 5px",
        }}
      >
        <Link
          to="/register"
          className="nav-link link"
          style={{ color: "white" }}
        >
          Register
        </Link>
      </li>
      <li
        style={{ display: "inline-block", lineHeight: "70px", margin: "0 5px" }}
      >
        <Link to="/login" className="nav-link link" style={{ color: "white" }}>
          Login
        </Link>
      </li>
      <li
        style={{ display: "inline-block", lineHeight: "70px", margin: "0 5px" }}
      >
        <Link
          to="/events"
          className="nav-link link"
          style={{
            display: "inline-block",
            lineHeight: "70px",
            margin: "0 5px",
            color: "white",
          }}
        >
          Events
        </Link>
        <Link
          to="/map"
          className="nav-link link"
          style={{
            display: "inline-block",
            lineHeight: "70px",
            margin: "0 5px",
            color: "white",
          }}
        >
          Map
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
