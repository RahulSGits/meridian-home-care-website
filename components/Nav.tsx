"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site, nav } from "@/lib/site";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isCurrent = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href + "/"));

  return (
    <>
      <nav className="nav" aria-label="Primary">
        <Link href="/" className="nav-brand">
          <span className="nav-mark" aria-hidden="true" />
          {site.brand}
        </Link>

        <div className="nav-desktop">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isCurrent(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <a href={site.phoneHref} className="nav-phone">
            {site.phone}
          </a>
          <Link href="/book" className="btn btn-primary">
            Book a clean
          </Link>
        </div>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          <span aria-hidden="true" />
        </button>
      </nav>

      {open ? (
        <div className="nav-drawer" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="nav-drawer-head">
            <span className="nav-brand">
              <span className="nav-mark" aria-hidden="true" />
              {site.brand}
            </span>
            <button type="button" className="nav-close" onClick={close} aria-label="Close menu">
              ✕
            </button>
          </div>
          {/* Links close the drawer themselves — the pathname may not change
              (same-page link), so an effect on pathname would not fire. */}
          <div style={{ marginTop: 8 }}>
            <Link href="/" onClick={close}>
              Home
            </Link>
            {nav.map((item) => (
              <Link key={item.href} href={item.href} onClick={close}>
                {item.label}
              </Link>
            ))}
          </div>
          <div className="btn-row" style={{ marginTop: 28 }}>
            <Link href="/book" className="btn btn-primary btn-lg" onClick={close}>
              Book a clean
            </Link>
            <a href={site.phoneHref} className="btn btn-secondary btn-lg" onClick={close}>
              Call {site.phone}
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}
