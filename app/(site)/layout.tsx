import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { archivo } from "@/lib/fonts";

// Header and footer for the main site. The /demo page has its own.
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${archivo.variable} font-sans`}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
