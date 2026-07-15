import { INSURANCE_PROVIDERS, PHONE, PHONE_HREF } from "../data.js";

export default function Insurance() {
  return (
    <>
      <section className="page-hero container">
        <span className="eyebrow">Insurance</span>
        <h1>Coverage that works for you</h1>
        <p>
          We work with a range of insurance providers to keep care accessible.
          <span className="placeholder-tag">Confirm real payer list</span>
        </p>
      </section>

      <section className="section">
        <div className="container">
          <div className="card">
            <h3>We accept</h3>
            <ul>
              {INSURANCE_PROVIDERS.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <p>
              Don't see your plan? Call us at <a href={PHONE_HREF}>{PHONE}</a> to check your coverage — we
              also offer self-pay and concierge options.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
