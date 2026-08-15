import Link from "next/link";
import { site, footerCols, legalLinks } from "@/lib/site";
import Newsletter from "./Newsletter";

export default function Footer() {
  return (
    <footer className="wrap" style={{ padding: "clamp(40px,5vw,72px) var(--gutter) 32px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(200px,100%),1fr))",
          gap: "clamp(24px,4vw,56px)",
          paddingBottom: 40,
          borderBottom: "2px solid var(--color-divider)",
        }}
      >
        <div>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontFamily: "var(--font-heading)",
              fontWeight: 800,
              fontSize: 20,
              letterSpacing: "-0.02em",
              marginBottom: 16,
            }}
          >
            <span className="nav-mark" aria-hidden="true" />
            {site.brand}
          </span>
          <p
            style={{
              fontSize: 14,
              lineHeight: "24px",
              margin: 0,
              color: "color-mix(in srgb, var(--color-text) 70%, transparent)",
            }}
          >
            {site.address.street}, {site.address.city} {site.address.region}{" "}
            {site.address.postalCode}
            <br />
            <a href={site.phoneHref}>{site.phone}</a>
            <br />
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <br />
            <span className="text-muted">{site.hours}</span>
          </p>
        </div>

        {footerCols.map((col) => (
          <div key={col.title}>
            <p
              style={{
                fontSize: 11,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "color-mix(in srgb, var(--color-text) 55%, transparent)",
                margin: "0 0 14px",
              }}
            >
              {col.title}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {col.links.map((l) => (
                <Link
                  key={l.href + l.label}
                  href={l.href}
                  style={{ fontSize: 14, color: "inherit", textDecoration: "none" }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        ))}

        <div>
          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "color-mix(in srgb, var(--color-text) 55%, transparent)",
              margin: "0 0 14px",
            }}
          >
            Seasonal offers
          </p>
          <Newsletter />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px 24px",
          justifyContent: "space-between",
          paddingTop: 24,
          fontSize: 12.5,
          color: "color-mix(in srgb, var(--color-text) 60%, transparent)",
        }}
      >
        <span>
          © {new Date().getFullYear()} {site.legalName} · {site.license} ·{" "}
          {site.insurance}
        </span>
        <span style={{ display: "flex", gap: 16 }}>
          {legalLinks.map((l) => (
            <Link key={l.href} href={l.href} style={{ color: "inherit", textDecoration: "none" }}>
              {l.label}
            </Link>
          ))}
        </span>
      </div>
    </footer>
  );
}
