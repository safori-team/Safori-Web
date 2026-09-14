import { PhoneScreenshot } from "@/components/phone-frame";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { asset, features } from "@/lib/content";

const dims = [
  { width: 740, height: 1600 },
  { width: 675, height: 1375 },
  { width: 725, height: 1600 },
];

export function Features() {
  return (
    <section id="features" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={features.eyebrow}
            title={
              <>
                <span className="text-brand-deep">핵심 기능</span>은 이렇습니다
              </>
            }
            lead={features.lead}
          />
        </Reveal>

        <div className="mt-16 space-y-20 sm:mt-20 sm:space-y-28">
          {features.items.map((item, i) => (
            <Reveal key={item.title}>
              <div
                className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="flex justify-center">
                  <PhoneScreenshot
                    src={asset(item.image)}
                    alt={item.alt}
                    width={dims[i].width}
                    height={dims[i].height}
                    className="w-56 sm:w-64 md:w-72"
                  />
                </div>

                <div>
                  <span className="inline-flex items-center rounded-full bg-brand-soft px-4 py-1.5 text-sm font-bold text-brand-deep">
                    {String(i + 1).padStart(2, "0")} · {item.title}
                  </span>
                  <h3 className="mt-5 text-2xl leading-snug font-bold text-brand-navy sm:text-3xl">
                    {item.subtitle}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
                    {item.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
