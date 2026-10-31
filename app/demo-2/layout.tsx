import type { Metadata, Viewport } from "next";
import { Abril_Fatface, DM_Sans } from "next/font/google";
import { demo } from "@/lib/data";
import { pageMetadata } from "@/lib/metadata";

// Poster pairing for /demo-2 only: Abril Fatface, a heavy display Didone
// close to the poster's lettering, and DM Sans for body text and UI.
// Playfair Display and Bodoni Moda Black were tested first, but both left
// visible gaps in Polish words (konsultac ja, W sparcie).
const serif = Abril_Fatface({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  display: "swap",
  variable: "--font-poster-serif",
});
const sans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-poster-sans",
});

export const metadata: Metadata = {
  ...pageMetadata({ path: "/demo-2", title: demo.meta.title, description: demo.meta.description }),
  // Demo only: keep it out of search results.
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#050505",
};

export default function PosterLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      id="demo2-root"
      className={`${serif.variable} ${sans.variable} poster-theme min-h-screen bg-poster-black font-poster-sans text-[1.0625rem] text-white antialiased`}
    >
      {children}
    </div>
  );
}
