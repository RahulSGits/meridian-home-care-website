import type { Metadata } from "next";
import BeforeAfter from "@/components/BeforeAfter";
import Photo from "@/components/Photo";
import { PageHeader, CtaBlock } from "@/components/Sections";
import { gallery } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Untouched photographs from Meridian cleans across Chicago this quarter — kitchens, bathrooms, move-outs, short-let turnovers and post-construction dust extraction.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        kicker="Chicago, this quarter"
        title="The work."
        lede="Same lens, same light, no retouching. Every photograph below came off a real job sheet — the before/after pair at the bottom is ninety minutes apart."
      />

      <section className="wrap section">
        <div style={{ columns: "3 300px", columnGap: 2 }}>
          {gallery.map((g) => (
            <div key={g.id} style={{ breakInside: "avoid", marginBottom: 2 }}>
              <Photo seed={g.id + g.label} label={g.label} ratio={g.ratio} zoom showLabel />
            </div>
          ))}
        </div>
      </section>

      <section className="section-surface section-rule-t">
        <div className="wrap section">
          <BeforeAfter />
        </div>
      </section>

      <CtaBlock headline="Want yours like this?" sub="It takes thirty seconds." />
    </>
  );
}
