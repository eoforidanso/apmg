import { useState } from "react";
import { SCREENER_OPTIONS, CRISIS_RESOURCES, BOOKING_URL, PHONE, PHONE_HREF } from "../data.js";

/**
 * Renders one screening instrument (PHQ-9 or GAD-7), scores it entirely
 * client-side (nothing is sent or stored), and routes high-risk results to
 * crisis resources. Explicitly framed as educational, not diagnostic.
 */
export default function Screener({ screener, onRestart }) {
  const [answers, setAnswers] = useState(Array(screener.questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  function setAnswer(qi, value) {
    setAnswers((prev) => {
      const next = [...prev];
      next[qi] = value;
      return next;
    });
    setError(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (answers.some((a) => a === null)) {
      setError(true);
      return;
    }
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (submitted) {
    const total = answers.reduce((sum, a) => sum + a, 0);
    const band = screener.bands.find((b) => total <= b.max);
    const acute = screener.crisisItemIndex !== null && answers[screener.crisisItemIndex] > 0;

    return (
      <div className="screener-results">
        {acute && (
          <div className="screener-crisis" role="alert">
            <strong>Please reach out for support right now.</strong>
            <p>
              Your answers indicate you may be having thoughts of harming yourself. You deserve support, and
              help is available immediately.
            </p>
            <ul className="crisis-list">
              {CRISIS_RESOURCES.map((r) => (
                <li key={r.label}>
                  <span className="crisis-item-label">{r.label}</span>
                  <span className="crisis-item-detail">{r.detail}</span>
                  <span className="crisis-actions">
                    {r.actions.map((a) => (
                      <a key={a.text} href={a.href} className="crisis-action">
                        {a.text}
                      </a>
                    ))}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <span className="eyebrow">{screener.name} result</span>
        <div className="screener-score">
          <span className="screener-score-num">{total}</span>
          <span className="screener-score-max">/ {screener.max}</span>
        </div>
        <h2>{band.label} range</h2>
        <p className="screener-band-note">{band.note}</p>

        <p className="screener-disclaimer">
          This is an educational self-check, not a diagnosis. Only a licensed clinician can evaluate what's
          going on and what might help. Your answers were scored on your device and were not saved or sent.
        </p>

        <div className="screener-cta">
          <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="btn btn-primary">
            Request an Appointment
          </a>
          <a href={PHONE_HREF} className="btn btn-outline">
            Call {PHONE}
          </a>
        </div>

        <button type="button" className="screener-restart" onClick={onRestart}>
          ← Take another self-check
        </button>
      </div>
    );
  }

  return (
    <form className="screener-form" onSubmit={handleSubmit}>
      <p className="screener-prompt">{screener.prompt}</p>

      <ol className="screener-questions">
        {screener.questions.map((q, qi) => (
          <li key={qi} className="screener-question">
            <fieldset>
              <legend>{q}</legend>
              <div className="screener-options">
                {SCREENER_OPTIONS.map((opt) => (
                  <label key={opt.value} className={`screener-option ${answers[qi] === opt.value ? "is-selected" : ""}`}>
                    <input
                      type="radio"
                      name={`${screener.id}-q${qi}`}
                      value={opt.value}
                      checked={answers[qi] === opt.value}
                      onChange={() => setAnswer(qi, opt.value)}
                    />
                    {opt.label}
                  </label>
                ))}
              </div>
            </fieldset>
          </li>
        ))}
      </ol>

      {error && <p className="screener-error">Please answer every question to see your result.</p>}

      <div className="screener-submit-row">
        <button type="submit" className="btn btn-primary">
          See my result
        </button>
        <button type="button" className="screener-restart" onClick={onRestart}>
          Cancel
        </button>
      </div>
    </form>
  );
}
