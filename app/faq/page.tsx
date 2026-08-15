import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";
import { PageHeader, CtaBlock, Process } from "@/components/Sections";
import { faqs } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Access, pets, cancellation, insurance, supplies, tipping and the re-clean guarantee — the questions Chicago clients actually ask, answered plainly.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader
        kicker="Answers"
        title={
          <>
            Questions,
            <br />
            answered plainly.
          </>
        }
        lede={`Everything below is the answer we would give on the phone. If yours is not here, call ${site.phone} — a human answers, ${site.hours}.`}
      />

      <section className="wrap section">
        <FaqAccordion />
      </section>

      <Process />

      <section className="section-rule-t">
        <div className="wrap section">
          <div className="split-head" data-rv>
            <h2 className="h-section">Still need a person.</h2>
          </div>
          <div className="cellgrid cols-3x">
            {[
              ["Call us", site.phone, site.phoneHref, `Seven days, ${site.hours}`],
              ["Email us", site.email, `mailto:${site.email}`, "Replies inside one working day"],
              ["Book online", "Instant price", "/book", "No phone call, no card up front"],
            ].map(([label, value, href, note]) => (
              <div key={label} className="cell cell-hover">
                <span className="cell-mark" aria-hidden="true" />
                <p className="kicker kicker-muted" style={{ margin: "0 0 10px" }}>
                  {label}
                </p>
                {href.startsWith("/") ? (
                  <Link
                    href={href}
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 800,
                      fontSize: 22,
                      textDecoration: "none",
                    }}
                  >
                    {value}
                  </Link>
                ) : (
                  <a
                    href={href}
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 800,
                      fontSize: 22,
                      textDecoration: "none",
                    }}
                  >
                    {value}
                  </a>
                )}
                <p className="body" style={{ margin: "10px 0 0" }}>
                  {note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBlock headline="Answered? Good." sub="Book Thursday." />
    </>
  );
}
