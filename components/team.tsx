import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { team } from "@/lib/content";

export function Team() {
  return (
    <section id="team" className="bg-canvas py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={team.eyebrow}
            title={team.title}
            lead={team.lead}
          />
        </Reveal>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {team.members.map((member, i) => (
            <Reveal key={member.name} delay={i * 70}>
              <li className="flex h-full items-center gap-4 rounded-2xl border border-slate-200 bg-white px-6 py-5">
                <span
                  aria-hidden="true"
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-soft text-base font-bold text-brand-deep"
                >
                  {member.name.slice(0, 1)}
                </span>
                <div>
                  <p className="text-lg font-bold text-brand-navy">{member.name}</p>
                  <p className="mt-0.5 text-sm text-ink-muted">{member.role}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
