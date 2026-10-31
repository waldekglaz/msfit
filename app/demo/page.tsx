import { DemoFaq } from "@/components/demo/DemoFaq";
import { DemoFinal } from "@/components/demo/DemoFinal";
import { DemoFooter } from "@/components/demo/DemoFooter";
import { DemoHeader } from "@/components/demo/DemoHeader";
import { DemoHero } from "@/components/demo/DemoHero";
import { DemoOffer } from "@/components/demo/DemoOffer";
import { DemoPricing } from "@/components/demo/DemoPricing";
import { DemoSteps } from "@/components/demo/DemoSteps";
import { DemoTransformation } from "@/components/demo/DemoTransformation";
import { ForYou } from "@/components/demo/ForYou";
import { Statement } from "@/components/demo/Statement";
import { StickyCta } from "@/components/StickyCta";
import { demo } from "@/lib/data";

// Editorial redesign of the landing page (content: `demo` in lib/data.ts).
// Light and dark sections alternate; dark ones are inset rounded panels.
export default function DemoPage() {
  return (
    <>
      <DemoHeader />
      <main id="tresc">
        <DemoHero />
        <ForYou />
        <Statement />
        <DemoOffer />
        <DemoSteps />
        <DemoTransformation />
        <DemoPricing />
        <DemoFaq />
        <DemoFinal />
      </main>
      <DemoFooter />
      <StickyCta cta={demo.cta} tone="editorial" />
    </>
  );
}
