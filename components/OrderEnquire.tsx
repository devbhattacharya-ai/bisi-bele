"use client";

import { FormEvent, useEffect, useId, useRef, useState } from "react";

export default function OrderEnquire() {
  const [sent, setSent] = useState(false);
  const successHeadingRef = useRef<HTMLHeadingElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (sent) {
      successHeadingRef.current?.focus();
    }
  }, [sent]);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  function reset() {
    setSent(false);
    // Return focus to first field after React re-renders the form
    requestAnimationFrame(() => firstFieldRef.current?.focus());
  }

  if (sent) {
    return (
      <div
        className="order-panel"
        role="status"
        aria-live="polite"
        aria-atomic="true"
        aria-labelledby={titleId}
      >
        <div className="success-box">
          <h3 id={titleId} ref={successHeadingRef} tabIndex={-1}>
            Enquiry received — concept demo
          </h3>
          <p>
            Thanks for trying the demo path. No message was sent to a kitchen,
            and no payment was taken. In a live project this would route to the
            restaurant&apos;s preferred channel.
          </p>
          <button type="button" onClick={reset}>
            Send another enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="order-panel">
      <form className="order-form" onSubmit={onSubmit} noValidate>
        <div className="field">
          <label htmlFor="guest-name">Your name</label>
          <input
            ref={firstFieldRef}
            id="guest-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder="e.g. Priya"
          />
        </div>
        <div className="field">
          <label htmlFor="guest-phone">Phone</label>
          <input
            id="guest-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            placeholder="e.g. 98XXXXXX01"
          />
        </div>
        <div className="field">
          <label htmlFor="guest-interest">What are you looking for?</label>
          <select id="guest-interest" name="interest" defaultValue="order">
            <option value="order">Table / takeaway enquiry</option>
            <option value="catering">Catering (concept)</option>
            <option value="other">Something else</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="guest-note">Note (optional)</label>
          <textarea
            id="guest-note"
            name="note"
            placeholder="Favourite dish, party size, preferred time…"
          />
        </div>
        <p className="form-hint" id="order-demo-hint">
          Demo only — submits a fake success state. No payment, no live kitchen.
        </p>
        <button
          type="submit"
          className="btn-primary"
          aria-describedby="order-demo-hint"
        >
          Send enquiry →
        </button>
      </form>
    </div>
  );
}
