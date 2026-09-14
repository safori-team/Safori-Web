import Image from "next/image";
import { asset, site } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-brand-deep pt-28 pb-16 sm:pt-36 sm:pb-24"
    >
      {/* 발표자료 표지의 원형 모티프 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-40 h-[34rem] w-[34rem] rounded-full bg-white/10 sm:-right-24 sm:h-[44rem] sm:w-[44rem]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-32 h-[26rem] w-[26rem] rounded-full bg-white/5"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div>
          <p className="text-sm font-medium text-white/75 sm:text-base">
            {site.eyebrow}
          </p>

          <Image
            src={asset("/assets/safori-logo.png")}
            alt={site.name}
            width={1512}
            height={408}
            priority
            className="mt-5 h-14 w-auto sm:h-20"
          />

          <h1 className="mt-7 text-3xl leading-[1.32] font-bold text-white sm:text-4xl md:text-5xl">
            {site.tagline}
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/85 sm:text-lg">
            {site.description}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#demo"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-base font-bold text-brand-deep transition-colors hover:bg-white/90"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                <path d="M8 5.5v13l11-6.5-11-6.5z" fill="currentColor" />
              </svg>
              앱 시연 영상 보기
            </a>
            <a
              href="#service"
              className="inline-flex items-center rounded-full border border-white/40 px-6 py-3.5 text-base font-bold text-white transition-colors hover:bg-white/10"
            >
              서비스 알아보기
            </a>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div
            aria-hidden="true"
            className="absolute inset-x-8 bottom-2 h-8 rounded-full bg-brand-navy/25 blur-2xl"
          />
          <Image
            src={asset("/assets/dorani.png")}
            alt="Safori의 마스코트 도란이"
            width={810}
            height={1002}
            priority
            className="relative w-52 max-w-full sm:w-72 lg:w-80"
          />
        </div>
      </div>
    </section>
  );
}
