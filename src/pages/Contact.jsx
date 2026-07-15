import { useState } from "react";
import { LOCATIONS, PHONE, PHONE_HREF, CRISIS_LINE, BOOKING_URL } from "../data.js";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Client-side only — no backend wired up yet. Swap for a real submission
    // endpoint before launch.
    setSubmitted(true);
  }

  return (
    <>
      <section className="page-hero container">
        <span className="eyebrow">Contact</span>
        <h1>We're here to help</h1>
        <p>
          For urgent scheduling needs, call <a href={PHONE_HREF}>{PHONE}</a>. In crisis? Call or text{" "}
          {CRISIS_LINE}.
        </p>
      </section>

      <section className="section">
        <div className="container grid grid-2">
          <div className="card">
            <h3>Send a message</h3>
            {submitted ? (
              <p>Thanks for reaching out — our team will get back to you soon.</p>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <p className="form-phi-note">
                  Please don't include personal health information. This form isn't a secure channel — for
                  clinical matters, call us at <a href={PHONE_HREF}>{PHONE}</a>.
                </p>
                <label>
                  Name
                  <input name="name" value={form.name} onChange={handleChange} required />
                </label>
                <label>
                  Email
                  <input type="email" name="email" value={form.email} onChange={handleChange} required />
                </label>
                <label>
                  Message
                  <textarea name="message" rows={4} value={form.message} onChange={handleChange} required />
                </label>
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            )}
          </div>

          <div>
            <h3>Our locations</h3>
            {LOCATIONS.map((loc) => (
              <div className="card" key={loc.city} style={{ marginBottom: 16 }}>
                <h4>{loc.city}</h4>
                <p>
                  {loc.address}
                  <span className="placeholder-tag">Placeholder</span>
                </p>
                <p>{loc.phone}</p>
              </div>
            ))}
            <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="btn btn-outline">
              Request Appointment Instead
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
