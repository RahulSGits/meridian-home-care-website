import type { Metadata } from "next";
import { PageHeader, CtaBlock } from "@/components/Sections";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Accessibility",
  description:
    "Meridian Home Care's accessibility commitment for this website and for cleaning services in Chicago, including how to report a barrier.",
};

export default function AccessibilityPage() {
  return (
    <>
      <PageHeader
        kicker="Last updated 1 August 2026"
        title="Accessibility."
        lede="We aim to meet WCAG 2.2 Level AA across this site, and to make booking a clean possible by whatever route works for you."
      />

      <section className="wrap section">
        <div className="prose">
          <h2>This website</h2>
          <p>
            The site is built to WCAG 2.2 Level AA as a target. In practice that means:
          </p>
          <ul>
            <li>Every interactive control is reachable and operable by keyboard alone.</li>
            <li>A visible focus indicator on every focusable element, at 2px and full contrast.</li>
            <li>A skip link to the main content as the first item in the tab order.</li>
            <li>Text contrast of at least 4.5:1 against its background throughout.</li>
            <li>
              Motion — the scroll reveals and the before/after slider — disabled entirely
              when your system asks for reduced motion.
            </li>
            <li>
              The before/after comparison offers a slider control as well as the drag
              interaction, plus explicit &ldquo;show before&rdquo; and &ldquo;show
              after&rdquo; buttons.
            </li>
            <li>Form fields carry persistent visible labels, never placeholder-only labels.</li>
            <li>Page structure uses real headings in order, and landmarks for navigation and content.</li>
          </ul>

          <h2>Known limitations</h2>
          <p>
            The masonry gallery relies on CSS columns, which reorders content visually
            relative to the source order. The reading order remains logical, but the
            visual sequence differs. We are reworking this to a grid.
          </p>
          <p>
            Photography on the site currently uses generated placeholder imagery pending a
            shoot; each carries a descriptive label rather than a full alternative text
            description of a real scene.
          </p>

          <h2>Booking by other means</h2>
          <p>
            If the online quote does not work for you, call{" "}
            <a href={site.phoneHref}>{site.phone}</a> between 7am and 9pm and a scheduler
            will price and book the same visit on the phone at the same rate. We also take
            bookings by email at <a href={`mailto:${site.email}`}>{site.email}</a>, and by
            text message to the same number.
          </p>

          <h2>Accessibility of the service itself</h2>
          <p>
            Tell us in the booking notes and we will accommodate it: fragrance-free
            protocols for chemical sensitivity and asthma, quiet working for sensory needs,
            advance notice of exactly who is arriving with a photograph, working around a
            fixed routine, and leaving specific items or areas untouched. None of it
            changes the price.
          </p>

          <h2>Reporting a barrier</h2>
          <p>
            If you hit something on this site or in our service that does not work for you,
            email <a href={`mailto:${site.email}`}>{site.email}</a> with the word
            &ldquo;accessibility&rdquo; in the subject. We aim to acknowledge within two
            working days and to give you a fix or a workaround within ten.
          </p>
        </div>
      </section>

      <CtaBlock />
    </>
  );
}
