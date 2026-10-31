import type { Metadata, Viewport } from "next";
import { PosterRoot } from "@/components/demo2/PosterRoot";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  ...pageMetadata({ path: "/demo-3" }),
  // Demo only: keep it out of search results.
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#050505",
};

export default function PosterMainLayout({ children }: { children: React.ReactNode }) {
  return <PosterRoot>{children}</PosterRoot>;
}
