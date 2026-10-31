import { demo } from "@/lib/data";
import { darkPanel, wrap } from "./ui";

// The process as a ruled timeline: oversized numerals (a real sequence),
// a hairline with a marker per step, horizontal on desktop.
export function DemoSteps() {
  const { steps } = demo;
  return (
    <section id="jak-to-dziala" aria-labelledby="jak-to-dziala-title" className="px-2 sm:px-3">
      <div className={darkPanel}>
        <div className={`${wrap} py-20 sm:py-24 lg:py-32`}>
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <h2 id="jak-to-dziala-title" className="font-display text-ed-h2 lg:col-span-6">
              {steps.title}
            </h2>
            <p className="max-w-md text-ed-lead text-ed-muted-dark lg:col-span-5 lg:col-start-8">{steps.intro}</p>
          </div>

          <ol className="mt-16 grid gap-y-14 sm:grid-cols-2 sm:gap-x-10 lg:mt-24 lg:grid-cols-4 lg:gap-x-0">
            {steps.items.map((step, index) => (
              <li key={step.title} className="relative border-t border-ed-ivory/15 pt-10 lg:pr-10">
                <span aria-hidden="true" className="absolute -top-[5px] left-0 h-[9px] w-[9px] rounded-full bg-ed-rose" />
                <span aria-hidden="true" className="block font-display text-[5.5rem] leading-[0.8] tracking-[-0.03em] text-ed-rose-light sm:text-[7rem]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-8 text-xl font-medium">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-ed-muted-dark">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
