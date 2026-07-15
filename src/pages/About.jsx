import { LOCATIONS } from "../data.js";
import CTASection from "../components/CTASection.jsx";

export default function About() {
  return (
    <>
      <section className="page-hero container">
        <span className="eyebrow">About APMG</span>
        <h1>Advanced, evidence-based psychiatry — delivered with compassion</h1>
        <p>
          Advanced Practice Medical Group is a mental health collective offering personalized, accessible
          psychiatric and medical care. We combine traditional treatments with advanced interventional
          options for patients who need more than a standard approach.
          <span className="placeholder-tag">Placeholder copy</span>
        </p>
      </section>

      <section className="section section-alt">
        <div className="container grid grid-2">
          <div>
            <h2>Our Philosophy</h2>
            <p>
              PLACEHOLDER — expand on APMG's approach to whole-person care, why they offer both
              traditional and advanced interventional treatments, and what sets their collective model
              apart from a typical psychiatric practice.
            </p>
          </div>
          <div>
            <h2>Our History</h2>
            <p>
              PLACEHOLDER — add founding story, years in practice, and growth across the three Chicagoland
              locations.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container grid grid-2" style={{ alignItems: "center" }}>
          <div>
            <span className="eyebrow">A Safe Space to Relax</span>
            <h2>Comfortable, private offices designed for care</h2>
            <p>
              PLACEHOLDER — describe the in-office experience once real office photography is available.
            </p>
          </div>
          <img
            className="office-photo"
            src={`${import.meta.env.BASE_URL}office.webp`}
            alt="A comfortable, sunlit consultation space"
            loading="lazy"
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Our Locations</span>
          <h2>Serving the Chicagoland area</h2>
          <div className="grid grid-3" style={{ marginTop: 32 }}>
            {LOCATIONS.map((loc) => (
              <div className="card" key={loc.city}>
                <h3>{loc.city}</h3>
                <p>
                  {loc.address}
                  <span className="placeholder-tag">Placeholder</span>
                </p>
                <p>{loc.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
