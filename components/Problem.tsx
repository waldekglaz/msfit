import type { Content } from "@/lib/data";
import { YoyoChart } from "./YoyoChart";

export function Problem({ content }: { content: Content }) {
  const { problem, ui } = content;
  return (
    <section aria-labelledby="problem-title" className="on-dark bg-ink text-porcelain">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:py-28">
        <div className="lg:col-span-5">
          <h2 id="problem-title" className="font-expanded text-title font-extrabold">
            {problem.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-sand">{problem.intro}</p>

          <ul className="mt-10 divide-y divide-white/15 border-y border-white/15">
            {problem.points.map((point) => (
              <li key={point.title} className="py-6">
                <h3 className="text-lg font-semibold">{point.title}</h3>
                <p className="mt-2 leading-relaxed text-sand">{point.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-7 lg:pt-2">
          <YoyoChart chart={problem.chart} legendLabel={ui.chartLegend} />
        </div>
      </div>
    </section>
  );
}
