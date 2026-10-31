import { PosterFaq } from "@/components/demo2/PosterFaq";
import { PosterFinal } from "@/components/demo2/PosterFinal";
import { PosterFooter } from "@/components/demo2/PosterFooter";
import { PosterForYou } from "@/components/demo2/PosterForYou";
import { PosterHeader } from "@/components/demo2/PosterHeader";
import { PosterHero } from "@/components/demo2/PosterHero";
import { PosterOffer } from "@/components/demo2/PosterOffer";
import { PosterPricing } from "@/components/demo2/PosterPricing";
import { PosterStatement } from "@/components/demo2/PosterStatement";
import { PosterStats } from "@/components/demo2/PosterStats";
import { PosterSteps } from "@/components/demo2/PosterSteps";
import { PosterTransformation } from "@/components/demo2/PosterTransformation";
import { StickyCta } from "@/components/StickyCta";
import { demo } from "@/lib/data";

// Poster-campaign redesign of the landing page (copy: `demo` and `demo2`
// in lib/data.ts). Black and charcoal sections alternate for rhythm.
export default function PosterPage() {
  return (
    <>
      <PosterHeader />
      <main id="tresc">
        <PosterHero />
        <PosterStats />
        <PosterForYou />
        <PosterStatement />
        <PosterOffer />
        <PosterSteps />
        <PosterTransformation />
        <PosterPricing />
        <PosterFaq />
        <PosterFinal />
      </main>
      <PosterFooter />
      <StickyCta cta={demo.cta} tone="poster" />
    </>
  );
}
