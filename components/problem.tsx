import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { problem } from "@/lib/content";

export function Problem() {
  return (
    <section id="problem" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={problem.eyebrow}
            title={
              <>
                {problem.title[0]}
                <br className="hidden sm:block" />{" "}
                <span className="text-brand-deep">{problem.title[1]}</span>
              </>
            }
            lead={problem.lead}
          />
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {problem.cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 90}>
              <article className="h-full rounded-2xl border border-slate-200 bg-canvas p-7 sm:p-9">
                <p className="text-xs font-bold tracking-widest text-brand">
                  {card.label}
                </p>
                <h3 className="mt-3 text-xl font-bold text-brand-navy sm:text-2xl">
                  {card.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-ink-muted">
                  {card.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
