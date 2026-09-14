import Image from "next/image";
import { site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <Image
            src="/assets/safori-logo-dark.png"
            alt={site.name}
            width={1512}
            height={408}
            className="h-6 w-auto"
          />
          <p className="mt-4 text-sm leading-relaxed text-ink-muted">
            {site.tagline}
            <br />
            {site.eyebrow}
          </p>
        </div>
        {/* 문의 이메일·SNS 링크가 정해지면 이 자리에 넣으세요. */}
        <p className="text-sm text-ink-muted">
          © {new Date().getFullYear()} 팀 Caring. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
