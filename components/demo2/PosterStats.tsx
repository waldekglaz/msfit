import { demo } from "@/lib/data";
import { wrap } from "./ui";

export function PosterStats() {
  return (
    <section aria-label="W skrócie" className="border-y border-white/10 bg-poster-ink">
      <ul className={`${wrap} grid grid-cols-3`}>
        {demo.stats.map((stat, index) => (
          <li
            key={stat.value}
            className={`py-8 sm:py-12 ${index > 0 ? "border-l border-white/10 pl-4 sm:pl-10 lg:pl-14" : "pr-4"}`}
          >
            <span
              className={`block font-poster text-[clamp(1.75rem,7vw,5.25rem)] leading-[0.85] tracking-[-0.03em] ${index === 0 ? "text-poster-pink" : ""}`}
            >
              {stat.value}
            </span>
            <span className="mt-3 block max-w-[15rem] text-[0.8rem] leading-snug text-poster-grey sm:text-base">{stat.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
