import { BOOKING_URL, PHONE, PHONE_HREF } from "../data.js";
import WaitlistForm from "./WaitlistForm.jsx";

export default function CTASection() {
  return (
    <section className="section cta-section">
      <div className="container cta-inner">
        <h2>Ready to feel like yourself again?</h2>
        <p>Request an appointment online, or call our team to get started.</p>
        <div className="cta-actions">
          <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="btn btn-primary">
            Request Appointment
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a href={PHONE_HREF} className="btn btn-outline">
            Call {PHONE}
          </a>
        </div>
        <WaitlistForm />
      </div>
    </section>
  );
}
