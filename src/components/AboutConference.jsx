import "../styles/AboutConference.css";

const AboutConference = () => {
  return (
    <section  className="about-section py-5">
      <div className="container">
        <div className="row align-items-center g-4">
          {/* Left: Overview & Objectives */}
          <div className="col-lg-7 about-animate-left">
            <span className="about-badge mb-2 d-inline-block">
              About the Conference
            </span>
            <h2 className="about-title mb-3">
              IEEE Karachi Section Humanitarian Technology Conference (KHI‑HTC 2026)
            </h2>

            <p className="about-text">
              The IEEE Karachi Section Humanitarian Technology Conference (KHI‑HTC 2026) aims to bring together
              researchers, technologists, innovators, policymakers, and humanitarian organizations to explore how
              Artificial Intelligence (AI) and the Internet of Things (IoT) can drive sustainable humanitarian
              development.
            </p>
            <p className="about-text mb-4">
              The 2026 edition focuses on translating technology innovation into real-world impact, particularly in
              underserved regions of Sindh and Baluchistan, through inclusive research, collaboration, and practical
              deployment.
            </p>

            <h5 className="fw-semibold mb-3">Conference Objectives</h5>
            <ul className="about-objectives list-unstyled mb-0">
              <li>
                <i className="bi bi-check-circle-fill"></i>
                <span>
                  Promote research, innovation, and policy dialogue on AI and IoT for humanitarian applications.
                </span>
              </li>
              <li>
                <i className="bi bi-check-circle-fill"></i>
                <span>
                  Facilitate collaboration between academia, industry, NGOs, and government bodies.
                </span>
              </li>
              <li>
                <i className="bi bi-check-circle-fill"></i>
                <span>
                  Showcase successful case studies and community-driven technology projects from Pakistan’s
                  underserved regions.
                </span>
              </li>
              <li>
                <i className="bi bi-check-circle-fill"></i>
                <span>
                  Develop actionable recommendations for sustainable technology implementation.
                </span>
              </li>
            </ul>
          </div>

          {/* Right: Highlight Card */}
          <div className="col-lg-5 about-animate-right">
            <div className="about-side-card h-100">
              <h5 className="mb-2">KHI‑HTC 2026 at a Glance</h5>
              <p className="small mb-3 text-light-50">
                A flagship IEEE Karachi Section event focused on AI &amp; IoT for humanitarian impact.
              </p>

              <ul className="about-side-list list-unstyled mb-3">
                <li>
                  <span className="label">Theme</span>
                  <span className="value">
                    AI and IoT for Sustainable Humanitarian Development
                  </span>
                </li>
                <li>
                  <span className="label">Dates</span>
                  <span className="value">May 15–16, 2026</span>
                </li>
                <li>
                  <span className="label">Venue</span>
                  <span className="value">Mohammad Ali Jinnah University, Karachi</span>
                </li>
                <li>
                  <span className="label">Focus Regions</span>
                  <span className="value">Sindh &amp; Baluchistan</span>
                </li>
              </ul>

              <div id="about" className="about-tagline small">
                <i className="bi bi-lightbulb me-1"></i>
                Bridging advanced technology with real community needs.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutConference;