import "../styles/VenueSection.css";
import karachi2 from "../assets/images/karachi2.jpg";

const VenueSection = () => {
  return (
    <section id="venue" className="venue-section py-5">
      <div className="container">
        {/* Heading */}
        <div className="row mb-4">
          <div className="col-12">
            <h3 className="title  mb-2">Venue &amp; Accommodation</h3>
            <p className="text-muted mb-0">
              Host city details, conference venue, and suggested accommodation options for
              KHI‑HTC 2026 participants.
            </p>
          </div>
        </div>

        {/* 3-column horizontal layout */}
        <div className="row g-4 align-items-stretch">
          {/* Left: Info card */}
          <div className="col-lg-4">
            <div className="venue-info-card venue-animate">
              <span className="venue-tag mb-2 d-inline-block">
                <i className="bi bi-geo-alt-fill me-1" /> Conference Venue
              </span>
              <h5 className="mb-1">Mohammad Ali Jinnah University (MAJU)</h5>
              <p className="mb-3 small text-muted">
                Located in Karachi, MAJU offers modern lecture halls, labs, and facilities,
                providing an ideal setting for keynotes, technical sessions, and hands‑on
                workshops.
              </p>

              <h6 className="mb-1">Accommodation</h6>
              <p className="mb-2 small text-muted">
                A variety of hotels and guest houses are available within a short drive of
                MAJU:
              </p>
              <ul className="list-unstyled mb-2 small venue-hotels">
                <li>
                  <span className="hotel-name">Hotel A</span>
                  <span className="hotel-meta">4.2★ • 10–15 min drive</span>
                </li>
                <li>
                  <span className="hotel-name">Hotel B</span>
                  <span className="hotel-meta">4.0★ • 15–20 min drive</span>
                </li>
                <li>
                  <span className="hotel-name">Hotel C</span>
                  <span className="hotel-meta">3.8★ • 15–25 min drive</span>
                </li>
              </ul>
              <p className="small text-muted mb-0">
                Detailed travel and stay guidance for out‑of‑Karachi participants will be
                shared via email and on the conference website.
              </p>
            </div>
          </div>

          {/* Middle: Map */}
          <div className="col-lg-4">
            <div className="venue-map-card venue-animate">
              <div className="venue-map-header mb-2">
                <i className="bi bi-map me-1" />
                <span>Map – Mohammad Ali Jinnah University, Karachi</span>
              </div>
              <div className="ratio ratio-4x3 rounded overflow-hidden">
                <iframe
                  src="https://www.google.com/maps?q=Mohammad%20Ali%20Jinnah%20University%2C%20MAJU%20Road%2C%20Main%20Shahrah-e-Faisal%2C%2022-E%2C%20Block%206%20P.E.C.H.S.%2C%20Karachi%2C%2075400&output=embed"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MAJU Location Map"
                />
              </div>
              <p className="small text-muted mt-2 mb-0">
                MAJU is easily accessible via Shahrah‑e‑Faisal, ride‑hailing services, and
                local transport.
              </p>
              <p className="small text-muted mt-2 mb-0">
                From the iconic Mazar‑e‑Quaid and coastal sunsets to historic neighbourhoods
                and modern business districts, Karachi offers a memorable setting for
                KHI‑HTC 2026.
              </p>
            </div>
          </div>

          {/* Right: Karachi image */}
          <div className="col-lg-4">
            <div className="venue-photo-card venue-animate">
              <div className="venue-photo-wrapper">
                <img
                  src={karachi2}
                  alt="Mazar-e-Quaid and skyline of Karachi"
                  className="img-fluid venue-photo"
                  loading="lazy"
                  decoding="async"
                />
                <div className="venue-photo-chip">
                  <i className="bi bi-building me-1" />
                  Karachi, Pakistan
                </div>
              </div>

              <h6 className="mb-1 mt-3">About Karachi</h6>
              <p className="mb-2 small text-muted">
                Karachi is Pakistan’s largest city, deep‑water port, and financial capital,
                home to over 20 million people. It combines a vibrant coastline, historic
                architecture, and a dynamic startup and technology ecosystem.
              </p>

              <ul className="list-unstyled small mb-3 venue-karachi-list">
                <li>• Clifton and Seaview – the city’s iconic beachfront promenade.</li>
                <li>• Quaid‑e‑Azam’s Mausoleum – the resting place of Pakistan’s founder.</li>
                <li>• Mohatta Palace Museum – Indo‑Islamic architecture and cultural exhibitions.</li>
                <li>• Saddar &amp; Old City – heritage buildings, markets, and street food.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;