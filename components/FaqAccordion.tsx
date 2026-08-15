"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";
import { site } from "@/lib/site";

export default function FaqAccordion({ searchable = true }: { searchable?: boolean }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(0);

  const q = query.trim().toLowerCase();
  const shown = faqs.filter(
    ([question, answer]) => !q || `${question} ${answer}`.toLowerCase().includes(q),
  );

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
        <h2 className="h-section" style={{ margin: "0 0 20px -0.05em" }}>
          Questions,
          <br />
          answered plainly.
        </h2>
        {searchable ? (
          <div className="field" style={{ maxWidth: 340 }}>
            <label htmlFor="faq-search">Search the answers</label>
            <input
              id="faq-search"
              className="input"
              type="search"
              placeholder="pets, keys, cancellation…"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setOpen(0);
              }}
            />
          </div>
        ) : null}
        <p className="text-muted" style={{ fontSize: 13, margin: "16px 0 0" }}>
          Still stuck? Call <a href={site.phoneHref}>{site.phone}</a> — a human answers,{" "}
          {site.hours}.
        </p>
      </div>

      <div className="acc">
        {shown.map(([question, answer], i) => {
          const isOpen = open === i;
          return (
            <div key={question} className="acc-item">
              <button
                type="button"
                className="faq-btn"
                aria-expanded={isOpen}
                aria-controls={`faq-${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span>{question}</span>
                <span className="acc-plus" aria-hidden="true">
                  +
                </span>
              </button>
              {isOpen ? (
                <p className="faq-a" id={`faq-${i}`}>
                  {answer}
                </p>
              ) : null}
            </div>
          );
        })}
        {shown.length === 0 ? (
          <p style={{ fontSize: 15, padding: "24px 2px", margin: 0 }}>
            Nothing matches that. Call {site.phone} and we&apos;ll answer it directly.
          </p>
        ) : null}
      </div>
    </div>
  );
}
