import type { Metadata } from "next";
import { site as plSite, type Content } from "./data";

type Site = Content["site"];

function ogImage(site: Site) {
  return {
    url: site.ogImage.src,
    width: site.ogImage.width,
    height: site.ogImage.height,
    alt: site.ogImage.alt,
  };
}

/** Site-wide defaults for a root layout (one per language). */
export function rootMetadata(site: Site): Metadata {
  return {
    metadataBase: new URL(site.url),
    title: {
      default: site.title,
      template: `%s | ${site.name}`,
    },
    description: site.description,
    applicationName: site.name,
    authors: [{ name: site.coachName }],
    creator: site.coachName,
    openGraph: {
      type: "website",
      locale: site.locale,
      siteName: site.name,
      title: site.title,
      description: site.description,
      images: [ogImage(site)],
    },
    twitter: {
      card: "summary_large_image",
      title: site.title,
      description: site.description,
      images: [site.ogImage.src],
    },
    formatDetection: { telephone: false, address: false },
  };
}

/** Per-page metadata. Next.js replaces (not merges) nested objects such as
 *  openGraph, so each page gets the full set with its own URL. */
export function pageMetadata({
  path,
  title,
  site = plSite,
  description = site.description,
}: {
  path: string;
  title?: string;
  /** The page's language version of `site`; Polish unless given. */
  site?: Site;
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
      images: [ogImage(site)],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [site.ogImage.src],
    },
  };
}
