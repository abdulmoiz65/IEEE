import "../styles/ContactSection.css";
import maju2 from "../assets/images/maju2.jpg";

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="contact-panel row g-0">
              {/* Left: Contact Content */}
              <div className="col-md-6 contact-info p-4 p-lg-5">
                <h3 className="title mb-2">Contact Us</h3>
                <p className="text-muted small mb-4">
                  For all queries related to KHI‑HTC 2026 please use the official
                  contact channels below.
                </p>

                {/* Email */}
                <div className="mb-3">
                  <div className="contact-label">
                    <i className="bi bi-envelope-open me-2" />
                    Email
                  </div>
                  <a href="mailto:mailhere" className="contact-link">
                    mail add here
                  </a>
                </div>

                {/* Website */}
                <div className="mb-3">
                  <div className="contact-label">
                    <i className="bi bi-globe me-2" />
                    Website
                  </div>
                  <a
                    href="https://khihtc.maju.edu.pk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    https://khihtc.maju.edu.pk
                  </a>
                </div>

                {/* Address */}
                <div className="mb-3">
                  <div className="contact-label">
                    <i className="bi bi-geo-alt me-2" />
                    Address
                  </div>
                  <p className="mb-0 small text-muted">
                    IEEE Karachi Section Humanitarian Technology Conference (KHI‑HTC 2026)
                    <br />
                    Mohammad Ali Jinnah University (MAJU)
                    <br />
                    Main Shahrah‑e‑Faisal, Karachi, Pakistan
                  </p>
                </div>

                {/* Social Media */}
                <div className="mt-4">
                  <div className="contact-label mb-2">
                    <i className="bi bi-share me-2" />
                    Social Media
                  </div>
                  <div className="d-flex flex-wrap gap-2">
                    <a
                      href="#"
                      className="contact-social-link"
                      aria-label="LinkedIn"
                    >
                      <i className="bi bi-linkedin" />
                    </a>
                    <a
                      href="#"
                      className="contact-social-link"
                      aria-label="Facebook"
                    >
                      <i className="bi bi-facebook" />
                    </a>
                    <a
                      href="#"
                      className="contact-social-link"
                      aria-label="X (Twitter)"
                    >
                      <i className="bi bi-twitter-x" />
                    </a>
                    <a
                      href="#"
                      className="contact-social-link"
                      aria-label="Instagram"
                    >
                      <i className="bi bi-instagram" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right: Image with overlay and tag */}
              <div className="col-md-6 contact-visual">
                {/* Image fills the entire column height */}
                <img
                  src={maju2}
                  alt="People collaborating at a conference"
                  className="contact-visual-img"
                  loading="lazy"
                />

                {/* Dark overlay */}
                <div className="contact-visual-overlay" />

                {/* Bottom-left tag */}
                <div className="contact-visual-tag">
                  <i className="bi bi-geo-alt me-1" />
                  Karachi • MAJU Campus
                </div>
              </div>
              {/* End Right */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;