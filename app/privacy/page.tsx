import type { Metadata } from "next";
import { PageHeader, CtaBlock } from "@/components/Sections";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How Meridian Home Care collects, uses and retains personal information for cleaning bookings in Chicago.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        kicker="Last updated 1 August 2026"
        title="Privacy notice."
        lede="The short version: we collect what we need to clean your home and bill you for it, we keep it as briefly as the law allows, and we do not sell it to anyone."
      />

      <section className="wrap section">
        <div className="prose">
          <h2>What we collect</h2>
          <p>
            When you book, we collect your name, contact details, service address, the
            details of the property relevant to pricing, your access arrangements, and any
            notes you give us about pets, allergies or products.
          </p>
          <p>
            When you pay, our payment processor collects your card or bank details
            directly. {site.legalName} never stores full card numbers on its own systems.
          </p>
          <p>
            When you use this website, we collect standard server logs and basic analytics
            — pages viewed, approximate region, referring site. We do not run advertising
            trackers or sell audience data.
          </p>

          <h2>Why we collect it</h2>
          <ul>
            <li>To schedule, route and carry out the cleaning you booked.</li>
            <li>To let your assigned cleaner into the property as you have arranged.</li>
            <li>To take payment and issue invoices and receipts.</li>
            <li>To answer you when you contact us, and to resolve complaints.</li>
            <li>To meet our legal, insurance and tax obligations.</li>
            <li>
              To send you seasonal offers, but only if you asked for them — and every one
              carries a one-click unsubscribe.
            </li>
          </ul>

          <h2>Photographs</h2>
          <p>
            Several of our services produce a photo record — move-out cleans, short-let
            turnovers and post-construction work. Those photographs are taken for your
            benefit and are shared with you and, where relevant, your landlord or property
            manager. We do not publish photographs of a client property in marketing
            without written permission, and we never photograph personal effects,
            documents or people.
          </p>

          <h2>Access and keys</h2>
          <p>
            Where you give us keyed or coded access, the credential is held under a signed
            access agreement, stored in a locked key register, and issued only to the crew
            assigned to your property. Every entry and exit is logged. Credentials are
            returned or destroyed within seven days of a plan ending.
          </p>

          <h2>Who we share it with</h2>
          <p>
            Our payment processor, our scheduling and accounting software providers, and
            our insurers where a claim arises. Each is bound by contract to use the data
            only to provide their service to us. We do not sell personal information, and
            we do not share it for anyone else&apos;s marketing.
          </p>

          <h2>How long we keep it</h2>
          <p>
            Booking and invoice records are retained for seven years to meet tax
            requirements. Job photographs are retained for twelve months. Access
            credentials are destroyed within seven days of a plan ending. Marketing
            contact details are deleted as soon as you unsubscribe.
          </p>

          <h2>Your rights</h2>
          <p>
            You can ask us for a copy of what we hold about you, ask us to correct it, or
            ask us to delete it where we are not required to keep it. Email{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a> and we will respond inside
            thirty days. Illinois residents also have rights under the Biometric
            Information Privacy Act — we do not collect biometric information of any kind.
          </p>

          <h2>Contact</h2>
          <p>
            {site.legalName}, {site.address.street}, {site.address.city}{" "}
            {site.address.region} {site.address.postalCode}.{" "}
            <a href={site.phoneHref}>{site.phone}</a> ·{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </div>
      </section>

      <CtaBlock />
    </>
  );
}
