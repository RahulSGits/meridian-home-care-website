import type { Metadata } from "next";
import Link from "next/link";
import PricingPlans from "@/components/PricingPlans";
import FaqAccordion from "@/components/FaqAccordion";
import { PageHeader, CtaBlock, Reasons } from "@/components/Sections";
import { plans, planMatrix, services, extrasList } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Flat, published pricing for Chicago cleaning. Three plans, twelve services, six add-ons — the number you see before booking is the number on the invoice.",
};

export default function PricingPage() {
  return (
    <>
      <PageHeader
        kicker="Plans & prices"
        title={
          <>
            The number you see
            <br />
            is the number you pay.
          </>
        }
        lede="No hourly overruns, no surprise supplies line, no tipping expected. Every price on this page is what lands on the invoice."
      >
        <div className="btn-row">
          <Link href="/book" className="btn btn-primary btn-lg">
            Price your own home
          </Link>
          <a href={site.phoneHref} className="btn btn-secondary btn-lg">
            Call {site.phone}
          </a>
        </div>
      </PageHeader>

      <section className="wrap section">
        <PricingPlans />
      </section>

      {/* ── Comparison matrix ───────────────────────────────────────────── */}
      <section className="section-surface section-rule-t">
        <div className="wrap section">
          <div className="split-head" data-rv>
            <div>
              <span className="kicker">Line by line</span>
              <h2 className="h-section">What each plan includes.</h2>
            </div>
            <p className="kicker kicker-muted" style={{ margin: 0, maxWidth: "30ch" }}>
              Based on a home up to 1,800 sq ft
            </p>
          </div>

          <div className="table-scroll">
            <table className="compare">
              <thead>
                <tr>
                  <th scope="col">Included</th>
                  {plans.map((p) => (
                    <th key={p.name} scope="col">
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {planMatrix.map((row) => (
                  <tr key={row.label}>
                    <th scope="row" style={{ fontWeight: 400, fontFamily: "var(--font-body)" }}>
                      {row.label}
                    </th>
                    {row.on.map((yes, i) => (
                      <td key={i}>
                        <span className={yes ? "compare-yes" : "compare-no"} aria-hidden="true" />
                        <span className="sr-only">
                          {yes ? "Included" : "Not included"} in {plans[i].name}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Per-service starting prices ─────────────────────────────────── */}
      <section className="wrap section">
        <div className="split-head" data-rv>
          <div>
            <span className="kicker">One-off services</span>
            <h2 className="h-section">Starting prices, published.</h2>
          </div>
          <Link href="/services" className="btn btn-secondary">
            All service detail →
          </Link>
        </div>

        <div className="table-scroll">
          <table className="compare">
            <thead>
              <tr>
                <th scope="col">Service</th>
                <th scope="col" style={{ width: 140 }}>
                  From
                </th>
                <th scope="col" style={{ width: 140 }}>
                  Duration
                </th>
              </tr>
            </thead>
            <tbody>
              {services.map((s) => (
                <tr key={s.slug}>
                  <th scope="row" style={{ fontWeight: 400, fontFamily: "var(--font-body)" }}>
                    <Link href={`/services/${s.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
                      {s.name}
                    </Link>
                  </th>
                  <td
                    className="tnum"
                    style={{ fontFamily: "var(--font-heading)", fontWeight: 800 }}
                  >
                    {s.from ? `$${s.from.toLocaleString("en-US")}` : "Quote"}
                  </td>
                  <td className="text-muted">{s.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Add-ons ─────────────────────────────────────────────────────── */}
      <section className="section-rule-t">
        <div className="wrap section">
          <div className="split-head" data-rv>
            <div>
              <span className="kicker">Add-ons</span>
              <h2 className="h-section">Bolt anything on.</h2>
            </div>
            <p className="kicker kicker-muted" style={{ margin: 0, maxWidth: "32ch" }}>
              Same flat rate whichever plan you are on
            </p>
          </div>
          <div className="cellgrid cols-3x">
            {extrasList.map(([label, price]) => (
              <div key={label} className="cell cell-hover">
                <p
                  className="tnum"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 800,
                    fontSize: 34,
                    lineHeight: 1,
                    color: "var(--color-accent)",
                    margin: "0 0 12px",
                  }}
                >
                  +${price}
                </p>
                <h3 style={{ fontSize: 19, margin: 0 }}>{label}</h3>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(min(260px,100%),1fr))",
              gap: 24,
              marginTop: "clamp(36px,4vw,56px)",
              paddingTop: 28,
              borderTop: "2px solid var(--color-divider)",
            }}
          >
            {[
              ["Recurring discount", "Up to 20% off every visit on a weekly plan, applied automatically."],
              ["No card up front", "Nothing is charged until the job is complete and you have looked at it."],
              ["Free cancellation", "Up to 24 hours before the visit. Inside 24h it is 50% of the visit price."],
              ["No tipping", "Our cleaners are W-2 and paid above market. The price is complete."],
            ].map(([t, c]) => (
              <div key={t}>
                <h3 style={{ fontSize: 17, margin: "0 0 8px" }}>{t}</h3>
                <p className="body" style={{ margin: 0 }}>
                  {c}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Reasons />

      <section className="section-rule-t section-surface">
        <div className="wrap section">
          <FaqAccordion />
        </div>
      </section>

      <CtaBlock headline="Flat price, no call." sub="See yours in 30 seconds." />
    </>
  );
}
