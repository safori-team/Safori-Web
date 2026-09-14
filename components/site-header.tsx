"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { asset, nav, site } from "@/lib/content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-slate-200/80 bg-white/90 backdrop-blur"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-20 sm:px-8">
        <a href="#top" className="flex items-center gap-2" aria-label={site.name}>
          <Image
            src={asset(scrolled || open ? "/assets/safori-logo-dark.png" : "/assets/safori-logo.png")}
            alt={site.name}
            width={1512}
            height={408}
            priority
            className="h-6 w-auto sm:h-7"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-opacity hover:opacity-70 ${
                scrolled ? "text-ink" : "text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#demo"
          className={`hidden rounded-full px-5 py-2.5 text-sm font-bold transition-colors md:inline-flex ${
            scrolled
              ? "bg-brand-deep text-white hover:bg-brand-navy"
              : "bg-white text-brand-deep hover:bg-white/90"
          }`}
        >
          앱 시연 보기
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="메뉴 열기"
          className={`inline-flex h-10 w-10 items-center justify-center rounded-lg md:hidden ${
            scrolled || open ? "text-ink" : "text-white"
          }`}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <nav className="border-t border-slate-200 bg-white px-5 py-3 md:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-2 py-3 text-base font-medium text-ink hover:bg-canvas"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#demo"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-full bg-brand-deep px-5 py-3 text-center text-base font-bold text-white"
          >
            앱 시연 보기
          </a>
        </nav>
      ) : null}
    </header>
  );
}
