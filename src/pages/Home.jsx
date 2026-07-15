import { Link } from "react-router-dom";
import {
  HERO,
  SERVICES,
  TEAM,
  LOCATIONS,
  BOOKING_URL,
  IMAGES,
  PHONE,
  PHONE_HREF,
  TRUST_ITEMS,
  CONCERNS,
  FAQS,
} from "../data.js";
import CTASection from "../components/CTASection.jsx";

export default function Home() {
  const director = TEAM[0];

  return (
    <>
      <section className="hero" style={{ backgroundImage: `url(${IMAGES.hero.url})` }}>
        <div className="hero-scrim" />
        <div className="container hero-inner">
          <div className="hero-brandrow">
            <img src={`${import.meta.env.BASE_URL}apmg-logo.webp`} alt="" className="brand-logo brand-logo-sm" />
            <span className="eyebrow">{HERO.eyebrow}</span>
          </div>
          <p className="hero-tagline">{HERO.tagline}</p>
          <h1>{HERO.headline}</h1>
          <p className="hero-subhead">{HERO.subhead}</p>
          <div className="hero-actions">
            <div>
              <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="btn btn-primary">
                Request Appointment
                <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path
                    d="M3.5 8h9M8.5 3.5 13 8l-4.5 4.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <span className="cta-microcopy">{HERO.ctaMicrocopy}</span>
            </div>
            <Link to="/services" className="btn btn-outline">
              Explore Services
            </Link>
          </div>
          <a href={PHONE_HREF} className="hero-call-link">
            Or call us at {PHONE}
          </a>
          <span className="photo-credit">{IMAGES.hero.credit}</span>
        </div>

        <a href="#trust-bar" className="scroll-cue" aria-label="Scroll to learn more">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path
              d="M5 9l7 7 7-7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </section>

      <div id="trust-bar" className="trust-bar">
        <div className="container trust-bar-inner">
          {TRUST_ITEMS.map((item) => (
            <div className="trust-item" key={item}>
              <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="8" cy="8" r="7.25" stroke="currentColor" strokeWidth="1.3" />
                <path
                  d="M5 8.3l1.8 1.8L11.2 6"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="container who-we-help">
          <div>
            <span className="eyebrow">Who We Help</span>
            <h2>Common concerns we treat</h2>
            <p className="who-we-help-lead">
              Care for adults and adolescents navigating a wide range of mental health conditions — with a
              plan built around you.
            </p>
            <div className="concerns-row">
              {CONCERNS.map((c) => (
                <span className="concern-chip" key={c}>
                  {c}
                </span>
              ))}
            </div>
            <Link to="/self-check" className="who-we-help-selfcheck">
              Not sure where to start? Take a 2-minute self-check →
            </Link>
          </div>
          <figure className="who-we-help-media">
            <img src={IMAGES.whoWeHelp.url} alt="A person seeking mental health support" loading="lazy" />
            <figcaption className="photo-credit">{IMAGES.whoWeHelp.credit}</figcaption>
          </figure>
        </div>
      </section>

      <section className="section quote-section" style={{ backgroundImage: `url(${IMAGES.quote.url})` }}>
        <div className="hero-scrim" />
        <div className="container">
          <blockquote className="hero-quote">
            <p>"{director.quote}"</p>
            <cite>
              — {director.name}, {director.title}
            </cite>
          </blockquote>
          <span className="photo-credit">{IMAGES.quote.credit}</span>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <span className="eyebrow">What We Offer</span>
          <h2>Care built around you</h2>
          <div className="grid grid-3" style={{ marginTop: 32 }}>
            {SERVICES.slice(0, 6).map((s) => (
              <div className="card" key={s.name}>
                <h3>{s.name}</h3>
                <p>{s.summary}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <Link to="/services" className="btn btn-outline">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Locations</span>
          <h2>Visit us in person, or connect from home</h2>
          <div className="grid grid-3" style={{ marginTop: 32 }}>
            {LOCATIONS.map((loc) => (
              <div className="card" key={loc.city}>
                <h3>{loc.city}</h3>
                <p>
                  {loc.address}
                  <span className="placeholder-tag">Placeholder</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container faq-section">
          <span className="eyebrow">FAQ</span>
          <h2>Common questions</h2>
          <div className="faq-list">
            {FAQS.map((item) => (
              <details className="faq-item" key={item.q}>
                <summary>
                  {item.q}
                  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
