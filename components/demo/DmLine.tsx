import { demo } from "@/lib/data";

/** "Wyślij mi wiadomość z hasłem LISTOPAD", linking to an Instagram DM. */
export function DmLine({ dark = false, className = "" }: { dark?: boolean; className?: string }) {
  return (
    <p className={`text-[0.95rem] leading-relaxed ${dark ? "text-ed-muted-dark" : "text-ed-muted"} ${className}`}>
      {demo.dm.before}{" "}
      <a
        href={demo.dm.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`font-medium underline decoration-1 underline-offset-4 ${dark ? "text-ed-rose-light" : "text-ed-rose-deep"}`}
      >
        {demo.dm.keyword}
        <span className="sr-only"> (Instagram, otwiera się w nowej karcie)</span>
      </a>
    </p>
  );
}
