import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SkipLink } from "@/components/SkipLink";
import { pl } from "@/lib/data";
import { rootMetadata } from "@/lib/metadata";
import "../globals.css";

// Root layout for everything in Polish (the main site, legal pages and the
// demos). The English page has its own root layout in app/(en), because
// only a root layout can set <html lang>. Moving between the two does a
// full page load, which is fine for a language switch. The 404 page sits
// outside both, in app/not-found.tsx.
export const metadata: Metadata = rootMetadata(pl.site);

export const viewport: Viewport = {
  themeColor: "#FBF8F6",
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={pl.lang}>
      <body>
        <SkipLink content={pl} />
        {children}
        {/* Cookieless, privacy-friendly page view stats (Vercel Web Analytics). */}
        <Analytics />
      </body>
    </html>
  );
}
