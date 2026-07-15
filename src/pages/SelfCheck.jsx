import { useState } from "react";
import { SCREENERS } from "../data.js";
import Screener from "../components/Screener.jsx";

export default function SelfCheck() {
  const [activeId, setActiveId] = useState(null);
  const active = activeId ? SCREENERS[activeId] : null;

  return (
    <>
      <section className="page-hero container">
        <span className="eyebrow">Self-Check</span>
        <h1>A private first step</h1>
        <p>
          These short, confidential self-checks can help you put words to how you've been feeling. They're
          educational — not a diagnosis — and your answers stay on your device.
        </p>
      </section>

      <section className="section">
        <div className="container self-check">
          {!active ? (
            <div className="self-check-choose">
              {Object.values(SCREENERS).map((s) => (
                <button key={s.id} className="self-check-card" onClick={() => setActiveId(s.id)}>
                  <span className="eyebrow">{s.focus}</span>
                  <h3>{s.title}</h3>
                  <p>{s.subtitle}</p>
                  <span className="self-check-start">Start →</span>
                </button>
              ))}
              <p className="self-check-note">
                In crisis or thinking about harming yourself? You don't need to take a quiz first — call or
                text <a href="tel:988">988</a> now, or use the “Need help now?” button on this page.
              </p>
            </div>
          ) : (
            <div className="self-check-active">
              <div className="self-check-active-head">
                <span className="eyebrow">{active.focus}</span>
                <h2>{active.title}</h2>
                <p className="self-check-subtitle">{active.subtitle}</p>
              </div>
              <Screener screener={active} onRestart={() => setActiveId(null)} />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
