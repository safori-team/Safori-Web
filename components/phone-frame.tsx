import Image from "next/image";
import type { ReactNode } from "react";

/** 앱 화면을 감싸는 단말기 프레임. */
export function PhoneFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[2.25rem] border-[6px] border-slate-900 bg-slate-900 shadow-[0_24px_60px_-24px_rgba(5,54,118,0.55)] ${className}`}
    >
      <div className="overflow-hidden rounded-[1.9rem] bg-white">{children}</div>
    </div>
  );
}

export function PhoneScreenshot({
  src,
  alt,
  width,
  height,
  className = "",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}) {
  return (
    <PhoneFrame className={className}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(max-width: 768px) 70vw, 320px"
        className="block h-auto w-full"
      />
    </PhoneFrame>
  );
}
