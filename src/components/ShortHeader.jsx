// src/components/ShortHeader.jsx
import React from "react";
import "../styles/ShortHeader.css";
import karachi2 from "../assets/images/Karachi2.jpg"; // change if you like

const ShortHeader = ({
  title,
  subtitle,
  kicker = "KHI‑HTC 2026 • IEEE Karachi Section",
  backgroundImage,
}) => {
  const bgImage = backgroundImage || karachi2;

  return (
    <header className="sub-hero">
      <div className="sub-hero-banner position-relative">
        {/* Background image */}
        <img
          src={bgImage}
          alt={title}
          className="sub-hero-img"
          loading="lazy"
          decoding="async"
        />

        {/* Overlay */}
        <div className="sub-hero-overlay" />

        {/* Text */}
        <div className="sub-hero-content">
          <div className="container">
            <div className="sub-hero-text">
              {kicker && (
                <p className="sub-hero-kicker text-uppercase small mb-1">
                  {kicker}
                </p>
              )}
              <h1 className="sub-hero-title mb-1">{title}</h1>
              {subtitle && (
                <p className="sub-hero-subtitle mb-0">{subtitle}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ShortHeader;