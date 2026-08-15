import type { Metadata } from "next";
import Link from "next/link";
import Photo from "@/components/Photo";
import Testimonials from "@/components/Testimonials";
import { PageHeader, Counters, Reasons, Certs, CtaBlock } from "@/components/Sections";
import { team } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meridian has cleaned Chicago homes since 2014 with W-2 staff, published prices, and a re-clean rate we report every quarter. Meet the people who do the work.",
};

const timeline: [string, string, string][] = [
  [
    "2014",
    "Two vans, one neighbourhood",
    "Founded in Logan Square with two cleaners and a spreadsheet. The first checklist was a laminated sheet on a clipboard — the current one is a direct descendant.",
  ],
  [
    "2017",
    "Everyone goes W-2",
    "We dropped the contractor model entirely. It cost more, made scheduling harder, and immediately fixed the quality problem we could not otherwise solve.",
  ],
  [
    "2019",
    "The price goes on the website",
    "Competitors quoted by phone after a walk-through. We published the rate card instead and let people book without speaking to anyone.",
  ],
  [
    "2021",
    "Green Seal across the board",
    "Every product in every van replaced with a certified equivalent, and a fragrance-free protocol added for allergy and infant households.",
  ],
  [
    "2023",
    "Commercial and clinical",
    "Multi-site contracts, hospitality and medical work added, with documented dwell times and audit scoring built in from the start.",
  ],
  [
    "2026",
    "Ten thousand homes",
    "Over 10,400 Chicago homes cleaned, a 1.4% re-clean rate published quarterly, and the same lead cleaner on most recurring plans.",
  ],
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        kicker={`Est. ${site.founded} · Chicago`}
        title={
          <>
            A cleaning company
            <br />
            that shows its work.
          </>
        }
        lede="We publish the price, publish the checklist, and publish the percentage of visits we get wrong. It is a harder way to run a cleaning company and it is the only reason clients stay a decade."
      />

      <section className="wrap section">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(320px,100%),1fr))",
            gap: "clamp(28px,4vw,72px)",
            alignItems: "center",
          }}
        >
          <div data-rvx>
            <span className="kicker">Why we exist</span>
            <h2 className="h-section" style={{ marginBottom: 24 }}>
              Nobody cancels a cleaner
              <br />
              over one bad clean.
            </h2>
            <p className="body-lg" style={{ maxWidth: "48ch", marginBottom: 16 }}>
              They cancel over the third one, after the second apology, when it becomes
              clear the person in their home changes every week and nobody is accountable
              for the standard.
            </p>
            <p className="body-lg" style={{ maxWidth: "48ch" }}>
              Everything we do differently follows from that. Employed staff instead of
              gig contractors. One lead cleaner per household. A written checklist signed
              on the way out. And a re-clean rate we publish rather than bury.
            </p>
          </div>
          <Photo
            seed="about-team-at-work"
            label="Meridian cleaners at work in a Chicago apartment"
            ratio="4 / 3"
          />
        </div>
      </section>

      <Counters />

      {/* ── Timeline ────────────────────────────────────────────────────── */}
      {/* No top rule — <Counters /> already closes with one. */}
      <section>
        <div className="wrap section">
          <div className="split-head" data-rv>
            <div>
              <span className="kicker">The long version</span>
              <h2 className="h-section">Twelve years, briefly.</h2>
            </div>
          </div>
          <div className="cellgrid cols-3x">
            {timeline.map(([year, title, copy]) => (
              <div key={year} className="cell cell-hover" data-rv>
                <p
                  className="tnum"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 800,
                    fontSize: "clamp(34px,3.6vw,46px)",
                    lineHeight: 1,
                    color: "var(--color-accent-300)",
                    margin: "0 0 20px",
                  }}
                >
                  {year}
                </p>
                <h3>{title}</h3>
                <p className="body" style={{ margin: 0 }}>
                  {copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ────────────────────────────────────────────────────────── */}
      <section className="section-surface section-rule-t">
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
            <p className="body-lg" style={{ margin: 0, alignSelf: "end" }}>
              W-2, paid above market, background-checked, and trained for six weeks before
              a first solo visit. Recurring clients keep the same lead cleaner.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(min(260px,100%),1fr))",
              gap: "clamp(20px,2.5vw,32px)",
            }}
          >
            {team.map((m) => (
              <div key={m.name} data-rv>
                <div style={{ marginBottom: 16 }}>
                  <Photo seed={`team-${m.name}`} label={m.photo} ratio="4 / 5" zoom />
                </div>
                <h3 style={{ fontSize: 20, margin: "0 0 4px" }}>{m.name}</h3>
                <p className="text-muted" style={{ fontSize: 13, margin: "0 0 10px" }}>
                  {m.role} · {m.years}
                </p>
                <p className="body" style={{ margin: "0 0 12px", fontSize: 14 }}>
                  {m.bio}
                </p>
                <span className="tag tag-accent">{m.cert}</span>
              </div>
            ))}
          </div>

          <Certs />

          <div style={{ marginTop: 32 }}>
            <Link href="/careers" className="btn btn-secondary btn-lg">
              We&apos;re hiring — see open roles →
            </Link>
          </div>
        </div>
      </section>

      <Reasons />

      <section className="section-rule-t section-surface">
        <div className="wrap section">
          <Testimonials />
        </div>
      </section>

      <CtaBlock headline="Meet them Thursday." sub="Book a first clean." />
    </>
  );
}
