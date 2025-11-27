import React, { useEffect, useState } from "react";
import "../styles/Header.css";
import karachiBanner from "../assets/images/karachi.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  const FULL_TEXT =
    "IEEE Karachi Section Humanitarian Technology Conference (KHI-HTC) 2026";

  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let index = 0;
    const speed = 40; // ms per character

    function type() {
      setTypedText(FULL_TEXT.slice(0, index));
      index++;

      if (index <= FULL_TEXT.length) {
        setTimeout(type, speed);
      }
    }

    type();

    return () => {
      // nothing to clean because we used nested timeouts
    };
  }, []);

  return (
    <header id="home" className="hero text-center text-lg-start fade-in">
      <div className="hero-banner position-relative">
        {/* Karachi banner image */}
        <img
          src={karachiBanner}
          alt="Karachi – Quaid-e-Azam Mausoleum"
          loading="eager"
          decoding="async"
        />

        {/* Dark gradient overlay */}
        <div className="hero-overlay" />

        {/* Text content over the banner */}
        <div className="hero-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-xl-7">
                <div className="text-uppercase small mb-2 text-light">
                  IEEE R10 • IEEE HTB • MAJU
                </div>
                <h1
                  className="display-5 mb-3 fw-semibold"
                  aria-label={FULL_TEXT}
                >
                  <span id="typed-title">{typedText}</span>
                  <span className="typing-cursor" />
                </h1>
                <p className="lead mb-3">
                  Theme: AI and IoT for Sustainable Humanitarian Development
                </p>
                <p className="mb-4">
                  <i className="bi bi-calendar-event text-warning me-2" /> May
                  15–16, 2026
                  <span className="mx-2">|</span>
                  <i className="bi bi-geo-alt text-warning me-2" /> Mohammad Ali
                  Jinnah University, Karachi
                  <br />
                  <small>
                    Organized by MAJU in collaboration with IEEE Karachi Section
                  </small>
                </p>
                <div className="d-flex flex-wrap gap-2">
                  <Link to="/callforpaper" className="btn btn-primary btn-lg">
                    <i className="bi bi-megaphone me-2" />
                    Call for Papers
                  </Link>
                  <Link to="/registration" className="btn btn-accent btn-lg">
                    <i className="bi bi-box-arrow-in-right me-2" />
                    Register Now
                  </Link>
                  <a href="#program" className="btn btn-outline-light btn-lg">
                    <i className="bi bi-diagram-3 me-2" />
                    Program Overview
                  </a>
                  <a href="#sponsors" className="btn btn-outline-light btn-lg">
                    <i className="bi bi-gem me-2" />
                    Become a Sponsor
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;