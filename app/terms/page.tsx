import type { Metadata } from "next";
import { PageHeader, CtaBlock } from "@/components/Sections";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "Terms of service for Meridian Home Care cleaning bookings — pricing, cancellation, the re-clean guarantee, access, liability and insurance.",
};

export default function TermsPage() {
  return (
    <>
      <PageHeader
        kicker="Last updated 1 August 2026"
        title="Terms of service."
        lede="Written to be read. If anything below is unclear, call us and we will explain it rather than point you at a clause."
      />

      <section className="wrap section">
        <div className="prose">
          <h2>1. Who we are</h2>
          <p>
            {site.legalName}, a limited liability company registered in Illinois, trading
            as {site.brand}, of {site.address.street}, {site.address.city}{" "}
            {site.address.region} {site.address.postalCode}. {site.license}.{" "}
            {site.insurance}.
          </p>

          <h2>2. Booking and pricing</h2>
          <p>
            The price quoted at booking is a flat price for the scope described. It does
            not change afterwards unless you change the scope, or unless the property is
            materially different from what you told us — in which case we will call you
            before doing any additional work, and you may decline it.
          </p>
          <p>
            Prices shown on this site assume reasonable access, running water, working
            electricity and a property clear of hazardous material. Where a travel
            surcharge applies it is shown in the quote before you confirm.
          </p>

          <h2>3. Payment</h2>
          <p>
            No card is required to confirm a booking. We charge on completion of the
            visit. Commercial accounts may be invoiced on agreed terms. Late payment on
            invoiced accounts accrues interest at 1.5% per month.
          </p>

          <h2>4. Cancellation</h2>
          <p>
            Free up to 24 hours before the scheduled visit. Inside 24 hours we charge 50%
            of the visit price, because the crew is already scheduled and paid. If we
            cancel on you for any reason other than severe weather or a safety issue, the
            next visit is free.
          </p>
          <p>
            Recurring plans can be paused or cancelled at any time with no fee and no
            minimum term. Pauses hold your regular slot for up to eight weeks.
          </p>

          <h2>5. The re-clean guarantee</h2>
          <p>
            If any part of the work falls short of the checklist for the service you
            booked, tell us within 48 hours of the visit and we will return and re-clean
            that area at no charge. The guarantee covers re-cleaning; it is not a
            price-refund mechanism, and it does not apply where the shortfall is caused by
            conditions we flagged and you declined to address.
          </p>

          <h2>6. Access</h2>
          <p>
            Where you provide keys, codes or fobs, they are held under a signed access
            agreement and issued only to your assigned crew. You are responsible for
            telling us about alarms, pets, and anyone else who may be in the property. If
            our crew cannot gain access at the agreed time and waits more than 20 minutes,
            the visit is treated as a cancellation inside 24 hours.
          </p>

          <h2>7. What we will not do</h2>
          <ul>
            <li>Work at height beyond a two-step ladder, or outside above the second floor.</li>
            <li>Move furniture heavier than two people can lift safely.</li>
            <li>Handle biohazard, sharps, pest infestation, mould remediation or hoarding conditions.</li>
            <li>Clean where there is no running water, no power, or an unresolved safety hazard.</li>
            <li>Use client-supplied products we judge unsafe for the surface or the crew.</li>
          </ul>

          <h2>8. Damage and liability</h2>
          <p>
            We carry general liability insurance to $2M and a care, custody and control
            policy covering your contents. If we damage something, tell us within 48 hours
            and we will repair, replace or compensate. We are not liable for pre-existing
            damage, for wear revealed by cleaning, or for items that were already loose,
            unstable or improperly fixed. Our total liability for any single visit is
            limited to the insured amount.
          </p>
          <p>
            Nothing in these terms limits liability for death or personal injury caused by
            our negligence, or for anything else that cannot be limited by law.
          </p>

          <h2>9. Your staff, our staff</h2>
          <p>
            Our cleaners are our employees. If you wish to employ one directly within
            twelve months of their last visit to your property, a placement fee of $3,500
            applies. This exists to protect the training investment, not to trap anyone —
            call us and we will usually work something out.
          </p>

          <h2>10. Governing law</h2>
          <p>
            These terms are governed by the laws of the State of Illinois, and the courts
            of Cook County have exclusive jurisdiction over any dispute.
          </p>

          <h2>11. Changes</h2>
          <p>
            We may update these terms. The version that applies to your booking is the one
            published on the date you booked. Material changes affecting recurring plans
            are emailed to affected clients thirty days before taking effect.
          </p>
        </div>
      </section>

      <CtaBlock />
    </>
  );
}
