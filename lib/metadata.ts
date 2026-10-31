import type { Metadata } from "next";
import { site } from "./data";

export const ogImage = {
  url: site.ogImage.src,
  width: site.ogImage.width,
  height: site.ogImage.height,
  alt: site.ogImage.alt,
};

/** Per-page metadata. Next.js replaces (not merges) nested objects such as
 *  openGraph, so each page gets the full set with its own URL. */
export function pageMetadata({
  path,
  title,
  description = site.description,
}: {
  path: string;
  title?: string;
  description?: string;
}): Metadata {
  const fullTitle = title ? `${title} | ${site.name}` : site.title;
  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: site.locale,
      siteName: site.name,
      url: path,
      title: fullTitle,
      description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [site.ogImage.src],
    },
  };
}
