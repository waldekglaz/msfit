import { D3About } from "@/components/demo3/D3About";
import { D3Final } from "@/components/demo3/D3Final";
import { D3Offer } from "@/components/demo3/D3Offer";
import { D3Problem } from "@/components/demo3/D3Problem";
import { D3Products } from "@/components/demo3/D3Products";
import { D3Testimonials } from "@/components/demo3/D3Testimonials";
import { D3Transformations } from "@/components/demo3/D3Transformations";
import { PosterFaq } from "@/components/demo2/PosterFaq";
import { PosterFooter } from "@/components/demo2/PosterFooter";
import { PosterHeader } from "@/components/demo2/PosterHeader";
import { PosterHero } from "@/components/demo2/PosterHero";
import { PosterStats } from "@/components/demo2/PosterStats";
import { PosterSteps } from "@/components/demo2/PosterSteps";
import { PayhipDialog } from "@/components/PayhipDialog";
import { StickyCta } from "@/components/StickyCta";
import { applyCta, demo, demo3, faq, hero, howIWork, ids, nav, ui } from "@/lib/data";

// The main page's content and section order in the /demo-2 poster style.
// Main-site nav links point at "/#section"; here they stay on this page.
const pageNav = nav.map((item) => ({ ...item, href: item.href.replace(/^\//, "") }));

export default function PosterMainPage() {
  return (
    <>
      <PosterHeader nav={pageNav} cta={applyCta} ctaShort={applyCta.label} />
      <main id="tresc">
        <PosterHero
          lines={demo3.heroLines}
          linesPink={demo3.pink.heroLines}
          lead={hero.lead}
          leadPink={demo3.pink.heroLead}
          primary={hero.primaryCta}
          secondary={hero.secondaryCta}
          image={hero.image}
          caption={hero.imageCaption}
        />
        <PosterStats stats={hero.stats} />
        <D3Problem />
        <D3About />
        <PosterSteps
          id="jak-pracuje"
          title={howIWork.title}
          pinkWords={demo3.pink.howIWork}
          intro={howIWork.intro}
          steps={howIWork.steps}
        >
          <D3Offer />
        </PosterSteps>
        <D3Transformations />
        <D3Testimonials />
        <D3Products />
        <PosterFaq
          title={faq.title}
          pinkWords={demo3.pink.faq}
          intro={faq.intro}
          items={faq.items}
          contact={faq.contactLink}
          background="ink"
        />
        <D3Final />
      </main>
      <PosterFooter cta={applyCta} backLinks={demo3.backLinks} />
      <StickyCta cta={applyCta} tone="poster" contactId={ids.contact} newTabLabel={ui.newTab} />
      <PayhipDialog tone="poster" {...demo.payhip} newTabLabel={ui.newTab} />
    </>
  );
}
