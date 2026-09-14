import Image from "next/image";
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

        <Reveal delay={100}>
          <div className="mx-auto mt-12 flex max-w-3xl flex-col items-center gap-8 rounded-3xl border border-slate-200 bg-white px-7 py-12 text-center sm:px-12">
            <Image
              src="/assets/dorani.png"
              alt="Safori의 마스코트 도란이"
              width={810}
              height={1002}
              className="w-24 sm:w-28"
            />
            <p className="text-base leading-relaxed text-ink-muted sm:text-lg">
              {team.body}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
