import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src="/media/images/images/logo.svg"
            alt="logo"
            style={{ width: "20%", marginLeft: "2rem" }}
          />
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item mx-4">
              <Link
                className="nav-link active text-muted"
                aria-current="page"
                to="/Signup"
              >
                Signup
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link active text-muted" to="/About">
                About
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link active text-muted" to="/Product">
                Product
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link active text-muted" to="/Pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item mx-3 mr-5">
              <Link className="nav-link active text-muted" to="/Support">
                Support
              </Link>
            </li>
            <li className="nav-item mx-3 mr-5">
              <Link className="nav-link active text-muted" to="/dashboard">
                dashboard
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
