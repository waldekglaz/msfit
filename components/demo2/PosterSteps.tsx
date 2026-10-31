import { demo, demo2 } from "@/lib/data";
import { Pink, sectionY, wrap } from "./ui";

// Four full-width rows: a giant pink numeral, the step in bold serif and
// its description, so the process reads like a campaign spread.
export function PosterSteps() {
  const { steps } = demo;
  return (
    <section id="jak-to-dziala" aria-labelledby="jak-to-dziala-title" className={`bg-poster-ink ${sectionY}`}>
      <div className={wrap}>
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <h2 id="jak-to-dziala-title" className="font-poster text-p-h2 lg:col-span-6">
            <Pink text={steps.title} words={demo2.pink.steps} />
          </h2>
          <p className="max-w-md text-lg leading-relaxed text-poster-grey lg:col-span-5 lg:col-start-8">{steps.intro}</p>
        </div>

        <ol className="mt-14 border-b border-white/10 lg:mt-20">
          {steps.items.map((step, index) => (
            <li
              key={step.title}
              className="group grid gap-x-8 gap-y-3 border-t border-white/10 py-9 sm:grid-cols-12 sm:items-center lg:py-12"
            >
              <span
                aria-hidden="true"
                className="font-poster text-p-num text-poster-pink transition-transform duration-300 group-hover:translate-x-2 motion-reduce:transition-none sm:col-span-3 lg:col-span-2"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-poster text-[clamp(1.75rem,3vw,2.6rem)] leading-[1.05] sm:col-span-9 lg:col-span-4">
                {step.title}
              </h3>
              <p className="text-lg leading-relaxed text-poster-grey sm:col-span-9 sm:col-start-4 lg:col-span-5 lg:col-start-8">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
