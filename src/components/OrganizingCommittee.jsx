import "../styles/OrganizingCommittee.css";
import bhawani from "../assets/images/committee/BhawaniShankarChowdhary.png";
import imran from "../assets/images/committee/ImranJami.jpg";
import asim from "../assets/images/committee/AsimUrRehman.jpeg";
import hina from "../assets/images/committee/HinaFatima.jpg";
import muhammad from "../assets/images/committee/MuhammadShahabSiddiqi.jpeg";
import shaukat from "../assets/images/committee/ShaukatWasi.jpg";
import tariq from "../assets/images/committee/TariqRahimSoomro.webp";
import zubair from "../assets/images/committee/drzubair.jpg";
import shahid from "../assets/images/committee/ShahidShaikh.jpg";
// import parkash from "../assets/images/committee/ParkashLohana.jpg";
import hanan from "../assets/images/committee/HananDaudpota.jpeg";

const OrganizingCommittee = () => {
  return (
    <section id="committee" className="py-5 committee-section">
      <div className="container">
        {/* Heading */}
        <div className="row mb-2">
          <div className="col-lg-9">
            <h3 className="section-title mb-4">Organizing Committee</h3>
          </div>
        </div>

        {/* 1. General Chair */}
        <div className="mb-5">
          <h6 className="committee-block-title">General Chair</h6>
          <div className="committee-profile-main d-md-flex align-items-center gap-4">
            <div className="committee-photo-main flex-shrink-0 mb-4 mb-md-0">
              <img
                src={zubair}
                alt="Prof. Dr. Zubair Ahmed Shaikh"
                className="img-fluid"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div>
              <h4>Prof. Dr. Zubair Ahmed Shaikh</h4>
              <span className="role-badge">General Chair</span>
              <p
                className="mb-0 text-body-secondary"
                style={{ lineHeight: 1.8 }}
              >
                Providing overall leadership and strategic direction for KHI‑HTC
                2026 to ensure that the conference advances humanitarian
                technology, strengthens partnerships, and creates lasting impact
                for communities in Pakistan and beyond. With extensive
                experience in academic leadership and research excellence, Prof.
                Shaikh is committed to fostering innovation and collaboration
                among international scholars and industry professionals.
              </p>
            </div>
          </div>
        </div>

        {/* 2. General Co-Chairs */}
        <div className="mb-5">
          <h6 className="committee-block-title">General Co‑Chairs</h6>
          <div className="row g-4">
            {/* Co-Chair 1 */}
            <div className="col-md-4">
              <div className="committee-profile d-flex gap-3">
                <div className="committee-photo-sm flex-shrink-0">
                  <img
                    src={bhawani}
                    alt="Prof. Dr. Bhawani Shankar Chowdhary"
                    className="img-fluid"
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="name">
                    Prof. Dr. Bhawani Shankar Chowdhary
                  </div>
                  <div className="role">General Co‑Chair</div>
                  <p
                    className="small text-body-secondary mb-0"
                    style={{ lineHeight: 1.7 }}
                  >
                    Supporting overall planning and academic stewardship of the
                    conference, ensuring alignment with IEEE standards and
                    global best practices.
                  </p>
                </div>
              </div>
            </div>

            {/* Co-Chair 2 */}
            <div className="col-md-4">
              <div className="committee-profile d-flex gap-3">
                <div className="committee-photo-sm flex-shrink-0">
                  <img
                    src={tariq}
                    alt="Prof. Dr. Tariq Rahim Soomro"
                    className="img-fluid"
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="name">Prof. Dr. Tariq Rahim Soomro</div>
                  <div className="role">General Co‑Chair</div>
                  <p
                    className="small text-body-secondary mb-0"
                    style={{ lineHeight: 1.7 }}
                  >
                    Guiding technical themes, collaborations, and international
                    engagement to maximize the conference&apos;s reach and
                    scholarly impact.
                  </p>
                </div>
              </div>
            </div>

            {/* Co-Chair 3 */}
            <div className="col-md-4">
              <div className="committee-profile d-flex gap-3">
                <div className="committee-photo-sm flex-shrink-0">
                  <img
                    src={shahid}
                    alt="Prof. Dr. Shahid Shaikh"
                    className="img-fluid"
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="name">Prof. Dr. Shahid Shaikh</div>
                  <div className="role">General Co‑Chair</div>
                  <p
                    className="small text-body-secondary mb-0"
                    style={{ lineHeight: 1.7 }}
                  >
                    Ensuring program quality, relevance, and stakeholder
                    alignment throughout the planning and execution phases.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Co-Chairs */}
        <div className="mb-5">
          <h6 className="committee-block-title">Co‑Chairs</h6>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="co-chair-card">
                <div className="co-chair-photo">
                  <img
                    src={asim}
                    alt="Prof. Dr. Asim Ur Rehman"
                    loading="lazy"
                  />
                </div>
                <div className="name">Prof. Dr. Asim Ur Rehman</div>
                <div className="role">Co‑Chair</div>
                <p className="description">
                  Committed to facilitating meaningful academic discourse and
                  research excellence.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="co-chair-card">
                <div className="co-chair-photo">
                  <img
                    src={muhammad}
                    alt="Prof. Dr. Muhammad Shahab Siddiqi"
                    loading="lazy"
                  />
                </div>
                <div className="name">Prof. Dr. Muhammad Shahab Siddiqi</div>
                <div className="role">Co‑Chair</div>
                <p className="description">
                  Dedicated to promoting innovative research and scholarly
                  collaboration.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="co-chair-card">
                <div className="co-chair-photo">
                  <img
                    src={imran}
                    alt="Prof. Dr. Imran Jami"
                    loading="lazy"
                  />
                </div>
                <div className="name">Prof. Dr. Imran Jami</div>
                <div className="role">Co‑Chair</div>
                <p className="description">
                  Focused on advancing academic standards and fostering
                  international partnerships.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="co-chair-card">
                <div className="co-chair-photo">
                  <img
                    src={shaukat}
                    alt="Prof. Dr. Shaukat Wasi"
                    loading="lazy"
                  />
                </div>
                <div className="name">Prof. Dr. Shaukat Wasi</div>
                <div className="role">Co‑Chair</div>
                <p className="description">
                  Supporting groundbreaking research and academic innovation
                  across all domains.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="co-chair-card">
                <div className="co-chair-photo">
                  <img
                    src={hina}
                    alt="Prof. Dr. Hina Fatima"
                    loading="lazy"
                  />
                </div>
                <div className="name">Prof. Dr. Hina Fatima</div>
                <div className="role">Co‑Chair</div>
                <p className="description">
                  Encouraging interdisciplinary research and collaborative
                  academic endeavors.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Secretariat & Finance */}
        <div>
          <h6 className="committee-block-title">Secretariat &amp; Finance</h6>
          <div className="row g-4">
            {/* Secretary */}
            <div className="col-md-6">
              <div className="committee-profile d-flex gap-3">
                <div className="committee-photo-sm flex-shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=80"
                    alt="Parkash Lohana"
                    className="img-fluid"
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="name">Parkash Lohana</div>
                  <div className="role">
                    Conference Secretary &amp; Publication Chair
                  </div>
                  <p
                    className="small text-body-secondary mb-0"
                    style={{ lineHeight: 1.7 }}
                  >
                    Coordinating conference operations, communications, and IEEE
                    Xplore publications to ensure seamless execution and quality
                    deliverables.
                  </p>
                </div>
              </div>
            </div>

            {/* Treasurer */}
            <div className="col-md-6">
              <div className="committee-profile d-flex gap-3">
                <div className="committee-photo-sm flex-shrink-0">
                  <img
                    src={hanan}
                    alt="Mr. Hanan Daudpota"
                    className="img-fluid"
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="name">Mr. Hanan Daudpota</div>
                  <div className="role">Conference Treasurer</div>
                  <p
                    className="small text-body-secondary mb-0"
                    style={{ lineHeight: 1.7 }}
                  >
                    Managing the conference budget, registrations, and financial
                    reporting with transparency and accountability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Secretariat & Finance */}
      </div>
    </section>
  );
};

export default OrganizingCommittee;