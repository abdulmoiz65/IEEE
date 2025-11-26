import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
import majuLogo from "../assets/images/maju.png";
import khihtc from "../assets/images/logo.jpeg";
import majuwhite from "../assets/images/logofavwhite.png";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClass =
    "navbar navbar-expand-lg navbar-light fixed-top bg-transparent" +
    (isScrolled ? " scrolled" : "");

  // First logo: white at top, MAJU colored after scroll
  const mainLogoSrc = isScrolled ? {majuLogo} : {majuwhite};

  return (
    <nav className={navClass}>
      <div className="container d-flex align-items-center">

        {/* Brand Area with two logos */}
        <a className="navbar-brand d-flex align-items-center gap-2" href="#home">
          <img
            src={majuLogo}
            alt="MAJU Logo"
            width="55"
            height="55"
            className="rounded me-2"
          />
          <img
            src={khihtc}
            alt="KHI-HTC 2026 Logo"
            width="180"
            height="55"
            className="rounded me-2"
          />
        </a>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Nav Items */}
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/#about">
                About
              </Link>
            </li>

            {/* For Author dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="authorDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                For Author
              </a>
              <ul className="dropdown-menu" aria-labelledby="authorDropdown">
                <li>
                   <Link className="dropdown-item" to="/author">
                      Final Manuscript Submission Guideline
                </Link>
                </li>
                 <li>
                   <Link className="dropdown-item" to="/callforpaper">
                      Call for Papers
                </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
             <Link className="nav-link" to="/#theme">
                Theme
            </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/committee">
                Committee
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/#workshops">
                Workshops
              </Link>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#registration">
                Registration
              </a>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/venue">
                Venue
              </Link>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#sponsors">
                Sponsors
              </a>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;