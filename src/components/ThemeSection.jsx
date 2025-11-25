import "../styles/ThemeSection.css";

const ThemeSection = () => {
  return (
    <section id="theme" className="theme-section py-5">
      <div className="container">
        {/* Main Theme */}
        <div className="row mb-4">
          <div className="col-lg-8">
            <h3 className="title mb-2">Conference Theme &amp; Sub-Themes</h3>
            <p className="theme-main mb-1">
              <strong>Main Theme:</strong> AI and IoT for Sustainable Humanitarian Development
            </p>
            <p className="text-muted mb-0">
              Exploring how intelligent systems and connected devices can enable inclusive, resilient, and
              sustainable communities—especially in underserved and vulnerable regions.
            </p>
          </div>
        </div>

        {/* Sub-Themes Grid */}
        <div className="row g-4">
          {/* 1. AI for Social Good */}
          <div className="col-md-6 col-xl-3">
            <div className="theme-card h-100">
              <div className="theme-card-header">
                <span className="theme-pill">Sub-Theme 1</span>
                <h5 className="mt-2 mb-1">AI for Social Good</h5>
              </div>
              <ul className="theme-list mb-0">
                <li>Predictive analytics for disaster management and poverty mapping.</li>
                <li>AI-driven decision support for resource optimization and social inclusion.</li>
              </ul>
            </div>
          </div>

          {/* 2. IoT in Remote Healthcare */}
          <div className="col-md-6 col-xl-3">
            <div className="theme-card h-100">
              <div className="theme-card-header">
                <span className="theme-pill">Sub-Theme 2</span>
                <h5 className="mt-2 mb-1">IoT in Remote Healthcare</h5>
              </div>
              <ul className="theme-list mb-0">
                <li>Wearable sensors and portable diagnostic tools for rural and low-resource areas.</li>
                <li>IoT-driven telemedicine and health data analytics for equitable access.</li>
              </ul>
            </div>
          </div>

          {/* 3. Smart Energy Solutions */}
          <div className="col-md-6 col-xl-3">
            <div className="theme-card h-100">
              <div className="theme-card-header">
                <span className="theme-pill">Sub-Theme 3</span>
                <h5 className="mt-2 mb-1">Smart Energy Solutions</h5>
              </div>
              <ul className="theme-list mb-0">
                <li>Renewable microgrids and decentralized energy management systems.</li>
                <li>Energy-efficient IoT for off-grid and disaster-affected communities.</li>
              </ul>
            </div>
          </div>

          {/* 4. Cybersecurity for Humanitarian Tech */}
          <div className="col-md-6 col-xl-3">
            <div className="theme-card h-100">
              <div className="theme-card-header">
                <span className="theme-pill">Sub-Theme 4</span>
                <h5 className="mt-2 mb-1">Cybersecurity for Humanitarian Tech</h5>
              </div>
              <ul className="theme-list mb-0">
                <li>Secure, ethical, and privacy-preserving AI/IoT systems.</li>
                <li>Governance and compliance frameworks for responsible deployment.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThemeSection;