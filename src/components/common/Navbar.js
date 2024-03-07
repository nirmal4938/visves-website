import React, { useState } from "react";
import logo1 from "../assets/images/img_group_1.svg";
import NavbarLink from "./NavbarLink"; // Assuming you have a separate component for navbar links
import "../styles/scss/navbar.scss";

export const Navbar = () => {
  const [searchBarValue, setSearchBarValue] = useState("");
  const handleSearchInputChange = (e) => {
    setSearchBarValue(e.target.value);
  };

  return (
    <div className="navbar-main">
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="#">
          <img src={logo1} alt="logo" className="logo" />
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
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown1"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                What we are
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                <li>
                  <a className="dropdown-item" href="/about">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Leadership
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/news-article">
                    News
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown2"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                What we do
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown2">
                <li>
                  <a className="dropdown-item" href="/services">
                    Services
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/products">
                    Products
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/gallery">
                    Gallery
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact-us">
                Contact Us
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search here..."
              aria-label="Search"
              value={searchBarValue}
              onChange={handleSearchInputChange}
            />
          </form>
        </div>
      </nav>
    </div>
  );
};
