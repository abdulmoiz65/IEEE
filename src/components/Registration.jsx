import "../styles/Registration.css";

const Registration = () => {
  return (
    <section id="registration" className="registration-section py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h3 className="title mb-3">Registration</h3>

            <div className="registration-box mx-auto">
              <div className="registration-icon mb-2">
                <i className="bi bi-calendar2-check" />
              </div>
              <p className="registration-text mb-1">
                Registration will be opened soon
              </p>
              <p className="text-muted small mb-0">
                {/* Details regarding categories, fees, and deadlines will be announced on this page. */}
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;