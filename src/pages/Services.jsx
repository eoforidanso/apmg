import { SERVICES } from "../data.js";
import CTASection from "../components/CTASection.jsx";

export default function Services() {
  const featured = SERVICES.find((s) => s.image);
  const rest = SERVICES.filter((s) => !s.image);

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
        <div className="container">
          {featured && (
            <div className="featured-service">
              <img className="featured-service-photo" src={featured.image} alt={featured.name} />
              <div className="featured-service-content">
                <span className="eyebrow">Featured Treatment</span>
                <h3>{featured.name}</h3>
                <p>{featured.summary}</p>
              </div>
            </div>
          )}

          <div className="grid grid-3" style={{ marginTop: 32 }}>
            {rest.map((s) => (
              <div className="card" key={s.name}>
                <h3>{s.name}</h3>
                <p>{s.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
