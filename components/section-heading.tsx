import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "center",
  tone = "light",
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
}) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p
        className={`text-sm font-medium tracking-wide ${
          tone === "dark" ? "text-white/70" : "text-ink-muted"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-3xl leading-[1.3] font-bold sm:text-4xl md:text-[2.75rem] ${
          tone === "dark" ? "text-white" : "text-brand-navy"
        }`}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            tone === "dark" ? "text-white/80" : "text-ink-muted"
          }`}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}
