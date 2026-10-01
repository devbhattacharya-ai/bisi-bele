"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-header">
      <div className="nav-inner">
        <a href="#top" className="logo" onClick={close}>
          <span className="logo-mark" aria-hidden="true">
            BB
          </span>
          Bisi Bele
        </a>

        <nav className="nav-desktop" aria-label="Primary">
          <ul className="nav-links">
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#story">Our Story</a>
            </li>
            <li>
              <a href="#visit">Visit</a>
            </li>
          </ul>
        </nav>

        <a href="#order" className="btn-order-nav nav-desktop">
          Order now →
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`nav-mobile${open ? " open" : ""}`}
        hidden={!open}
      >
        <nav aria-label="Mobile">
          <ul className="nav-links">
            <li>
              <a href="#menu" onClick={close}>
                Menu
              </a>
            </li>
            <li>
              <a href="#story" onClick={close}>
                Our Story
              </a>
            </li>
            <li>
              <a href="#visit" onClick={close}>
                Visit
              </a>
            </li>
          </ul>
          <a href="#order" className="btn-order-nav" onClick={close}>
            Order now →
          </a>
        </nav>
      </div>
    </header>
  );
}
