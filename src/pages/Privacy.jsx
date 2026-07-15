import { PHONE, PHONE_HREF } from "../data.js";

export default function Privacy() {
  return (
    <>
      <section className="page-hero container">
        <span className="eyebrow">Privacy</span>
        <h1>Privacy Policy</h1>
        <p>
          How Advanced Practice Medical Group handles information submitted through this website.
          <span className="placeholder-tag">Template — legal review required</span>
        </p>
      </section>

      <section className="section">
        <div className="container legal-doc">
          <p className="legal-note">
            <strong>Please do not include personal health information (PHI)</strong> — such as diagnoses,
            medications, or clinical details — in the contact form or any email. This website is not a
            secure or HIPAA-compliant channel. To discuss care, call us at <a href={PHONE_HREF}>{PHONE}</a>{" "}
            or use the secure booking system.
          </p>

          <h2>Information we collect</h2>
          <p>
            When you use the contact form, we collect the name, email address, and message you provide.
            Like most websites, our host may also collect standard technical data such as browser type and
            pages visited.
          </p>

          <h2>How we use it</h2>
          <p>
            We use the information you submit solely to respond to your inquiry and coordinate care or
            scheduling. We do not sell your information.
          </p>

          <h2>Sharing</h2>
          <p>
            We share information only with service providers that help us operate this site or communicate
            with you, and only as needed. We may disclose information where required by law.
          </p>

          <h2>Your choices</h2>
          <p>
            You may request that we update or delete the contact information you've submitted by calling{" "}
            <a href={PHONE_HREF}>{PHONE}</a>.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this policy? Call us at <a href={PHONE_HREF}>{PHONE}</a>.
          </p>

          <p className="legal-note">
            This is a general template, not legal advice. Have it reviewed by counsel and reconciled with
            APMG's HIPAA Notice of Privacy Practices before launch.
          </p>
        </div>
      </section>
    </>
  );
}
