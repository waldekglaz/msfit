import type { Content } from "@/lib/data";

// Structured data (schema.org), in the page's language: the coach as a
// Person and her online coaching business as a ProfessionalService. The
// @ids are shared by both language versions, since they describe the same
// person, business and website.
export function JsonLd({ content }: { content: Content }) {
  const { site, about, hero, offers, faq, schema, home } = content;
  const personId = `${site.url}/#marta`;
  const businessId = `${site.url}/#ms-fit-coaching`;
  const pageUrl = home === "/" ? site.url : `${site.url}${home}`;
  const inLanguage = site.locale.replace("_", "-");

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: site.coachName,
        jobTitle: site.jobTitle,
        description: about.paragraphs[0],
        image: `${site.url}${hero.image.src}`,
        url: site.url,
        sameAs: [site.instagram.url],
        knowsLanguage: ["pl", "en"],
        worksFor: { "@id": businessId },
      },
      {
        "@type": "ProfessionalService",
        "@id": businessId,
        name: site.name,
        description: site.description,
        url: site.url,
        image: `${site.url}${site.ogImage.src}`,
        email: site.email,
        founder: { "@id": personId },
        employee: { "@id": personId },
        sameAs: [site.instagram.url],
        knowsLanguage: "pl",
        areaServed: site.areaServed.map((name) => ({ "@type": "Country", name })),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: schema.catalogName,
          itemListElement: offers.map((offer) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: offer.title,
              description: offer.text,
              serviceType: schema.serviceType,
              provider: { "@id": personId },
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#strona`,
        url: site.url,
        name: site.name,
        inLanguage: "pl-PL",
        publisher: { "@id": businessId },
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        inLanguage,
        mainEntity: faq.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // Escape "<" so the JSON can never close the script tag early.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
