"use client";

import Link from "next/link";
import { useState } from "react";
import { frequencies, plans } from "@/lib/content";
import { money, planPrice } from "@/lib/pricing";

export default function PricingPlans({ heading = true }: { heading?: boolean }) {
  const [freq, setFreq] = useState("Every 2 weeks");

  return (
    <>
      <div className="split-head" data-rv>
        {heading ? (
          <div>
            <span className="kicker">Plans</span>
            <h2 className="h-section">Three levels. One price list.</h2>
          </div>
        ) : (
          <div>
            <span className="kicker">Compare</span>
            <h2 className="h-section">Pick your frequency.</h2>
          </div>
        )}
        <div className="seg" style={{ flexWrap: "wrap" }}>
          {frequencies.map(([label]) => (
            <button
              key={label}
              type="button"
              className="seg-opt"
              data-on={freq === label}
              aria-pressed={freq === label}
              onClick={() => setFreq(label)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="cellgrid cols-3">
        {plans.map((p) => (
          <div
            key={p.name}
            className="cell cell-hover"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: 12,
                marginBottom: 20,
                minHeight: 24,
              }}
            >
              <h3 style={{ fontSize: 24, margin: 0 }}>{p.name}</h3>
              {p.popular ? (
                <span
                  style={{
                    background: "var(--color-accent)",
                    color: "var(--color-bg)",
                    fontSize: 10,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "5px 9px",
                    whiteSpace: "nowrap",
                  }}
                >
                  Most booked
                </span>
              ) : null}
            </div>

            <p
              className="tnum"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 800,
                fontSize: "clamp(38px,4vw,50px)",
                lineHeight: 1,
                letterSpacing: "-0.03em",
                margin: "0 0 6px",
              }}
            >
              ${money(planPrice(p.mult, freq))}
            </p>
            <p className="text-muted" style={{ fontSize: 13, margin: "0 0 24px" }}>
              {freq === "One-time"
                ? "per visit · up to 1,800 sq ft"
                : `per visit · ${freq.toLowerCase()}`}
            </p>

            <p
              style={{
                fontSize: 14.5,
                lineHeight: "25px",
                margin: "0 0 24px",
                color: "color-mix(in srgb, var(--color-text) 80%, transparent)",
              }}
            >
              {p.copy}
            </p>

            <div
              style={{
                borderTop: "2px solid var(--color-divider)",
                paddingTop: 18,
                marginBottom: 24,
              }}
            >
              {p.features.map((f) => (
                <div key={f} className="feature-row">
                  <span className="feature-dot" aria-hidden="true" />
                  <span>{f}</span>
                </div>
              ))}
            </div>

            <Link
              href="/book"
              className="btn btn-primary btn-block"
              style={{ marginTop: "auto", fontSize: 14, padding: "13px 16px" }}
            >
              {p.cta}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
