import { useState } from "react";
import { PHONE, PHONE_HREF } from "../data.js";

/**
 * Fallback path for when a visitor can't find (or doesn't want to leave the
 * site for) an open slot on the external booking page — so the primary CTA
 * never dead-ends. Client-side only, same as Contact.jsx's form: no real
 * booking system is connected here, so this can't check actual availability,
 * it just collects contact info for a callback. Wire to a real inbox
 * (Formspree/Web3Forms) or the practice's intake system before launch.
 */
export default function WaitlistForm() {
  const [expanded, setExpanded] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", when: "Morning", message: "" });

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (!expanded) {
    return (
      <button type="button" className="waitlist-toggle" onClick={() => setExpanded(true)}>
        Can't find a time that works? Request a callback →
      </button>
    );
  }

  return (
    <div className="waitlist-form-wrap">
      {submitted ? (
        <p className="waitlist-thanks">
          Thanks — we'll reach out soon to help you find a time. For anything urgent, call us at{" "}
          <a href={PHONE_HREF}>{PHONE}</a>.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form waitlist-form">
          <p className="form-phi-note">
            Please don't include personal health information — this isn't a secure channel.
          </p>
          <label>
            Name
            <input name="name" value={form.name} onChange={handleChange} required />
          </label>
          <label>
            Phone
            <input type="tel" name="phone" value={form.phone} onChange={handleChange} required />
          </label>
          <label>
            Best time to reach you
            <select name="when" value={form.when} onChange={handleChange}>
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Evening</option>
            </select>
          </label>
          <label>
            Anything else? (optional)
            <textarea name="message" rows={3} value={form.message} onChange={handleChange} />
          </label>
          <div className="waitlist-form-actions">
            <button type="submit" className="btn btn-primary">
              Request a Callback
            </button>
            <button type="button" className="waitlist-cancel" onClick={() => setExpanded(false)}>
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
