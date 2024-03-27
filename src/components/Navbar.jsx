import React from "react";
import { NavLink } from "react-router-dom";
import ThemeIcon from "./ThemeIcon";

function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container container-fluid">
          <a className="navbar-brand" href="/">
            Bursa Ulaşım Rehberi
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav ms-auto">
                <NavLink className="nav-link" to="/hakkimizda">Hakkımızda</NavLink>
                <NavLink className="nav-link" to="/iletisim">İletişim</NavLink>
                <ThemeIcon />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
