import type { Metadata } from "next";
import { About } from "@/components/About";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Hero } from "@/components/Hero";
import { HowIWork } from "@/components/HowIWork";
import { JsonLd } from "@/components/JsonLd";
import { Problem } from "@/components/Problem";
import { Products } from "@/components/Products";
import { StickyCta } from "@/components/StickyCta";
import { Testimonials } from "@/components/Testimonials";
import { Transformations } from "@/components/Transformations";
import { applyCta } from "@/lib/data";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({ path: "/" });

export default function HomePage() {
  return (
    <>
      <main id="tresc">
        <Hero />
        <Problem />
        <About />
        <HowIWork />
        <Transformations />
        <Testimonials />
        <Products />
        <Faq />
        <FinalCta />
      </main>
      <StickyCta cta={applyCta} />
      <JsonLd />
    </>
  );
}
