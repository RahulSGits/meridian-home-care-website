import Link from "next/link";
import Photo from "@/components/Photo";
import QuoteBuilder from "@/components/QuoteBuilder";
import ServiceAccordion from "@/components/ServiceAccordion";
import BeforeAfter from "@/components/BeforeAfter";
import Testimonials from "@/components/Testimonials";
import PricingPlans from "@/components/PricingPlans";
import FaqAccordion from "@/components/FaqAccordion";
import { Counters, Reasons, Process, CtaBlock, Certs } from "@/components/Sections";
import { gallery, team } from "@/lib/content";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section
        className="wrap"
        style={{ padding: "clamp(48px,7vw,112px) var(--gutter) 0" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(420px,100%),1fr))",
            gap: "clamp(32px,5vw,80px)",
            alignItems: "end",
          }}
        >
          <div data-rv>
            <span className="kicker">
              Chicago · Est. {site.founded}{" "}
              <span>· Licensed &amp; insured</span>
            </span>
            <h1 className="display">
              <span style={{ display: "block" }}>Experience cleaning</span>
              <span style={{ display: "block" }}>reimagined.</span>
            </h1>
            <p className="lede" style={{ margin: "28px 0 0" }}>
              The same background-checked team, every visit. A flat price you see before
              you book. And a standard so exact that we re-clean, free, if a single room
              misses it.
            </p>
            <div className="btn-row" style={{ marginTop: 32 }}>
              <Link href="/book" className="btn btn-primary btn-lg">
                Book in 30 seconds
              </Link>
              <Link href="#proof" className="btn btn-secondary btn-lg">
                See the difference
              </Link>
            </div>
            <div
              className="trust-row"
              style={{
                marginTop: 36,
                paddingTop: 24,
                borderTop: "2px solid var(--color-divider)",
              }}
            >
              <span
                className="tnum"
                style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13 }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 800,
                    fontSize: 15,
                  }}
                >
                  {site.rating.value}
                </span>
                <span className="stars" aria-hidden="true">
                  ★★★★★
                </span>
                <span className="trust-item">
                  {site.rating.count.toLocaleString("en-US")} Google reviews
                </span>
              </span>
              <span className="trust-item">Background-checked staff</span>
              <span className="trust-item">Green Seal certified</span>
            </div>
          </div>

          <Photo
            seed="hero-chicago-apartment"
            label="Hero — a cleaner at work in a high-end Chicago apartment, natural light"
            ratio="4 / 5"
          />
        </div>
      </section>

      <Counters />

      {/* ── Instant quote ───────────────────────────────────────────────── */}
      <section id="book" className="wrap section">
        <QuoteBuilder />
      </section>

      {/* ── Services ────────────────────────────────────────────────────── */}
      <section id="services" className="section-rule-t">
        <div className="wrap section">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(min(300px,100%),1fr))",
              gap: "clamp(24px,4vw,64px)",
              marginBottom: "clamp(32px,4vw,56px)",
            }}
            data-rv
          >
            <div>
              <span className="kicker">Twelve services</span>
              <h2 className="h-section">Everything, done to one standard.</h2>
            </div>
            <p className="body-lg" style={{ margin: 0, alignSelf: "end" }}>
              Every service runs off a written, room-by-room checklist your cleaner signs
              before leaving. Open any line to read exactly what&apos;s in it.
            </p>
          </div>
          <ServiceAccordion />
          <div style={{ marginTop: 32 }}>
            <Link href="/services" className="btn btn-secondary btn-lg">
              All twelve services in detail →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Before / after ──────────────────────────────────────────────── */}
      <section id="proof" className="section-surface">
        <div className="wrap section">
          <BeforeAfter />
        </div>
      </section>

      <Reasons />
      <Process />

      {/* ── Pricing ─────────────────────────────────────────────────────── */}
      <section id="pricing" className="wrap section">
        <PricingPlans />
        <div style={{ marginTop: 32 }}>
          <Link href="/pricing" className="btn btn-secondary btn-lg">
            Full plan comparison →
          </Link>
        </div>
      </section>

      {/* ── Testimonials ────────────────────────────────────────────────── */}
      <section className="section-surface section-rule-t">
        <div className="wrap section">
          <Testimonials />
        </div>
      </section>

      {/* ── Gallery ─────────────────────────────────────────────────────── */}
      <section className="wrap section">
        <div className="split-head" data-rv style={{ marginBottom: "clamp(24px,3vw,40px)" }}>
          <h2 className="h-section">The work.</h2>
          <p className="kicker kicker-muted" style={{ margin: 0 }}>
            Chicago, this quarter
          </p>
        </div>
        <div style={{ columns: "3 300px", columnGap: 2 }}>
          {gallery.slice(0, 6).map((g) => (
            <div key={g.id} style={{ breakInside: "avoid", marginBottom: 2 }}>
              <Photo seed={g.id + g.label} label={g.label} ratio={g.ratio} zoom showLabel />
            </div>
          ))}
        </div>
        <div style={{ marginTop: 32 }}>
          <Link href="/gallery" className="btn btn-secondary btn-lg">
            See the full gallery →
          </Link>
        </div>
      </section>

      {/* ── Team ────────────────────────────────────────────────────────── */}
      <section className="section-rule-t">
        <div className="wrap section">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(min(300px,100%),1fr))",
              gap: "clamp(24px,4vw,64px)",
              marginBottom: "clamp(28px,3vw,48px)",
            }}
            data-rv
          >
            <div>
              <span className="kicker">The people</span>
              <h2 className="h-section">You&apos;ll know their names.</h2>
            </div>
            <p className="body-lg" style={{ margin: 0, alignSelf: "end", maxWidth: "44ch" }}>
              Employed, not gigged — W-2, paid above market, background-checked, and
              trained for six weeks before their first solo visit. Recurring clients keep
              the same lead cleaner.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(min(220px,100%),1fr))",
              gap: "clamp(16px,2vw,28px)",
            }}
          >
            {team.map((m) => (
              <div key={m.name} data-rv>
                <div style={{ marginBottom: 16 }}>
                  <Photo seed={`team-${m.name}`} label={m.photo} ratio="4 / 5" zoom />
                </div>
                <h3 style={{ fontSize: 19, margin: "0 0 4px" }}>{m.name}</h3>
                <p className="text-muted" style={{ fontSize: 13, margin: "0 0 10px" }}>
                  {m.role} · {m.years}
                </p>
                <span className="tag tag-accent">{m.cert}</span>
              </div>
            ))}
          </div>

          <Certs />
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section id="faq" className="section-rule-t section-surface">
        <div className="wrap section">
          <FaqAccordion />
        </div>
      </section>

      <CtaBlock />
    </>
  );
}
