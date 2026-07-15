import { Link } from "react-router-dom";
import { NAV_LINKS, PHONE, PHONE_HREF, CRISIS_LINE, SOCIAL_LINKS, BOOKING_URL } from "../data.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="nav-logo">
            <img src="/apmg-logo.webp" alt="APMG" className="brand-logo" />
          </div>
          <p>A mental health collective offering accessible, personalized care in-person and via telehealth.</p>
          <div className="footer-social">
            {SOCIAL_LINKS.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-links">
          <h4>Navigate</h4>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
            <li>
              <a href={BOOKING_URL} target="_blank" rel="noreferrer">
                Get Started
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>
            <a href={PHONE_HREF}>{PHONE}</a>
          </p>
          <p className="footer-crisis">
            In crisis? Call or text <strong>{CRISIS_LINE}</strong> to speak with a crisis counselor.
          </p>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Advanced Practice Medical Group. All rights reserved.</p>
      </div>
    </footer>
  );
}
