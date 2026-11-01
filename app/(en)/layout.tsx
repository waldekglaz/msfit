import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SiteShell } from "@/components/SiteShell";
import { SkipLink } from "@/components/SkipLink";
import { en } from "@/lib/data-en";
import { rootMetadata } from "@/lib/metadata";
import "../globals.css";

// Root layout for the English main page (/en). See app/(pl)/layout.tsx.
export const metadata: Metadata = rootMetadata(en.site);

export const viewport: Viewport = {
  themeColor: "#FBF8F6",
  viewportFit: "cover",
};

export default function EnglishRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={en.lang}>
      <body>
        <SkipLink content={en} />
        <SiteShell content={en}>{children}</SiteShell>
        <Analytics />
      </body>
    </html>
  );
}
