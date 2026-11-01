import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Jost } from "next/font/google";
import { demo } from "@/lib/data";
import { pageMetadata } from "@/lib/metadata";

// Editorial pairing for the demo only: Bodoni Moda (a fashion Didone, with
// an optical-size axis so large headlines get fine hairlines) and Jost
// (a clean geometric sans) for body text and UI.
const serif = Bodoni_Moda({
  subsets: ["latin", "latin-ext"],
  axes: ["opsz"],
  style: ["normal"],
  display: "swap",
  variable: "--font-demo-serif",
});
const sans = Jost({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-demo-sans",
});

export const metadata: Metadata = {
  ...pageMetadata({ path: "/demo", title: demo.meta.title, description: demo.meta.description }),
  // Demo only: keep it out of search results.
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#F5F1EA",
};

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      id="demo-root"
      className={`${serif.variable} ${sans.variable} ed-theme min-h-screen bg-ed-ivory font-demo text-[1.0625rem] text-ed-ink antialiased`}
    >
      {children}
    </div>
  );
}
