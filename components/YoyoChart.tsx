import { problem } from "@/lib/data";

// Illustrative chart (no numbers): a yo-yo diet's swings versus a steady,
// tailored plan. Purely visual; the description is read to screen readers.
const yoyoPath =
  "M40 70 C 70 70, 78 150, 104 150 S 130 86, 152 86 S 184 176, 212 176 S 240 70, 266 70 S 296 160, 322 160 S 350 52, 378 52 S 408 128, 432 120 S 444 46, 452 44";
const steadyPath =
  "M40 70 C 120 78, 170 150, 250 186 S 380 214, 452 212";

export function YoyoChart() {
  const { chart } = problem;
  return (
    <figure className="rounded-[2rem] bg-ink-raised p-6 sm:p-10">
      <h3 className="font-semi-expanded text-xl font-bold sm:text-2xl">{chart.title}</h3>

      <svg
        viewBox="0 0 480 270"
        role="img"
        aria-labelledby="yoyo-title yoyo-desc"
        className="mt-6 h-auto w-full overflow-visible"
      >
        <title id="yoyo-title">{chart.title}</title>
        <desc id="yoyo-desc">{chart.description}</desc>

        {/* Axes */}
        <path d="M32 18 V 238 H 466" stroke="#7D7371" strokeWidth="1.5" fill="none" />
        <text transform="translate(20 128) rotate(-90)" fill="#E9E1DC" fontSize="18" textAnchor="middle">
          {chart.axisY}
        </text>
        <text x="466" y="262" fill="#E9E1DC" fontSize="18" textAnchor="end">
          {chart.axisX}
        </text>

        <path
          d={yoyoPath}
          stroke="#9A908E"
          strokeWidth="3"
          strokeDasharray="7 7"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d={steadyPath}
          pathLength={1}
          className="draw-on-view"
          stroke="#F4BFCF"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="40" cy="70" r="6" fill="#F4BFCF" />
      </svg>

      <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-[0.95rem]" aria-label="Legenda">
        <li className="flex items-center gap-3">
          <svg width="36" height="8" aria-hidden="true">
            <path d="M2 4h32" stroke="#9A908E" strokeWidth="3" strokeDasharray="6 6" strokeLinecap="round" />
          </svg>
          {chart.yoyoLabel}
        </li>
        <li className="flex items-center gap-3">
          <svg width="36" height="8" aria-hidden="true">
            <path d="M2 4h32" stroke="#F4BFCF" strokeWidth="5" strokeLinecap="round" />
          </svg>
          {chart.steadyLabel}
        </li>
      </ul>

      <figcaption className="mt-4 text-sm leading-relaxed text-sand">{chart.caption}</figcaption>
    </figure>
  );
}
