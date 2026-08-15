import Link from "next/link";
import { services } from "@/lib/content";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <>
      <section className="wrap" style={{ paddingBlock: "clamp(56px,8vw,120px)" }}>
        <span className="kicker">Error 404</span>
        <h1 className="display">
          <span style={{ display: "block" }}>That page</span>
          <span style={{ display: "block" }}>got cleaned up.</span>
        </h1>
        <p className="lede" style={{ margin: "28px 0 0" }}>
          Nothing here. The pages people usually want are below, or call{" "}
          <a href={site.phoneHref}>{site.phone}</a> and a human will point you at it.
        </p>
        <div className="btn-row" style={{ marginTop: 32 }}>
          <Link href="/" className="btn btn-primary btn-lg">
            Back to the homepage
          </Link>
          <Link href="/book" className="btn btn-secondary btn-lg">
            Get an instant price
          </Link>
        </div>
      </section>

      <section className="wrap section section-rule-t">
        <div className="split-head">
          <h2 className="h-section">Our twelve services.</h2>
        </div>
        <div className="cellgrid cols-3x">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="cell cell-hover"
              style={{ textDecoration: "none", color: "inherit", display: "block" }}
            >
              <span className="cell-mark" aria-hidden="true" />
              <h3 style={{ fontSize: 20 }}>{s.name}</h3>
              <p className="text-muted" style={{ fontSize: 13, margin: 0 }}>
                {s.from ? `From $${s.from.toLocaleString("en-US")}` : "Scoped quote"} ·{" "}
                {s.duration}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
