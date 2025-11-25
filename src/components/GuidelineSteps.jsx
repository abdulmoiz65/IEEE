import "../styles/GuidelineSteps.css";

const GuidelineSteps = () => {
  return (
    <section className="step-wrapper guideline_steps" id="final-manuscript">
      <div className="container">
        <p className="text-uppercase small text-muted mb-1">
          2<sup>nd</sup> IEEE Karachi Section Humanitarian Technology Conference 2026
        </p>
        <h2 className="mb-4">Final Manuscript Submission Guideline</h2>

        {/* Step 1 */}
        <div className="step-card step-1">
          <div className="step-header">
            <div className="step-arrow">
              <i className="bi bi-chevron-right" />
            </div>
            <div className="step-body">
              <div className="step-title">Step 1.</div>
              <ul>
                <li>
                  Please revise your paper based on the reviewer(s) evaluation. Your
                  final paper must follow the IEEE Transactions templates for Microsoft
                  Word or LaTeX.
                </li>
                <li>
                  <strong>Formats:</strong>{" "}
                  <a
                    href="https://www.ieee.org/conferences_events/conferences/publishing/templates.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    IEEE Transactions templates (Word / LaTeX)
                  </a>
                  . The length of the final paper should be no more than{" "}
                  <strong>6 pages</strong> in A4 size, including figures, tables and
                  references.
                </li>
                <li>
                  Please note that only a revised paper with{" "}
                  <strong>similarity score &lt; 30%</strong> will be considered to be
                  included in the final conference proceedings.
                </li>
                <li>
                  The use of artificial intelligence (AI)–generated text in an article
                  shall be disclosed in the acknowledgements section. The sections of the
                  paper that use AI-generated text shall have a citation to the AI system
                  used to generate the text. For more information, please{" "}
                  <a
                    href="https://journals.ieeeauthorcenter.ieee.org/become-an-ieee-journal-author/publishing-ethics/guidelines-and-policies/submission-and-peer-review-policies/#ai-generated-text"
                    target="_blank"
                    rel="noreferrer"
                  >
                    click here
                  </a>
                  .
                </li>
                <li>
                  All authors should be listed on both the source file (Word or LaTeX
                  file) and the manuscript PDF file. When submitting your files, ensure
                  the submission system successfully extracts the full author list from
                  your files.
                </li>
                <li>
                  The article should be thoroughly reviewed for proper grammar before
                  being submitted. Articles with poor grammar will be immediately
                  rejected. If needed, IEEE Access offers{" "}
                  <strong>Paperpal Preflight</strong> to assist authors in checking their
                  manuscript for grammar issues prior to submission.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="step-card step-2">
          <div className="step-header">
            <div className="step-arrow">
              <i className="bi bi-chevron-right" />
            </div>
            <div className="step-body">
              <div className="step-title">Step 2.</div>
              <ul>
                <li>
                  Your final paper must be converted to PDF format using{" "}
                  <a
                    href="https://ieee-pdf-express.org/account/login"
                    target="_blank"
                    rel="noreferrer"
                  >
                    IEEE PDF eXpress
                  </a>{" "}
                  using the conference ID (to be provided by organizers).
                </li>
                <li>
                  More information on using IEEE PDF eXpress can be obtained here:{" "}
                  <a
                    href="https://ieee-pdf-express.org/External/UsingIEEEPDFeXpress"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://ieee-pdf-express.org/External/UsingIEEEPDFeXpress
                  </a>
                  .
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="step-card step-3">
          <div className="step-header">
            <div className="step-arrow">
              <i className="bi bi-chevron-right" />
            </div>
            <div className="step-body">
              <div className="step-title">Step 3.</div>
              <ul>
                <li>
                  Authors are expected to present their papers at the conference, and at
                  least <strong>one author must register</strong> for the publication.
                  Papers with a no-show presenter will <strong>not</strong> be submitted
                  to IEEE Xplore.
                </li>
                <li>
                  For other details regarding the IEEE paper submission checklist, please{" "}
                  <a
                    href="https://www.ieee.org/conferences_events/conferences/publishing/paper-submission-checklist.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    click here
                  </a>
                  .
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuidelineSteps;