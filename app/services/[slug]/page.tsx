import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Photo from "@/components/Photo";
import FaqAccordion from "@/components/FaqAccordion";
import { CtaBlock, Process, Certs } from "@/components/Sections";
import { services, serviceBySlug } from "@/lib/content";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) return { title: "Service not found" };
  return {
    title: service.name,
    description: service.copy,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.name} · ${site.brand}`,
      description: service.copy,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();

  const index = services.findIndex((s) => s.slug === slug);
  const next = services[(index + 1) % services.length];
  const prev = services[(index - 1 + services.length) % services.length];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.copy,
    serviceType: service.name,
    provider: { "@type": "LocalBusiness", name: site.legalName, telephone: site.phone },
    areaServed: { "@type": "City", name: "Chicago" },
    ...(service.from
      ? {
          offers: {
            "@type": "Offer",
            price: service.from,
            priceCurrency: "USD",
            priceSpecification: {
              "@type": "PriceSpecification",
              minPrice: service.from,
              priceCurrency: "USD",
            },
          },
        }
      : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="section-rule-b">
        <div
          className="wrap"
          style={{ paddingBlock: "clamp(32px,4vw,56px) clamp(32px,4vw,56px)" }}
        >
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/services">Services</Link>
            <span aria-hidden="true">/</span>
            <span>{service.name}</span>
          </nav>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(min(340px,100%),1fr))",
              gap: "clamp(28px,4vw,72px)",
              alignItems: "end",
            }}
          >
            <div data-rv>
              <span className="kicker">
                {String(index + 1).padStart(2, "0")} ·{" "}
                {service.from
                  ? `From $${service.from.toLocaleString("en-US")}`
                  : "Quoted per site"}{" "}
                · {service.duration}
              </span>
              <h1 className="h-page">{service.name}</h1>
              <p className="lede" style={{ margin: "24px 0 0" }}>
                {service.intro}
              </p>
              <div className="btn-row" style={{ marginTop: 28 }}>
                <Link href="/book" className="btn btn-primary btn-lg">
                  {service.from ? "Get an instant price" : "Request a scope"}
                </Link>
                <a href={site.phoneHref} className="btn btn-secondary btn-lg">
                  Call {site.phone}
                </a>
              </div>
            </div>

            <Photo seed={`svc-hero-${service.slug}`} label={service.photo} ratio="4 / 3" />
          </div>
        </div>
      </header>

      {/* ── At a glance ─────────────────────────────────────────────────── */}
      <section className="wrap section-tight">
        <dl className="deflist">
          <div>
            <dt>Starting price</dt>
            <dd className="tnum">
              {service.from ? `$${service.from.toLocaleString("en-US")}` : "Scoped quote"}
            </dd>
          </div>
          <div>
            <dt>Typical duration</dt>
            <dd>{service.duration}</dd>
          </div>
          <div>
            <dt>Team size</dt>
            <dd>2 cleaners, 1 lead</dd>
          </div>
          <div>
            <dt>Guarantee</dt>
            <dd>Free re-clean in 48h</dd>
          </div>
        </dl>
      </section>

      {/* ── Who it is for ───────────────────────────────────────────────── */}
      <section className="section-surface section-rule-t">
        <div className="wrap section">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(min(300px,100%),1fr))",
              gap: "clamp(28px,4vw,72px)",
            }}
          >
            <div data-rvx>
              <span className="kicker">Who books it</span>
              <h2 className="h-sub" style={{ maxWidth: "26ch" }}>
                {service.forWho}
              </h2>
            </div>
            <div>
              <p className="kicker kicker-muted">Included as standard</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
                {service.items.map((item) => (
                  <span key={item} className="tag tag-accent" style={{ fontSize: 13, padding: "6px 12px" }}>
                    {item}
                  </span>
                ))}
              </div>
              <p className="kicker kicker-muted">Not included</p>
              <ul style={{ margin: 0, paddingLeft: 20 }}>
                {service.notIncluded.map((n) => (
                  <li
                    key={n}
                    style={{
                      fontSize: 14.5,
                      lineHeight: "25px",
                      marginBottom: 6,
                      color: "color-mix(in srgb, var(--color-text) 78%, transparent)",
                    }}
                  >
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── The checklist ───────────────────────────────────────────────── */}
      <section className="wrap section">
        <div className="split-head" data-rv>
          <div>
            <span className="kicker">The checklist</span>
            <h2 className="h-section">
              Exactly what
              <br />
              gets done.
            </h2>
          </div>
          <p className="kicker kicker-muted" style={{ margin: 0, maxWidth: "34ch" }}>
            Signed off by the lead cleaner before they leave
          </p>
        </div>

        <div className="checklist">
          {service.checklist.map((group) => (
            <div key={group.room} className="checklist-col" data-rv>
              <h3>{group.room}</h3>
              <ul>
                {group.tasks.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Certs />
      </section>

      <Process />

      {/* ── Other services ──────────────────────────────────────────────── */}
      <section className="wrap section">
        <div className="split-head" data-rv>
          <h2 className="h-section">Also worth booking.</h2>
          <Link href="/services" className="btn btn-secondary">
            All twelve →
          </Link>
        </div>
        <div className="cellgrid cols-2">
          {[prev, next].map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="cell cell-hover"
              style={{ textDecoration: "none", color: "inherit", display: "block" }}
            >
              <span className="cell-mark" aria-hidden="true" />
              <h3 style={{ fontSize: 24 }}>{s.name}</h3>
              <p className="body" style={{ margin: "0 0 14px" }}>
                {s.copy}
              </p>
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 800,
                  fontSize: 13,
                  color: "var(--color-accent)",
                }}
              >
                {s.from ? `From $${s.from.toLocaleString("en-US")}` : "Scoped quote"} →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-rule-t section-surface">
        <div className="wrap section">
          <FaqAccordion />
        </div>
      </section>

      <CtaBlock headline={`Book a ${service.name.toLowerCase()}.`} sub="Thursday works." />
    </>
  );
}
