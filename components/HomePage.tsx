import type { Content } from "@/lib/data";
import { About } from "./About";
import { Faq } from "./Faq";
import { FinalCta } from "./FinalCta";
import { Hero } from "./Hero";
import { HowIWork } from "./HowIWork";
import { JsonLd } from "./JsonLd";
import { Problem } from "./Problem";
import { Products } from "./Products";
import { StickyCta } from "./StickyCta";
import { Testimonials } from "./Testimonials";
import { Transformations } from "./Transformations";

// The main page, in whichever language `content` is in.
export function HomePage({ content }: { content: Content }) {
  return (
    <>
      <main id={content.ids.content}>
        <Hero content={content} />
        <Problem content={content} />
        <About content={content} />
        <HowIWork content={content} />
        <Transformations content={content} />
        <Testimonials content={content} />
        <Products content={content} />
        <Faq content={content} />
        <FinalCta content={content} />
      </main>
      <StickyCta cta={content.applyCta} contactId={content.ids.contact} newTabLabel={content.ui.newTab} />
      <JsonLd content={content} />
    </>
  );
}
