import "../styles/Sponsor.css";

const Sponsor = () => {
  return (
    <section id="sponsors" className="sponsor-section py-5">
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-lg-8 text-center">
            <h3 className="section-title mb-2">Sponsors &amp; Partners</h3>
            <p className="text-muted small mb-0">
              The following organizations are expected to be our strategic partners and sponsors
              for KHI‑HTC 2026.
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="sponsor-panel mx-auto">
              <h6 className="sponsor-panel-title mb-3">
                Strategic Partners &amp; Supporting Bodies
              </h6>
              <ul className="sponsor-list mb-0">
                <li>Sindh Higher Education Commission (SHEC)</li>
                <li>IEEE Humanitarian Technology Board (HTB)</li>
                <li>IEEE R10 Humanitarian Technology Activities (HTA)</li>
                <li>Local academic and industry partners</li>
                <li>NGO collaborators</li>
                <li>Local Disaster Management Organizations</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Sponsor;