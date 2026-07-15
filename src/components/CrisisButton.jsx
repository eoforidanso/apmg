import { useEffect, useRef, useState } from "react";
import { CRISIS_RESOURCES } from "../data.js";

/**
 * Always-available crisis access. Fixed to the viewport on every page so a
 * visitor in distress is never more than one tap from 988 / 741741 / 911.
 * Kept calm rather than alarming on purpose — visible, reassuring, not red.
 */
export default function CrisisButton() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    function onKey(e) {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    function onClickOutside(e) {
      if (panelRef.current && !panelRef.current.contains(e.target) && e.target !== buttonRef.current) {
        setOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [open]);

  return (
    <div className="crisis">
      {open && (
        <div className="crisis-panel" ref={panelRef} role="dialog" aria-label="Crisis resources">
          <div className="crisis-panel-head">
            <strong>You're not alone</strong>
            <button className="crisis-close" onClick={() => setOpen(false)} aria-label="Close">
              ✕
            </button>
          </div>
          <p className="crisis-lead">If you're struggling or thinking about harming yourself, help is available right now.</p>
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

      <button
        ref={buttonRef}
        className="crisis-trigger"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="dialog"
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path
            d="M12 21s-7.5-4.35-10-9.5C.4 8.1 2.1 4.5 5.5 4.5c2 0 3.4 1.1 4.5 2.6C11.1 5.6 12.5 4.5 14.5 4.5c3.4 0 5.1 3.6 3.5 7C19.5 16.65 12 21 12 21z"
            fill="currentColor"
          />
        </svg>
        Need help now?
      </button>
    </div>
  );
}
