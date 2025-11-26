import "../styles/Footer.css";
import khihtc from "../assets/images/logo.jpeg";
import majuwhite from "../assets/images/logofavwhite.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container py-5">
        <div className="row gy-4">
          {/* About / Logo */}
          <div className="col-md-4">
            <div className="d-flex align-items-center gap-2 mb-3">
              <img
                src={majuwhite} 
                alt="MAJU Logo"
                width="50"
                height="50"
                className="rounded"
                loading="lazy"
              />
              <img
                src={khihtc}
                alt="KHI-HTC 2026 Logo"
                width="120"
                height="40"
                className=""
                loading="lazy"
              />
            </div>
            <p className="small mb-2">
              IEEE Karachi Section Humanitarian Technology Conference (KHI‑HTC 2026),
              hosted by Mohammad Ali Jinnah University, Karachi.
            </p>
            <p className="small text-muted mb-0">
              Theme: AI and IoT for Sustainable Humanitarian Development.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-md-4 col-lg-3">
            <h6 className="footer-heading">Quick Links</h6>
            <ul className="list-unstyled small mb-0">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/callforpaper">Call for Papers</Link></li>
              <li><a to="#program">Registration</a></li>
              <li><Link to="/committee">Committee</Link></li>
              <li><Link to="/venue">Venue</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-6 col-md-4 col-lg-5">
            <h6 className="footer-heading">Contact</h6>
            <p className="small mb-1">
              <i className="bi bi-envelope-open me-2" />
              <a href="mailto:KHI.HTC2026@maju.edu.pk">
                KHI.HTC2026@maju.edu.pk
              </a>
            </p>
            <p className="small mb-1">
              <i className="bi bi-geo-alt me-2" />
              Mohammad Ali Jinnah University, Karachi
            </p>
            <p className="small mb-2">
              <i className="bi bi-globe me-2" />
              <a
                href="https://khihtc.maju.edu.pk"
                target="_blank"
                rel="noopener noreferrer"
              >
                khihtc.maju.edu.pk
              </a>
            </p>
          </div>
        </div>

        <div className="footer-bottom border-top border-secondary-subtle mt-4 pt-3">
          <div className="d-flex flex-column flex-lg-row justify-content-between gap-2 small text-muted">
            <span>© 2026 Mohammad Ali Jinnah University. All rights reserved.</span>
            <span>
              IEEE and the IEEE logo are trademarks of the Institute of Electrical and
              Electronics Engineers, Inc.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;