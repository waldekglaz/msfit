import type { ReactNode } from "react";
import type { Content } from "@/lib/data";
import { archivo } from "@/lib/fonts";
import { Footer } from "./Footer";
import { Header } from "./Header";

// Main-site font, header and footer, in the page's language.
export function SiteShell({ content, children }: { content: Content; children: ReactNode }) {
  return (
    <div className={`${archivo.variable} font-sans`}>
      <Header content={content} />
      {children}
      <Footer content={content} />
    </div>
  );
}
