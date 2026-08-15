import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import Photo from "@/components/Photo";
import { PageHeader, CtaBlock, Certs } from "@/components/Sections";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Call, email or message Meridian Home Care in Chicago. A human answers 7am–9pm, seven days. Commercial and multi-site work is scoped by phone.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        kicker="Get in touch"
        title={
          <>
            A human answers.
            <br />
            Seven days.
          </>
        }
        lede={`Call ${site.phone} between 7am and 9pm and you speak to a scheduler, not a queue. For a price without talking to anyone, the instant quote takes about thirty seconds.`}
      >
        <div className="btn-row">
          <a href={site.phoneHref} className="btn btn-primary btn-lg">
            Call {site.phone}
          </a>
          <Link href="/book" className="btn btn-secondary btn-lg">
            Instant price instead
          </Link>
        </div>
      </PageHeader>

      <section className="wrap section-tight">
        <dl className="deflist">
          <div>
            <dt>Phone</dt>
            <dd>
              <a href={site.phoneHref} style={{ textDecoration: "none" }}>
                {site.phone}
              </a>
            </dd>
          </div>
          <div>
            <dt>Email</dt>
            <dd>
              <a href={`mailto:${site.email}`} style={{ textDecoration: "none", fontSize: 16 }}>
                {site.email}
              </a>
            </dd>
          </div>
          <div>
            <dt>Office</dt>
            <dd style={{ fontSize: 16 }}>
              {site.address.street}
              <br />
              {site.address.city} {site.address.region} {site.address.postalCode}
            </dd>
          </div>
          <div>
            <dt>Hours</dt>
            <dd style={{ fontSize: 16 }}>{site.hours}</dd>
          </div>
        </dl>
      </section>

      <section className="wrap section">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(320px,100%),1fr))",
            gap: "clamp(28px,4vw,64px)",
            alignItems: "start",
          }}
        >
          <div data-rvx>
            <span className="kicker">Send a message</span>
            <h2 className="h-section" style={{ marginBottom: 20 }}>
              Tell us what
              <br />
              you need.
            </h2>
            <p className="body-lg" style={{ marginBottom: 28 }}>
              Replies land inside one working day, usually the same morning. For
              commercial, hospitality or clinical work, a scoping call comes first — say
              so in the message and we will call you.
            </p>
            <Photo
              seed="contact-fulton-market-office"
              label="Meridian office, Fulton Market"
              ratio="4 / 3"
            />
          </div>

          <ContactForm />
        </div>
      </section>

      <section className="section-surface section-rule-t">
        <div className="wrap section">
          <div className="split-head" data-rv>
            <div>
              <span className="kicker">Other reasons to call</span>
              <h2 className="h-section">Who you get.</h2>
            </div>
          </div>
          <div className="cellgrid cols-3x">
            {[
              [
                "New bookings",
                "Any scheduler can price and book a residential clean on the call, including same-day if it is before 10am.",
              ],
              [
                "Existing clients",
                "Changes, pauses and re-clean requests go straight to your crew lead. No ticket, no queue.",
              ],
              [
                "Commercial & multi-site",
                "Piotr handles scoping, site surveys and contract terms directly. Ask for him by name.",
              ],
              [
                "Careers",
                "We hire continuously for W-2 cleaning roles across Chicago. Amara reads every application.",
              ],
              [
                "Press & partnerships",
                "Short-let managers, realtors and contractors — we run referral terms rather than a commission model.",
              ],
              [
                "Complaints",
                "Say the word 'complaint' and it is escalated the same day. Our re-clean rate is published every quarter.",
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

      <CtaBlock headline="Or skip the call." sub="Price it yourself." />
    </>
  );
}
