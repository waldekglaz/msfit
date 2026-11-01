import { SiteShell } from "@/components/SiteShell";
import { pl } from "@/lib/data";

// Header and footer for the Polish main site. The demos have their own.
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell content={pl}>{children}</SiteShell>;
}
