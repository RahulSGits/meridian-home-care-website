"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import {
  arrivalTimes,
  extrasList,
  frequencies,
  propertyRates,
} from "@/lib/content";
import {
  bathAdd,
  basePrice,
  dayList,
  extraSum,
  money,
  onSiteHours,
  oneTimePrice,
  quotePrice,
} from "@/lib/pricing";

const STEP_TITLES = ["Your place", "When", "Add anything"];

/* Resolves to false during SSR and hydration, true immediately after. Lets the
   day list be computed from the visitor's clock rather than baked into the
   prerendered HTML, without risking a hydration mismatch. */
const noop = () => () => {};
const useHydrated = () =>
  useSyncExternalStore(
    noop,
    () => true,
    () => false,
  );

export default function QuoteBuilder() {
  const [ux, setUx] = useState<"One screen" | "Stepper">("One screen");
  const [step, setStep] = useState(0);
  const [property, setProperty] = useState("House");
  const [sqft, setSqft] = useState(1600);
  const [baths, setBaths] = useState(2);
  const [beds, setBeds] = useState(3);
  const [freq, setFreq] = useState("Every 2 weeks");
  const [extras, setExtras] = useState<string[]>([]);
  const [dayI, setDayI] = useState(2);
  const [time, setTime] = useState("10:00–12:00");
  const [booked, setBooked] = useState(false);

  /* Dates resolve after hydration so a cached page never serves stale days. */
  const hydrated = useHydrated();
  const days = useMemo(() => (hydrated ? dayList(new Date()) : []), [hydrated]);
  const day = days.find((d) => d.i === dayI) ?? days[0];

  const input = useMemo(
    () => ({ property, sqft, baths, freq, extras }),
    [property, sqft, baths, freq, extras],
  );
  const price = quotePrice(input);
  const savings = oneTimePrice(input) - price;

  const stepper = ux === "Stepper";
  const showGroup = (g: number) => !stepper || step === g;

  const toggleExtra = (label: string) =>
    setExtras((prev) =>
      prev.includes(label) ? prev.filter((x) => x !== label) : [...prev, label],
    );

  const lines: [string, string][] = [
    [
      `${property} · ${money(sqft)} sq ft`,
      `$${money(Math.round(basePrice(property, sqft)))}`,
    ],
    [
      `${baths} bathrooms, ${beds} bedrooms`,
      bathAdd(baths) ? `$${money(bathAdd(baths))}` : "incl.",
    ],
    [
      extras.length ? `${extras.length} extras` : "No extras",
      extraSum(extras) ? `$${money(extraSum(extras))}` : "—",
    ],
    [day ? `${day.dow} ${day.num} · ${time}` : `Date pending · ${time}`, freq],
  ];

  return (
    <>
      <div className="split-head" data-rv>
        <div>
          <span className="kicker">Instant quote</span>
          <h2 className="h-section">
            Price it yourself.
            <br />
            No phone call.
          </h2>
        </div>
        <div>
          <p
            className="kicker kicker-muted"
            style={{ margin: "0 0 8px", fontSize: 12 }}
          >
            Booking flow — compare
          </p>
          <div className="seg" style={{ flexWrap: "wrap" }}>
            {(["One screen", "Stepper"] as const).map((o) => (
              <button
                key={o}
                type="button"
                className="seg-opt"
                data-on={ux === o}
                aria-pressed={ux === o}
                onClick={() => {
                  setUx(o);
                  setStep(0);
                }}
              >
                {o}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0,1.45fr) minmax(min(280px,100%),1fr)",
          gap: "clamp(28px,4vw,64px)",
          borderTop: "2px solid var(--color-divider)",
          paddingTop: "clamp(28px,3vw,44px)",
        }}
        className="quote-grid"
      >
        <div>
          {stepper ? (
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 800,
                  fontSize: 13,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                }}
              >
                Step {step + 1} of 3
              </span>
              <span
                style={{
                  flex: 1,
                  height: 2,
                  background: "var(--color-neutral-300)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    inset: 0,
                    transformOrigin: "left",
                    background: "var(--color-accent)",
                    transition: "transform .5s var(--ease)",
                    transform: `scaleX(${(step + 1) / 3})`,
                  }}
                />
              </span>
              <span className="text-muted" style={{ fontSize: 13, whiteSpace: "nowrap" }}>
                {STEP_TITLES[step]}
              </span>
            </div>
          ) : null}

          {showGroup(0) ? (
            <div style={{ marginBottom: 40 }}>
              <h3 style={{ fontSize: 20, margin: "0 0 20px" }}>01 — Your place</h3>

              <div className="field" style={{ marginBottom: 24 }}>
                <label>Property type</label>
                <div className="chip-row">
                  {Object.keys(propertyRates).map((p) => (
                    <button
                      key={p}
                      type="button"
                      className="chip"
                      data-on={property === p}
                      aria-pressed={property === p}
                      onClick={() => setProperty(p)}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit,minmax(min(180px,100%),1fr))",
                  gap: 20,
                }}
              >
                <div className="field">
                  <label htmlFor="sqft">Area — {money(sqft)} sq ft</label>
                  <input
                    id="sqft"
                    className="range"
                    type="range"
                    min={400}
                    max={6000}
                    step={50}
                    value={sqft}
                    onChange={(e) => setSqft(Number(e.target.value))}
                  />
                </div>

                <div className="field">
                  <label>Bathrooms</label>
                  <div className="chip-row">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <button
                        key={n}
                        type="button"
                        className="chip chip-num"
                        data-on={baths === n}
                        aria-pressed={baths === n}
                        onClick={() => setBaths(n)}
                      >
                        {n === 5 ? "5+" : n}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="field">
                  <label>Bedrooms</label>
                  <div className="chip-row">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <button
                        key={n}
                        type="button"
                        className="chip chip-num"
                        data-on={beds === n}
                        aria-pressed={beds === n}
                        onClick={() => setBeds(n)}
                      >
                        {n === 5 ? "5+" : n}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : null}

          {showGroup(1) ? (
            <div style={{ marginBottom: 40 }}>
              <h3 style={{ fontSize: 20, margin: "0 0 20px" }}>02 — When</h3>

              <div className="field" style={{ marginBottom: 24 }}>
                <label>Frequency</label>
                <div className="chip-row">
                  {frequencies.map(([label]) => (
                    <button
                      key={label}
                      type="button"
                      className="chip"
                      data-on={freq === label}
                      aria-pressed={freq === label}
                      onClick={() => setFreq(label)}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="field" style={{ marginBottom: 24 }}>
                <label>First visit</label>
                <div className="chip-row">
                  {days.length
                    ? days.map((d) => (
                        <button
                          key={d.i}
                          type="button"
                          className="chip chip-day"
                          data-on={dayI === d.i}
                          aria-pressed={dayI === d.i}
                          aria-label={d.full}
                          onClick={() => setDayI(d.i)}
                        >
                          <span className="dow">{d.dow}</span>
                          <span className="num">{d.num}</span>
                        </button>
                      ))
                    : Array.from({ length: 7 }, (_, i) => (
                        <span
                          key={i}
                          className="chip chip-day"
                          aria-hidden="true"
                          style={{ width: 58, height: 52, opacity: 0.4 }}
                        />
                      ))}
                </div>
              </div>

              <div className="field">
                <label>
                  Arrival window{day ? ` — 3 crews free ${day.dow}` : ""}
                </label>
                <div className="chip-row">
                  {arrivalTimes.map((t) => (
                    <button
                      key={t}
                      type="button"
                      className="chip"
                      data-on={time === t}
                      aria-pressed={time === t}
                      onClick={() => setTime(t)}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : null}

          {showGroup(2) ? (
            <div style={{ marginBottom: 40 }}>
              <h3 style={{ fontSize: 20, margin: "0 0 20px" }}>03 — Add anything</h3>
              <div className="chip-row">
                {extrasList.map(([label, extraPrice]) => (
                  <button
                    key={label}
                    type="button"
                    className="chip"
                    style={{ gap: 10 }}
                    data-on={extras.includes(label)}
                    aria-pressed={extras.includes(label)}
                    onClick={() => toggleExtra(label)}
                  >
                    <span>{label}</span>
                    <span className="chip-price">+${extraPrice}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : null}

          {stepper ? (
            <div
              style={{
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
                borderTop: "2px solid var(--color-divider)",
                paddingTop: 24,
              }}
            >
              <button
                type="button"
                className="btn btn-secondary"
                style={{ fontSize: 15, padding: "12px 20px" }}
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                disabled={step === 0}
              >
                Back
              </button>
              <button
                type="button"
                className="btn btn-primary"
                style={{ fontSize: 15, padding: "12px 20px" }}
                onClick={() => setStep((s) => Math.min(2, s + 1))}
              >
                {step === 2 ? "Review the price" : "Continue"}
              </button>
            </div>
          ) : null}
        </div>

        <aside
          style={{
            position: "sticky",
            top: 88,
            alignSelf: "start",
            background: "var(--color-surface)",
            padding: "clamp(20px,2.5vw,32px)",
            boxShadow: "var(--shadow-md)",
          }}
        >
          {booked ? (
            <div>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
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
                Confirmed
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 800,
                  fontSize: 26,
                  lineHeight: 1.1,
                  margin: "20px 0 12px",
                }}
              >
                You&apos;re on the schedule.
              </h3>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: "24px",
                  margin: "0 0 20px",
                  color: "color-mix(in srgb, var(--color-text) 80%, transparent)",
                }}
              >
                {day ? `${day.full}, ` : ""}
                {time} — {property.toLowerCase()}, ${money(price)}. Your lead cleaner is
                Renata M. — you&apos;ll get her photo and ETA by text the morning of.
              </p>
              <button
                type="button"
                className="btn btn-secondary btn-block"
                style={{ fontSize: 14, padding: "12px 16px" }}
                onClick={() => {
                  setBooked(false);
                  setStep(0);
                }}
              >
                Change something
              </button>
            </div>
          ) : (
            <div>
              <p className="kicker kicker-muted" style={{ margin: "0 0 12px", fontSize: 12 }}>
                Your flat price
              </p>
              <p
                className="tnum"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 800,
                  fontSize: "clamp(44px,5vw,64px)",
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                  margin: "0 0 4px",
                }}
                aria-live="polite"
              >
                ${money(price)}
              </p>
              <p className="text-muted" style={{ fontSize: 13, margin: "0 0 20px" }}>
                {freq === "One-time" ? "One-time visit" : `Per visit · ${freq.toLowerCase()}`} ·{" "}
                {onSiteHours(sqft, baths, extras.length)} on site · 2 cleaners
              </p>

              <hr className="hr" style={{ margin: "0 0 16px" }} />

              {lines.map(([k, v]) => (
                <div key={k} className="lines-row">
                  <span style={{ color: "color-mix(in srgb, var(--color-text) 75%, transparent)" }}>
                    {k}
                  </span>
                  <span>{v}</span>
                </div>
              ))}

              {savings > 0 ? (
                <p
                  className="tnum"
                  style={{
                    fontSize: 13,
                    margin: "16px 0 0",
                    padding: "10px 12px",
                    background: "var(--color-accent-100)",
                    color: "var(--color-accent-800)",
                  }}
                >
                  You save ${money(savings)} per visit against a one-time clean.
                </p>
              ) : null}

              <button
                type="button"
                className="btn btn-primary btn-block"
                style={{ fontSize: 15, padding: "14px 18px", marginTop: 20 }}
                onClick={() => setBooked(true)}
              >
                Book this clean
              </button>
              <p className="text-muted" style={{ fontSize: 12, lineHeight: "18px", margin: "12px 0 0" }}>
                No card until the job is done. Free cancellation up to 24h before.
              </p>
            </div>
          )}
        </aside>
      </div>
    </>
  );
}
