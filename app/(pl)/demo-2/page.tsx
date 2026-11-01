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
import { DmText } from "@/components/demo2/ui";
import { PayhipDialog } from "@/components/PayhipDialog";
import { StickyCta } from "@/components/StickyCta";
import { demo, demo2, ids, ui } from "@/lib/data";

// Poster-campaign redesign of the landing page (copy: `demo` and `demo2`
// in lib/data.ts). Black and charcoal sections alternate for rhythm.
export default function PosterPage() {
  return (
    <>
      <PosterHeader nav={demo.nav} cta={demo.cta} ctaShort={demo.ctaShort} />
      <main id="tresc">
        <PosterHero
          lines={demo2.hero.lines}
          linesPink={demo2.pink.heroLines}
          lead={demo2.hero.lead}
          leadPink={demo2.pink.heroLead}
          primary={demo.cta}
          secondary={demo.hero.secondary}
          image={demo.hero.image}
          footnote={<DmText />}
        />
        <PosterStats stats={demo.stats} />
        <PosterForYou />
        <PosterStatement />
        <PosterOffer />
        <PosterSteps
          id="jak-to-dziala"
          title={demo.steps.title}
          pinkWords={demo2.pink.steps}
          intro={demo.steps.intro}
          steps={demo.steps.items}
        />
        <PosterTransformation />
        <PosterPricing />
        <PosterFaq
          title={demo.faq.title}
          pinkWords={demo2.pink.faq}
          intro={demo.faq.intro}
          items={demo.faq.items}
          contact={{ label: "Napisz na Instagramie", href: demo.dm.href, external: true }}
        />
        <PosterFinal />
      </main>
      <PosterFooter cta={demo.cta} backLinks={demo2.backLinks} />
      <StickyCta cta={demo.cta} tone="poster" contactId={ids.contact} newTabLabel={ui.newTab} />
      <PayhipDialog tone="poster" {...demo.payhip} newTabLabel={ui.newTab} />
    </>
  );
}
