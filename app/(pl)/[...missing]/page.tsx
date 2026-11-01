import { notFound } from "next/navigation";

// With one root layout per language there is no app/layout.tsx, and Next.js
// 14 only allows app/not-found.tsx next to one. Catching every unknown
// address here sends it to app/(pl)/not-found.tsx instead, with a 404 status.
export default function MissingPage() {
  notFound();
}
