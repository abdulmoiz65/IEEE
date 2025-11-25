import "../styles/Footer.css";
import majuLogo from "../assets/images/maju.png";
import khihtc from "../assets/images/logo.jpeg";
import majuwhite from "../assets/images/logofavwhite.png";

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
                width="140"
                height="40"
                className="rounded"
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
              <li><a href="#home">Home</a></li>
              <li><a href="#cfp">Call for Papers</a></li>
              <li><a href="#program">Program</a></li>
              <li><a href="#registration">Registration</a></li>
              <li><a href="#venue">Venue</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-6 col-md-4 col-lg-5">
            <h6 className="footer-heading">Contact</h6>
            <p className="small mb-1">
              <i className="bi bi-envelope-open me-2" />
              <a href="mailto:conference@khi-htc2026.org">
                conference@khi-htc2026.org
              </a>
            </p>
            <p className="small mb-1">
              <i className="bi bi-geo-alt me-2" />
              Mohammad Ali Jinnah University, Karachi
            </p>
            <p className="small mb-2">
              <i className="bi bi-globe me-2" />
              <a
                href="https://www.khi-htc2026.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.khi-htc2026.org
              </a>
            </p>
          </div>
        </div>

        <div className="footer-bottom border-top border-secondary-subtle mt-4 pt-3">
          <div className="d-flex flex-column flex-lg-row justify-content-between gap-2 small text-muted">
            <span>© 2026 IEEE Karachi Section. All rights reserved.</span>
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