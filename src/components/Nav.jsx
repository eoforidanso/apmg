import { useState } from "react";
import { NavLink } from "react-router-dom";
import { NAV_LINKS, BOOKING_URL } from "../data.js";

export default function Nav({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="container nav-inner">
        <NavLink to="/" className="nav-logo" onClick={() => setOpen(false)}>
          <img src="/apmg-logo.webp" alt="APMG" className="brand-logo" />
        </NavLink>

        <nav className={`nav-links ${open ? "nav-links-open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) => `nav-link ${isActive ? "nav-link-active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="btn btn-primary nav-cta">
            Request Appointment
          </a>
        </nav>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
          <button
            className="nav-burger"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
}
