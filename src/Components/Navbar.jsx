import React from "react";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
          <a className="pl-3 navbar-brand " href="#">
            AutoFIS Dashboard
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link active" href="#">
                Home <span className="sr-only"></span>
              </a>
              {/* <a className="nav-item nav-link" href="#">
                Features
              </a>
              <a className="nav-item nav-link" href="#">
                Pricing
              </a>
              <a className="nav-item nav-link disabled" href="#">
                Disabled
              </a> */}
            </div>
          </div>
        </nav>
    );
    }