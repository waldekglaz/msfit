import { about, faq, hero, offers, site } from "@/lib/data";

// Structured data (schema.org) in Polish: the coach as a Person and her
// online coaching business as a ProfessionalService.
export function JsonLd() {
  const personId = `${site.url}/#marta`;
  const businessId = `${site.url}/#ms-fit-coaching`;

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
          name: "Współpraca i produkty",
          itemListElement: offers.map((offer) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: offer.title,
              description: offer.text,
              serviceType: "Trening personalny i dieta online",
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
        "@id": `${site.url}/#faq`,
        inLanguage: "pl-PL",
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
