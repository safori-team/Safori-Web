import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { service } from "@/lib/content";

const icons = [
  // 말하기 — 마이크
  <path
    key="mic"
    d="M12 4a3 3 0 0 1 3 3v5a3 3 0 0 1-6 0V7a3 3 0 0 1 3-3Zm7 8a7 7 0 0 1-6 6.93V21h-2v-2.07A7 7 0 0 1 5 12h2a5 5 0 0 0 10 0h2Z"
    fill="currentColor"
  />,
  // 대화하기 — 말풍선
  <path
    key="chat"
    d="M4 5h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H9l-5 4V6a1 1 0 0 1 1-1Z"
    fill="currentColor"
  />,
  // 돌아보기 — 열린 책
  <path
    key="book"
    d="M3 5.5c2.6-1 5.1-1 7.5.5v13c-2.4-1.5-4.9-1.5-7.5-.5v-13Zm10.5.5c2.4-1.5 4.9-1.5 7.5-.5v13c-2.6-1-5.1-1-7.5.5V6Z"
    fill="currentColor"
  />,
];

export function Service() {
  return (
    <section id="service" className="bg-canvas py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={service.eyebrow}
            title={service.title}
            lead={service.lead}
          />
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {service.steps.map((step, i) => (
            <Reveal key={step.step} delay={i * 90}>
              <article className="h-full rounded-2xl border border-slate-200 bg-white p-7 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-soft text-brand-deep">
                    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                      {icons[i]}
                    </svg>
                  </span>
                  <span className="text-sm font-bold tracking-widest text-brand">
                    {step.step}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-bold text-brand-navy sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ink-muted">
                  {step.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mx-auto mt-10 max-w-3xl rounded-2xl bg-white px-7 py-6 text-center text-base leading-relaxed text-ink-muted ring-1 ring-slate-200">
            {service.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
