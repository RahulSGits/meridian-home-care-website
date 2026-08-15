"use client";

import Link from "next/link";
import { useState } from "react";
import { services } from "@/lib/content";

export default function ServiceAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="acc">
      {services.map((s, i) => {
        const isOpen = open === i;
        return (
          <div key={s.slug} className="acc-item">
            <button
              type="button"
              className="acc-btn"
              aria-expanded={isOpen}
              aria-controls={`svc-${s.slug}`}
              onClick={() => setOpen(isOpen ? -1 : i)}
            >
              <span className="acc-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="acc-name">{s.name}</span>
              <span className="acc-from">
                {s.from ? `from $${s.from.toLocaleString("en-US")}` : "from quote"}
              </span>
              <span className="acc-plus" aria-hidden="true">
                +
              </span>
            </button>

            {isOpen ? (
              <div className="acc-panel" id={`svc-${s.slug}`}>
                <span className="acc-panel-spacer" aria-hidden="true" />
                <div className="acc-panel-inner">
                  <div>
                    <p
                      style={{
                        fontSize: 16,
                        lineHeight: "28px",
                        margin: "0 0 18px",
                        maxWidth: "44ch",
                        color: "color-mix(in srgb, var(--color-text) 82%, transparent)",
                      }}
                    >
                      {s.copy}
                    </p>
                    <Link href={`/services/${s.slug}`} className="btn btn-secondary">
                      Read the full checklist →
                    </Link>
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: 11,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "color-mix(in srgb, var(--color-text) 55%, transparent)",
                        margin: "0 0 10px",
                      }}
                    >
                      Included
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {s.items.map((item) => (
                        <span key={item} className="tag tag-neutral">
                          {item}
                        </span>
                      ))}
                    </div>
                    <p
                      className="text-muted"
                      style={{ fontSize: 13, margin: "16px 0 0" }}
                    >
                      Typical duration {s.duration}
                    </p>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
