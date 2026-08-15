"use client";

import { useState } from "react";
import { services } from "@/lib/content";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div
        style={{
          background: "var(--color-surface)",
          padding: "clamp(24px,3vw,40px)",
          boxShadow: "var(--shadow-md)",
        }}
      >
        <span
          style={{
            display: "inline-flex",
            background: "var(--color-accent)",
            color: "var(--color-bg)",
            fontFamily: "var(--font-heading)",
            fontWeight: 800,
            fontSize: 11,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "6px 10px",
          }}
        >
          Received
        </span>
        <h2 style={{ fontSize: 28, margin: "20px 0 12px" }}>Thanks — that&apos;s with us.</h2>
        <p className="body" style={{ margin: "0 0 20px", maxWidth: "44ch" }}>
          A scheduler replies inside one working day, usually the same morning. If it is
          urgent, call us instead and a human picks up.
        </p>
        <button type="button" className="btn btn-secondary" onClick={() => setSent(false)}>
          Send another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      style={{
        background: "var(--color-surface)",
        padding: "clamp(24px,3vw,40px)",
        boxShadow: "var(--shadow-md)",
        display: "grid",
        gap: 20,
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(200px,100%),1fr))",
          gap: 20,
        }}
      >
        <div className="field">
          <label htmlFor="c-name">Your name</label>
          <input id="c-name" name="name" className="input" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="c-email">Email</label>
          <input
            id="c-email"
            name="email"
            type="email"
            className="input"
            required
            autoComplete="email"
          />
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(200px,100%),1fr))",
          gap: 20,
        }}
      >
        <div className="field">
          <label htmlFor="c-phone">Phone</label>
          <input
            id="c-phone"
            name="phone"
            type="tel"
            className="input"
            autoComplete="tel"
            placeholder="(312) 555-0000"
          />
        </div>
        <div className="field">
          <label htmlFor="c-service">What do you need?</label>
          <select id="c-service" name="service" className="input" defaultValue="">
            <option value="" disabled>
              Choose a service
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
            <option value="Something else">Something else</option>
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="c-address">Property address or neighbourhood</label>
        <input
          id="c-address"
          name="address"
          className="input"
          placeholder="Lincoln Park, or the full address"
        />
      </div>

      <div className="field">
        <label htmlFor="c-message">Anything we should know</label>
        <textarea
          id="c-message"
          name="message"
          className="input"
          placeholder="Pets, access arrangements, the state of the oven — all useful."
        />
      </div>

      <div>
        <button type="submit" className="btn btn-primary btn-lg">
          Send it
        </button>
        <p className="text-muted" style={{ fontSize: 12, margin: "12px 0 0", maxWidth: "48ch" }}>
          We use this only to answer you. No lists, no resale — see the{" "}
          <a href="/privacy">privacy notice</a>.
        </p>
      </div>
    </form>
  );
}
