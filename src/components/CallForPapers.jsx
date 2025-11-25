import '../styles/CallForPapers.css';

const CallForPapers = () => {
    return (
        <section className="cfp-section py-5">
            <div className="container">
                <div className="row mb-4">
                    <div className="col">
                        <h2 >Call for Papers</h2>
                        <p className="mt-3 text-muted">
                            Researchers, practitioners, and students are invited to submit original, unpublished work
                            addressing humanitarian challenges through AI and IoT solutions.
                        </p>
                    </div>
                </div>

                <div className="row g-4">
                    {/* Submission Tracks */}
                    <div className="col-lg-6">
                        <div className="cfp-card p-4 h-100 bg-white">
                            <h4 className="mb-3">Submission Tracks</h4>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <strong>Track 1:</strong> AI for Humanitarian Applications
                                </li>
                                <li className="list-group-item">
                                    <strong>Track 2:</strong> IoT Systems for Health and Sustainability
                                </li>
                                <li className="list-group-item">
                                    <strong>Track 3:</strong> Energy, Environment, and Resilience
                                </li>
                                <li className="list-group-item">
                                    <strong>Track 4:</strong> Ethics, Security, and Policy in Humanitarian Technology
                                </li>
                            </ul>

                            <div className="mt-4">
                                <h5>Publication</h5>
                                <p className="mb-0 text-muted">
                                    All accepted and presented papers will be published in
                                    <strong>IEEE Xplore</strong> and indexed by major databases.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Important Dates Table */}
                    <div className="col-lg-6">
                        <div className="cfp-card p-4 h-100 bg-white">
                            <h4 className="mb-3">Important Dates</h4>
                            <div className="table-responsive">
                                <table className="table table-hover align-middle mb-0">
                                    <thead className="table-light">
                                        <tr>
                                            <th scope="col">Task</th>
                                            <th scope="col">Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="animated-row">
                                            <td>Paper Submission Deadline</td>
                                            <td>30-01-2026</td>
                                        </tr>
                                        <tr className="animated-row">
                                            <td>Acceptance Notification</td>
                                            <td>27-02-2026</td>
                                        </tr>
                                        <tr className="animated-row">
                                            <td>Camera-Ready Submission</td>
                                            <td>30-03-2026</td>
                                        </tr>
                                        <tr className="animated-row">
                                            <td>Conference Dates</td>
                                            <td>15-16 May, 2026</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallForPapers;