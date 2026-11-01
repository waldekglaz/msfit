import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";
import { en } from "@/lib/data-en";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  ...pageMetadata({ path: en.home, site: en.site }),
  // Demo translation: keep it out of search results until the English copy
  // is reviewed. To go live, see "English version" in README.md.
  robots: { index: false, follow: false },
};

export default function EnglishHomePage() {
  return <HomePage content={en} />;
}
