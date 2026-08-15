import type { Metadata } from "next";
import QuoteBuilder from "@/components/QuoteBuilder";
import { PageHeader, Process, Certs, CtaBlock } from "@/components/Sections";
import FaqAccordion from "@/components/FaqAccordion";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a clean",
  description:
    "Price and book a Chicago cleaning in about thirty seconds. Flat price shown before you confirm, no card until the job is done, free cancellation up to 24 hours before.",
};

export default function BookPage() {
  return (
    <>
      <PageHeader
        kicker="Instant quote · No phone call"
        title={
          <>
            Book in
            <br />
            thirty seconds.
          </>
        }
        lede="Set your place, your day and anything extra. The price updates as you go, and nothing is charged until the job is done."
      >
        <Certs bordered={false} />
      </PageHeader>

      <section className="wrap section">
        <QuoteBuilder />
      </section>

      <Process />

      <section className="wrap section">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(260px,100%),1fr))",
            gap: 32,
          }}
        >
          {[
            ["No card until it's done", "You confirm the booking without payment details. We charge after the visit, once you have had a chance to look."],
            ["Free cancellation", `Up to 24 hours before. Inside that window it is 50% of the visit price, because the crew is already scheduled and paid.`],
            ["Prefer to talk?", `Call ${site.phone} — a human answers, ${site.hours}. Commercial and multi-site work is always scoped by phone first.`],
          ].map(([t, c]) => (
            <div key={t} data-rv>
              <span className="cell-mark" aria-hidden="true" />
              <h2 style={{ fontSize: 21, margin: "0 0 10px" }}>{t}</h2>
              <p className="body" style={{ margin: 0 }}>
                {c}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-rule-t section-surface">
        <div className="wrap section">
          <FaqAccordion />
        </div>
      </section>

      <CtaBlock headline="Still deciding?" sub="We'll hold Thursday." />
    </>
  );
}
