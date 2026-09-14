import { PhoneFrame } from "@/components/phone-frame";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { asset, demo } from "@/lib/content";

export function Demo() {
  return (
    <section id="demo" className="bg-brand-deep py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={demo.eyebrow}
            title={demo.title}
            lead={demo.lead}
            tone="dark"
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 flex justify-center">
            <PhoneFrame className="w-64 sm:w-72 md:w-80">
              <video
                className="block h-auto w-full bg-black"
                controls
                playsInline
                preload="metadata"
                poster={asset(demo.poster)}
              >
                <source src={asset(demo.src)} type="video/mp4" />
                이 브라우저에서는 영상을 재생할 수 없습니다.
              </video>
            </PhoneFrame>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
