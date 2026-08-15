import Link from "next/link";
import { site } from "@/lib/site";
import { counters, certs, steps, reasons } from "@/lib/content";

/* ── Page header used by every interior page ───────────────────────────── */

export function PageHeader({
  kicker,
  title,
  lede,
  children,
}: {
  kicker: string;
  title: React.ReactNode;
  lede?: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="section-rule-b">
      <div
        className="wrap"
        style={{ paddingBlock: "clamp(40px,6vw,88px) clamp(32px,4vw,56px)" }}
        data-rv
      >
        <span className="kicker">{kicker}</span>
        <h1 className="h-page">{title}</h1>
        {lede ? <p className="lede" style={{ margin: "24px 0 0" }}>{lede}</p> : null}
        {children ? <div style={{ marginTop: 28 }}>{children}</div> : null}
      </div>
    </header>
  );
}

/* ── Numbered counters strip ───────────────────────────────────────────── */

export function Counters() {
  return (
    <section className="wrap" style={{ paddingTop: "var(--section-y)" }}>
      <hr className="hr" style={{ margin: 0 }} />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(180px,100%),1fr))",
          gap: 32,
          padding: "clamp(36px,4vw,64px) 0",
        }}
      >
        {counters.map(([value, suffix, label]) => (
          <div key={label} data-rv>
            <p
              className="tnum"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 800,
                fontSize: "clamp(38px,4.2vw,56px)",
                lineHeight: 1.05,
                color: "var(--color-accent)",
                margin: "0 0 0 -0.045em",
              }}
            >
              {value.toLocaleString("en-US")}
              {suffix}
            </p>
            <p
              style={{
                fontSize: 13,
                lineHeight: "18px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "color-mix(in srgb, var(--color-text) 70%, transparent)",
                margin: "14px 0 0",
                maxWidth: "22ch",
              }}
            >
              {label}
            </p>
          </div>
        ))}
      </div>
      <hr className="hr" style={{ margin: 0 }} />
    </section>
  );
}

/* ── Certification row ─────────────────────────────────────────────────── */

export function Certs({ bordered = true }: { bordered?: boolean }) {
  return (
    <div
      className="certs-row"
      style={
        bordered
          ? {
              marginTop: "clamp(36px,4vw,56px)",
              paddingTop: 28,
              borderTop: "2px solid var(--color-divider)",
            }
          : undefined
      }
    >
      {certs.map((c) => (
        <span key={c} className="cert">
          {c}
        </span>
      ))}
    </div>
  );
}

/* ── Six reasons grid ──────────────────────────────────────────────────── */

export function Reasons() {
  return (
    <section className="wrap section">
      <div className="split-head" data-rv>
        <h2 className="h-section">
          Why people stay
          <br />
          for years.
        </h2>
        <p className="kicker kicker-muted" style={{ margin: 0 }}>
          Six reasons, no fine print
        </p>
      </div>
      <div className="cellgrid cols-3x">
        {reasons.map(([title, copy]) => (
          <div key={title} className="cell cell-hover">
            <span className="cell-mark" aria-hidden="true" />
            <h3>{title}</h3>
            <p className="body" style={{ margin: 0 }}>
              {copy}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Four-step process ─────────────────────────────────────────────────── */

export function Process() {
  return (
    <section className="section-rule-t section-rule-b">
      <div className="wrap section">
        <span className="kicker" data-rv>
          The process
        </span>
        <div className="cellgrid cols-4">
          {steps.map(([n, title, copy]) => (
            <div key={n} className="cell" data-rv>
              <p
                className="tnum"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 800,
                  fontSize: "clamp(40px,4.5vw,60px)",
                  lineHeight: 1,
                  color: "var(--color-accent-300)",
                  margin: "0 0 24px",
                }}
              >
                {n}
              </p>
              <h3 style={{ fontSize: 22, margin: "0 0 10px" }}>{title}</h3>
              <p className="body" style={{ margin: 0 }}>
                {copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Closing call-to-action ────────────────────────────────────────────── */

export function CtaBlock({
  headline = "Come home to it.",
  sub = "Thursday works.",
}: {
  headline?: string;
  sub?: string;
}) {
  return (
    <section className="block-accent">
      <div className="wrap" style={{ paddingBlock: "clamp(56px,7vw,112px)" }}>
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 800,
            fontSize: "clamp(34px,5.4vw,76px)",
            lineHeight: 1.06,
            letterSpacing: "-0.02em",
            margin: "0 0 0 -0.058em",
          }}
        >
          <span style={{ display: "block" }}>{headline}</span>
          <span style={{ display: "block", opacity: 0.72 }}>{sub}</span>
        </h2>

        <div className="btn-row" style={{ marginTop: "clamp(28px,3vw,44px)" }}>
          <Link href="/book" className="btn btn-invert btn-lg">
            Book in 30 seconds
          </Link>
          <a href={site.phoneHref} className="btn btn-outline-invert btn-lg">
            Call {site.phone}
          </a>
        </div>

        <div
          className="rule-invert"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(200px,100%),1fr))",
            gap: 24,
            marginTop: "clamp(40px,5vw,72px)",
            paddingTop: 32,
          }}
        >
          {[
            ["Emergency & same-day", "Booked before 10am, cleaned today."],
            ["Service area", "Chicago & the North Shore."],
            ["Guarantee", "Not right? We re-clean free."],
          ].map(([k, v]) => (
            <div key={k}>
              <p
                style={{
                  fontSize: 11,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  opacity: 0.75,
                  margin: "0 0 8px",
                }}
              >
                {k}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 800,
                  fontSize: 19,
                  margin: 0,
                }}
              >
                {v}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
