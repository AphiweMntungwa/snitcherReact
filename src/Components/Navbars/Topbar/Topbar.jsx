import React from "react";
import Box from "../../Box/Box";
import "./topbar.css";

const Topbar = () => {
  return (
    <Box boxClass="snitcher-header">
      <nav className="navbar navbar-expand-lg navbar-black bg-black">
        <a className="navbar-brand" href="#">
          Snitcher
        </a>
        <button
          className="navbar-toggler navbar-dark"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <input
            className="form-control search-input" //mr-sm-2
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Sign Up
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Log In
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" style={{ opacity: "0" }} href="#">
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </Box>
  );
};
export default Topbar;
