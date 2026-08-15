import type { Metadata } from "next";
import Link from "next/link";
import Photo from "@/components/Photo";
import { PageHeader, Process, CtaBlock } from "@/components/Sections";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Twelve cleaning services for Chicago homes and businesses — house, deep, move-in, move-out, post-construction, carpet, windows, Airbnb turnover, office, commercial, hospitality and medical.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        kicker="Twelve services"
        title={
          <>
            Everything, done
            <br />
            to one standard.
          </>
        }
        lede="Every service runs off a written, room-by-room checklist your cleaner signs before leaving the property. Open any one to read it in full."
      >
        <div className="btn-row">
          <Link href="/book" className="btn btn-primary btn-lg">
            Get an instant price
          </Link>
          <Link href="/pricing" className="btn btn-secondary btn-lg">
            See plans
          </Link>
        </div>
      </PageHeader>

      <section className="wrap section">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(320px,100%),1fr))",
            gap: 2,
          }}
        >
          {services.map((s, i) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="service-card"
              data-rv
            >
              <Photo seed={`svc-${s.slug}`} label={s.photo} ratio="16 / 10" zoom />
              <div className="service-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    gap: 12,
                  }}
                >
                  <span className="acc-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="acc-from">
                    {s.from ? `from $${s.from.toLocaleString("en-US")}` : "from quote"}
                  </span>
                </div>
                <h2 style={{ fontSize: "clamp(22px,2.2vw,28px)", margin: "12px 0 10px" }}>
                  {s.name}
                </h2>
                <p className="body" style={{ margin: "0 0 16px" }}>
                  {s.copy}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
                  {s.items.map((item) => (
                    <span key={item} className="tag tag-neutral">
                      {item}
                    </span>
                  ))}
                </div>
                <span
                  className="service-card-meta"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 12,
                    paddingTop: 14,
                    borderTop: "2px solid var(--color-divider)",
                    fontSize: 13,
                  }}
                >
                  <span className="text-muted">Typical duration {s.duration}</span>
                  <span
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 800,
                      color: "var(--color-accent)",
                    }}
                  >
                    Read the checklist →
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Process />
      <CtaBlock headline="Not sure which one?" sub="Call us, we'll say." />
    </>
  );
}
