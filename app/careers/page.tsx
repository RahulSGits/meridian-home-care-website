import type { Metadata } from "next";
import Photo from "@/components/Photo";
import { PageHeader, CtaBlock, Certs } from "@/components/Sections";
import { jobs, benefits } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Meridian hires W-2 cleaners in Chicago at $24–36/hr with health cover, paid training, paid travel time and all equipment supplied. Never 1099, never a gig app.",
};

export default function CareersPage() {
  return (
    <>
      <PageHeader
        kicker="We hire continuously"
        title={
          <>
            W-2. Above market.
            <br />
            Never a gig app.
          </>
        }
        lede="Every cleaner at Meridian is an employee with health cover, paid travel time between jobs, and equipment we buy. It costs us more than the contractor model and it is why the work is good."
      >
        <div className="btn-row">
          <a href={`mailto:${site.email}?subject=Application`} className="btn btn-primary btn-lg">
            Apply by email
          </a>
          <a href={site.phoneHref} className="btn btn-secondary btn-lg">
            Call {site.phone}
          </a>
        </div>
      </PageHeader>

      <section className="wrap section">
        <div className="split-head" data-rv>
          <div>
            <span className="kicker">Open roles</span>
            <h2 className="h-section">Four vacancies, today.</h2>
          </div>
          <p className="kicker kicker-muted" style={{ margin: 0, maxWidth: "30ch" }}>
            Amara reads every application
          </p>
        </div>

        <div className="acc">
          {jobs.map((job, i) => (
            <div key={job.title} className="acc-item">
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit,minmax(min(240px,100%),1fr))",
                  gap: "clamp(16px,3vw,40px)",
                  padding: "clamp(24px,3vw,36px) 4px",
                  alignItems: "start",
                }}
                data-rv
              >
                <div>
                  <span className="acc-num">{String(i + 1).padStart(2, "0")}</span>
                  <h3
                    style={{
                      fontSize: "clamp(22px,2.2vw,28px)",
                      letterSpacing: "-0.01em",
                      margin: "10px 0 12px",
                    }}
                  >
                    {job.title}
                  </h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    <span className="tag tag-accent">{job.type}</span>
                    <span className="tag tag-neutral">{job.location}</span>
                  </div>
                </div>
                <p className="body" style={{ margin: 0, maxWidth: "40ch" }}>
                  {job.copy}
                </p>
                <div>
                  <p
                    className="tnum"
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 800,
                      fontSize: 24,
                      margin: "0 0 12px",
                    }}
                  >
                    {job.pay}
                  </p>
                  <a
                    href={`mailto:${site.email}?subject=${encodeURIComponent(
                      `Application — ${job.title}`,
                    )}`}
                    className="btn btn-primary"
                  >
                    Apply for this role
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-surface section-rule-t">
        <div className="wrap section">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(min(320px,100%),1fr))",
              gap: "clamp(28px,4vw,64px)",
              alignItems: "center",
            }}
          >
            <div data-rvx>
              <span className="kicker">What you get</span>
              <h2 className="h-section" style={{ marginBottom: 24 }}>
                The whole list,
                <br />
                no asterisks.
              </h2>
              <div>
                {benefits.map((b) => (
                  <div key={b} className="feature-row" style={{ fontSize: 15, padding: "7px 0" }}>
                    <span className="feature-dot" aria-hidden="true" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
            <Photo
              seed="careers-crew-portrait"
              label="A Meridian crew before a morning route"
              ratio="4 / 5"
            />
          </div>
          <Certs />
        </div>
      </section>

      <section className="wrap section">
        <div className="split-head" data-rv>
          <div>
            <span className="kicker">How hiring works</span>
            <h2 className="h-section">Four steps, two weeks.</h2>
          </div>
        </div>
        <div className="cellgrid cols-4">
          {[
            ["01", "Apply", "Email us, or call. No portal, no personality test, no one-way video interview."],
            ["02", "Talk", "A twenty-minute call with Amara about your experience and what you want from the work."],
            ["03", "Work a shift", "A paid trial shift alongside a crew lead. You see the job, the job sees you."],
            ["04", "Train", "Six weeks paid and supervised before your first solo visit, with certification fees covered."],
          ].map(([n, title, copy]) => (
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
      </section>

      <CtaBlock headline="Want the job?" sub="Send one email." />
    </>
  );
}
