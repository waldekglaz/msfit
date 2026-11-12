import { demo3, newsletter } from "@/lib/data";
import { SignupForm } from "../SignupForm";
import { Pink, wrap } from "../demo2/ui";

// Newsletter signup, just above the footer.
export function D3Newsletter() {
  return (
    <section id="newsletter" aria-labelledby="newsletter-title" className="border-t border-white/10 bg-poster-ink">
      <div className={`${wrap} grid gap-10 py-20 sm:py-24 lg:grid-cols-12 lg:items-center lg:gap-16`}>
        <div className="lg:col-span-5">
          <h2 id="newsletter-title" className="font-poster text-p-h2">
            <Pink text={newsletter.title} words={demo3.pink.newsletter} />
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-poster-grey">{newsletter.intro}</p>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <SignupForm kind="newsletter" copy={newsletter.form} fieldsInRow />
        </div>
      </div>
    </section>
  );
}
