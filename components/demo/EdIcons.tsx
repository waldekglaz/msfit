import type { SVGProps } from "react";
import type { DemoIcon } from "@/lib/data";

// Fine line icons for the /demo page (24×24, 1.5 stroke). Always decorative:
// each sits next to a visible title.
const paths: Record<DemoIcon, JSX.Element> = {
  trend: (
    <>
      <path d="M3 5c4 0 5.5 4 7.5 7.5S14 18 18 18h3" />
      <circle cx="3" cy="5" r="0.75" fill="currentColor" />
    </>
  ),
  energy: <path d="M13 2.5 4.5 13.5H11l-1 8 8.5-11H12l1-8Z" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  loop: (
    <>
      <path d="M4 12a8 8 0 0 1 13.7-5.6M20 12a8 8 0 0 1-13.7 5.6" />
      <path d="M18 3v3.6h-3.6M6 21v-3.6h3.6" />
    </>
  ),
  dumbbell: <path d="M6.5 6.5v11M17.5 6.5v11M3.5 9v6M20.5 9v6M6.5 12h11" />,
  bowl: (
    <>
      <path d="M3 11.5h18a9 9 0 0 1-18 0Z" />
      <path d="M9.5 8c0-1 1-1.5 1-2.5M13.5 8c0-1 1-1.5 1-2.5" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
      <path d="M8 3v4M16 3v4M3.5 10h17M9 15l2 2 4-4" />
    </>
  ),
  chat: <path d="M20.5 11.5a8 8 0 0 1-11.7 7.1L3.5 20l1.4-4.9A8 8 0 1 1 20.5 11.5Z" />,
  cutlery: <path d="M7 3v18M4.5 3v5a2.5 2.5 0 0 0 5 0V3M17 21V3c-2.2 1.8-3 5-3 8.5h3" />,
};

export function EdIcon({ name, ...props }: { name: DemoIcon } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
