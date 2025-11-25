import '../styles/StructureSection.css';

const StructureSection = () => {
  return (
    <section id="structure" className="structure-section py-5">
      <div className="container">
        <div className="row g-4 align-items-start">
          {/* Intro */}
          <div className="col-lg-4">
            <h3 className="title mb-3">Conference Structure</h3>
             <p className="sub-title mb-1">
              Complete Structure of the conference 
            </p>
            <p className="text-muted mb-3">
              The conference will feature a blend of technical, professional, and interactive
              activities to engage diverse audiences.
            </p>
            <p className="text-muted mb-0">
              From high‑level keynotes to hands‑on workshops and startup pitches, KHI‑HTC 2026 is
              designed to connect researchers, practitioners, and community stakeholders.
            </p>
          </div>

          {/* Timeline / Items */}
          <div className="col-lg-8">
            <div className="structure-timeline ps-3 ps-md-4">
              {/* Item 1 */}
              <div className="structure-item">
                <div className="structure-icon-wrapper">
                  <span className="structure-icon">
                    <i className="bi bi-broadcast-pin" />
                  </span>
                  <span className="structure-line" />
                </div>
                <div className="structure-content">
                  <h5>Keynote &amp; Plenary Sessions</h5>
                  <p>
                    Keynotes by IEEE experts, UN representatives, NGO leaders, and industry
                    innovators offering strategic perspectives on humanitarian technology.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="structure-item">
                <div className="structure-icon-wrapper">
                  <span className="structure-icon">
                    <i className="bi bi-journal-text" />
                  </span>
                  <span className="structure-line" />
                </div>
                <div className="structure-content">
                  <h5>Technical Paper Presentations</h5>
                  <p>
                    Peer‑reviewed research papers showcasing novel AI and IoT solutions, with
                    accepted work published in IEEE Xplore.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="structure-item">
                <div className="structure-icon-wrapper">
                  <span className="structure-icon">
                    <i className="bi bi-people" />
                  </span>
                  <span className="structure-line" />
                </div>
                <div className="structure-content">
                  <h5>Panel Discussions</h5>
                  <p>
                    Multi‑stakeholder dialogues on policy, innovation, ethics, and field deployment
                    in humanitarian contexts.
                  </p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="structure-item">
                <div className="structure-icon-wrapper">
                  <span className="structure-icon">
                    <i className="bi bi-tools" />
                  </span>
                  <span className="structure-line" />
                </div>
                <div className="structure-content">
                  <h5>Hands‑on Workshops</h5>
                  <p>
                    Practical sessions on AI/IoT prototyping, data ethics, and real‑world field
                    applications for students and professionals.
                  </p>
                </div>
              </div>

              {/* Item 5 */}
              <div className="structure-item structure-item-last">
                <div className="structure-icon-wrapper">
                  <span className="structure-icon">
                    <i className="bi bi-rocket-takeoff" />
                  </span>
                </div>
                <div className="structure-content">
                  <h5>Startup &amp; Social Innovation Pitch Competition</h5>
                  <p>
                    A platform for humanitarian startups to showcase impact‑driven solutions and
                    secure support from investors, donors, and mentors.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* End timeline */}
        </div>
      </div>
    </section>
  );
};

export default StructureSection;