import { demo } from "@/lib/data";
import { EdIcon } from "./EdIcons";
import { EdButton, sectionY, wrap } from "./ui";

// Recognition cards: five reasons in a bento grid, closed by a dark card
// that turns recognition into the next step.
export function ForYou() {
  const { forYou } = demo;
  return (
    <section id="dla-kogo" aria-labelledby="dla-kogo-title" className={`bg-ed-beige ${sectionY}`}>
      <div className={`${wrap} grid gap-12 lg:grid-cols-12 lg:gap-16`}>
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <h2 id="dla-kogo-title" className="font-display text-ed-h2">
              {forYou.title}
            </h2>
            <p className="mt-6 max-w-sm text-ed-lead text-ed-muted">{forYou.intro}</p>
          </div>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:col-span-8">
          {forYou.items.map((item) => (
            <li key={item.title} className="flex flex-col rounded-[1.25rem] bg-ed-paper p-7 sm:p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-ed-line text-ed-rose-deep">
                <EdIcon name={item.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-10 font-display text-ed-h3">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-ed-muted">{item.text}</p>
            </li>
          ))}
          <li className="ed-dark flex flex-col justify-between gap-10 rounded-[1.25rem] bg-ed-ink p-7 text-ed-ivory sm:p-8">
            <p className="font-display text-ed-h3">
              {forYou.closing.title}
              <span className="mt-1 block text-ed-muted-dark">{forYou.closing.text}</span>
            </p>
            <EdButton href={demo.cta.href} external variant="light" className="w-full">
              {demo.cta.label}
            </EdButton>
          </li>
        </ul>
      </div>
    </section>
  );
}
