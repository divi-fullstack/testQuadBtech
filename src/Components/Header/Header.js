import React from "react";
import { NavLink, Link } from "react-router-dom"; 

export default function Header() {
  return (
    <React.Fragment>
      {/* navbar */}
      <nav className="navbar navbar-expand-lg bg-dark black-bg-color">
        <div className="container px-0 px-lg-1 px-xl-2">
          <Link className="navbar-brand fw-bold text-white" to="/">
          QuadB Tech
          </Link>
          {/*Navbar nav */}
          <ul className="navbar-nav navbar-right-wrap ms-auto d-flex nav-top-wrap">
          </ul>
          {/* Button */}
          <button
            className="navbar-toggler collapsed ms-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-default"
            aria-controls="navbar-default"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar top-bar mt-0" />
            <span className="icon-bar middle-bar" />
            <span className="icon-bar bottom-bar" />
          </button>
        </div>
      </nav> 
        <nav className="navbar navbar-expand-lg navbar-default py-0 py-lg-2">
          <div className="container px-0">
            {/* Collapse */}
            <div className="collapse navbar-collapse" id="navbar-default">
              <ul className="navbar-nav new-hover-effect"> 
                <li className="nav-item dropdown">
                  <NavLink className="nav-link" to="/" id="navbarPages">
                    Home
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav> 
    </React.Fragment>
  );
}
