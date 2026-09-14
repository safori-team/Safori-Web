import Image from "next/image";
import { site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 sm:px-8 md:flex-row md:items-start md:justify-between">
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

        <div className="md:text-right">
          <p className="text-sm font-bold text-brand-navy">문의</p>
          <a
            href={`mailto:${site.email}`}
            className="mt-2 inline-flex items-center gap-2 text-sm text-brand-deep underline-offset-4 hover:underline"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
              <path
                d="M3 6.5A1.5 1.5 0 0 1 4.5 5h15A1.5 1.5 0 0 1 21 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5v-11Zm2.2.5 6.8 5.1L18.8 7H5.2Z"
                fill="currentColor"
              />
            </svg>
            {site.email}
          </a>
          <p className="mt-6 text-sm text-ink-muted">
            © {new Date().getFullYear()} 팀 Caring. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
