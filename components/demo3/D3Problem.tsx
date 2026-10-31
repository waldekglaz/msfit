import { demo3, problem } from "@/lib/data";
import { EdIcon } from "../demo/EdIcons";
import { Pink, sectionY, wrap } from "../demo2/ui";
import { YoyoChart } from "../YoyoChart";

// "Znasz to?": the three frustrations as icon rows beside the yo-yo chart,
// whose steady line now draws in hot pink.
export function D3Problem() {
  return (
    <section aria-labelledby="problem-title" className={`bg-poster-black ${sectionY}`}>
      <div className={`${wrap} grid gap-14 lg:grid-cols-12 lg:gap-16`}>
        <div className="lg:col-span-5">
          <h2 id="problem-title" className="font-poster text-p-h2">
            <Pink text={problem.title} words={demo3.pink.problem} />
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-poster-grey">{problem.intro}</p>

          <ul className="mt-12 border-b border-white/10">
            {problem.points.map((point, index) => (
              <li key={point.title} className="flex gap-6 border-t border-white/10 py-8">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-poster-pink/70 text-poster-pink">
                  <EdIcon name={demo3.problemIcons[index] ?? "loop"} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-poster text-p-h3">{point.title}</h3>
                  <p className="mt-2 leading-relaxed text-poster-grey">{point.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-7 lg:pt-3">
          <div className="lg:sticky lg:top-28">
            <YoyoChart tone="poster" />
          </div>
        </div>
      </div>
    </section>
  );
}
