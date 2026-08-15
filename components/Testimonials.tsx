"use client";

import { useState } from "react";
import { testimonials } from "@/lib/content";
import { site } from "@/lib/site";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const [quote, author, meta] = testimonials[i];

  const step = (d: number) =>
    setI((prev) => (prev + d + testimonials.length) % testimonials.length);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(min(300px,100%),1fr))",
        gap: "clamp(28px,4vw,72px)",
        alignItems: "start",
      }}
    >
      <div data-rvx>
        <span className="kicker">
          {site.rating.value} · {site.rating.count.toLocaleString("en-US")} Google reviews
        </span>
        <h2 className="h-section" style={{ margin: "0 0 24px -0.05em" }}>
          In their words.
        </h2>
        <div style={{ display: "flex", gap: 8 }}>
          <button
            type="button"
            className="btn btn-secondary btn-icon"
            onClick={() => step(-1)}
            aria-label="Previous testimonial"
          >
            ←
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-icon"
            onClick={() => step(1)}
            aria-label="Next testimonial"
          >
            →
          </button>
          <span
            className="tnum text-muted"
            style={{ alignSelf: "center", fontSize: 13, marginLeft: 8 }}
            aria-live="polite"
          >
            {i + 1} / {testimonials.length}
          </span>
        </div>
      </div>

      <figure style={{ margin: 0 }} data-rv>
        <p className="stars" style={{ fontSize: 16, margin: "0 0 20px" }} aria-label="Five stars">
          ★★★★★
        </p>
        <blockquote
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 800,
            fontSize: "clamp(22px,2.4vw,32px)",
            lineHeight: 1.35,
            letterSpacing: "-0.015em",
            margin: 0,
            maxWidth: "34ch",
            minHeight: "4.05em",
          }}
        >
          {quote}
        </blockquote>
        <figcaption
          style={{
            fontSize: 15,
            lineHeight: "26px",
            margin: "28px 0 0",
            color: "color-mix(in srgb, var(--color-text) 72%, transparent)",
          }}
        >
          {author}
          <br />
          {meta}
        </figcaption>
      </figure>
    </div>
  );
}
