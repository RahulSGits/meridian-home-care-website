import type { Metadata } from "next";
import Link from "next/link";
import Photo from "@/components/Photo";
import { PageHeader, CtaBlock, Certs } from "@/components/Sections";
import { areas } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Service areas",
  description:
    "Meridian cleans across Chicago and the North Shore — Lincoln Park, Bucktown, West Loop, Hyde Park, Evanston, Wilmette and thirty more neighbourhoods.",
};

export default function AreasPage() {
  return (
    <>
      <PageHeader
        kicker="Chicago & the North Shore"
        title={
          <>
            Where we
            <br />
            actually go.
          </>
        }
        lede="Four crew bases, roughly forty neighbourhoods. If you are not on this list, call us anyway — we add coverage where the routing works."
      >
        <div className="btn-row">
          <Link href="/book" className="btn btn-primary btn-lg">
            Check availability
          </Link>
          <a href={site.phoneHref} className="btn btn-secondary btn-lg">
            Call {site.phone}
          </a>
        </div>
      </PageHeader>

      <section className="wrap section">
        <div className="stack-lg">
          {areas.map((area, i) => (
            <div
              key={area.zone}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(min(300px,100%),1fr))",
                gap: "clamp(24px,4vw,56px)",
                alignItems: "start",
                paddingTop: i === 0 ? 0 : "clamp(28px,4vw,56px)",
                borderTop: i === 0 ? "none" : "2px solid var(--color-divider)",
              }}
              data-rv
            >
              <div>
                <span className="kicker">Zone {String(i + 1).padStart(2, "0")}</span>
                <h2 className="h-section" style={{ marginBottom: 16 }}>
                  {area.zone}
                </h2>
                <p className="body-lg" style={{ marginBottom: 24 }}>
                  {area.blurb}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {area.hoods.map((h) => (
                    <span key={h} className="tag tag-neutral" style={{ fontSize: 13, padding: "5px 12px" }}>
                      {h}
                    </span>
                  ))}
                </div>
              </div>
              <Photo
                seed={`area-${area.zone}`}
                label={`${area.zone} — Meridian service area`}
                ratio="16 / 10"
                zoom
              />
            </div>
          ))}
        </div>
      </section>

      <section className="section-surface section-rule-t">
        <div className="wrap section">
          <div className="split-head" data-rv>
            <div>
              <span className="kicker">Coverage notes</span>
              <h2 className="h-section">The small print, up front.</h2>
            </div>
          </div>
          <div className="cellgrid cols-3x">
            {[
              [
                "Same-day",
                "Available across the North Side and Downtown if you book before 10am. Elsewhere it depends on route capacity that morning.",
              ],
              [
                "North Shore surcharge",
                "A flat $25 travel charge applies past Highland Park. It is shown in the quote before you confirm, never added later.",
              ],
              [
                "High-rise access",
                "We hold certificates of insurance with most major Chicago building managers. Send us the building and we handle the paperwork.",
              ],
              [
                "Parking",
                "Included in the price everywhere. We never bill you for a meter, a garage or a permit.",
              ],
              [
                "Outside the list",
                "Call us. If we can route a van efficiently we will take the work, and we add neighbourhoods most quarters.",
              ],
              [
                "Commercial radius",
                "Multi-site contracts run wider than residential — anywhere inside the Chicago metro is in scope.",
              ],
            ].map(([t, c]) => (
              <div key={t} className="cell cell-hover">
                <span className="cell-mark" aria-hidden="true" />
                <h3>{t}</h3>
                <p className="body" style={{ margin: 0 }}>
                  {c}
                </p>
              </div>
            ))}
          </div>
          <Certs />
        </div>
      </section>

      <CtaBlock headline="On the list?" sub="Book Thursday." />
    </>
  );
}
