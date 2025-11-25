import "../styles/WorkshopsSection.css";

const WorkshopsSection = () => {
  return (
    <section id="workshops" className="workshops-section py-5">
      <div className="container">
        {/* Heading & Intro */}
        <div className="row mb-4">
          <div className="col-lg-8">
            <h3 className="title mb-2">Workshops &amp; Competitions</h3>
             <p className="sub-title mb-1">
              Workshops 
            </p>
            <p className="text-muted mb-0">
              workshops and an innovation pitch to help participants build real skills
              and scale impactful AI/IoT solutions for humanitarian challenges.
            </p>
          </div>
        </div>

        <div className="row g-4 align-items-stretch">
          {/* Hands-on Workshops */}
          <div className="col-lg-6">
            <div className="workshops-box animate__animated animate__fadeInLeft">
              <span className="workshops-label mb-2 d-inline-block">
                Hands-on Workshops
              </span>
              <p className="text-muted mb-3">
                Focused technical sessions designed to equip participants with tools and methods
                they can directly apply in the field.
              </p>

              <ul className="workshop-items list-unstyled mb-0">
                <li className="workshop-item">
                  <div className="workshop-icon-circle">
                    <i className="bi bi-activity" />
                  </div>
                  <div className="workshop-text">
                    <h6>AI for Disaster Forecasting and Response</h6>
                  </div>
                </li>

                <li className="workshop-item">
                  <div className="workshop-icon-circle">
                    <i className="bi bi-diagram-3" />
                  </div>
                  <div className="workshop-text">
                    <h6>IoT System Design for Low-resource Environments</h6>
                  </div>
                </li>

                <li className="workshop-item">
                  <div className="workshop-icon-circle">
                    <i className="bi bi-shield-lock" />
                  </div>
                  <div className="workshop-text">
                    <h6>Ethical AI and Data Governance</h6>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Startup & Social Innovation Pitch */}
          <div className="col-lg-6">
            <div className="pitch-box animate__animated animate__fadeInRight">
              <div className="pitch-icon">
                <i className="bi bi-rocket-takeoff" />
              </div>
              <h5 className="mb-2">Startup &amp; Social Innovation Pitch</h5>
              <p className="mb-2">
                Empowering innovators to present impactful AI/IoT solutions for humanitarian challenges
                Winning teams receive .
              </p>
              <ul className="pitch-benefits list-unstyled mb-3">
                <li>
                  <i className="bi bi-check2-circle me-1" />
                  Mentorship from experienced IEEE and industry professionals
                </li>
                <li>
                  <i className="bi bi-check2-circle me-1" />
                  Opportunities for seed funding and pilot deployments
                </li>
                <li>
                  <i className="bi bi-check2-circle me-1" />
                  International exposure through IEEE humanitarian networks
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopsSection;