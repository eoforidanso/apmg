import { SERVICES } from "../data.js";
import CTASection from "../components/CTASection.jsx";

export default function Services() {
  return (
    <>
      <section className="page-hero container">
        <span className="eyebrow">Services</span>
        <h1>Care for every stage of your journey</h1>
        <p>
          From medication management to advanced interventional treatments, our services meet you where
          you are.
        </p>
      </section>

      <section className="section">
        <div className="container grid grid-3 services-grid">
          {SERVICES.map((s) => (
            <div className={`card service-card${s.image ? " has-photo" : ""}`} key={s.name}>
              {s.image && <img className="service-photo" src={s.image} alt={s.name} />}
              <h3>{s.name}</h3>
              <p>{s.summary}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
