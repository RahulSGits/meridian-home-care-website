"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  if (subscribed) {
    return (
      <p style={{ fontSize: 14, margin: 0, color: "var(--color-accent-700)" }}>
        Subscribed. First offer lands Monday.
      </p>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (email.includes("@")) setSubscribed(true);
      }}
    >
      <p
        style={{
          fontSize: 14,
          lineHeight: "24px",
          margin: "0 0 12px",
          color: "color-mix(in srgb, var(--color-text) 70%, transparent)",
        }}
      >
        One email a month. Spring deep-clean slots go first.
      </p>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <input
          className="input"
          type="email"
          required
          placeholder="you@email.com"
          aria-label="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ flex: 1, minWidth: 150 }}
        />
        <button type="submit" className="btn btn-primary">
          Join
        </button>
      </div>
    </form>
  );
}
