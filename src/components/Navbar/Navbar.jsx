import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top navbar-light">
        <div className="container">
          <Link to="/" className="navbar-brand">
            UN Projects
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav left-nav">
              <li className="nav-item">
                <a href="/about" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="/services" className="nav-link">Services</a>
              </li>
              <li className="nav-item">
                <a href="/docs" className="nav-link">Documentation</a>
              </li>
              <li className="nav-item">
                <a href="/event" className="nav-link">Events</a>
              </li>
            </ul>
            <ul className="navbar-nav right-nav">
              <li className="nav-item">
                <Link to="/dashbord" className="nav-link signin_btn">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link transfer_btn">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;