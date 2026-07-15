import { Link } from "react-router-dom";
import { FIRST_VISIT, BOOKING_URL, PHONE, PHONE_HREF } from "../data.js";

export default function FirstVisit() {
  return (
    <>
      <section className="page-hero container">
        <span className="eyebrow">New Patients</span>
        <h1>Your first visit</h1>
        <p>
          Reaching out takes courage. Here's exactly what to expect — so there are no surprises, and you
          can focus on you.
        </p>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">What to expect</span>
          <h2>Four simple steps</h2>
          <ol className="first-visit-steps">
            {FIRST_VISIT.steps.map((step, i) => (
              <li key={step.title} className="first-visit-step">
                <span className="first-visit-num">{i + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container grid grid-2">
          <div className="card">
            <h3>What to bring</h3>
            <ul className="first-visit-list">
              {FIRST_VISIT.bring.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h3>For a telehealth visit</h3>
            <ul className="first-visit-list">
              {FIRST_VISIT.telehealth.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Cost & insurance</span>
          <h2>Care you can plan for</h2>
          <p className="first-visit-cost">
            No referral is needed to be seen. We work with a range of insurance plans and also offer self-pay
            options — and we'll help verify your benefits before your visit so you know what to expect.
            <span className="placeholder-tag">Confirm real pricing & payer details</span>
          </p>
          <p className="first-visit-cost">
            Questions about coverage? Call us at <a href={PHONE_HREF}>{PHONE}</a> or see our{" "}
            <Link to="/insurance">insurance page</Link>.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container first-visit-unsure card">
          <div>
            <h3>Not sure where to start?</h3>
            <p>A quick, private self-check can help you put words to how you've been feeling.</p>
          </div>
          <Link to="/self-check" className="btn btn-outline">
            Take a self-check
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container first-visit-cta">
          <h2>Ready when you are</h2>
          <div className="first-visit-cta-actions">
            <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="btn btn-primary">
              Request an Appointment
            </a>
            <a href={PHONE_HREF} className="btn btn-outline">
              Call {PHONE}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
