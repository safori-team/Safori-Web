import type { NextConfig } from "next";

/**
 * 기본값(Vercel 등)은 서버 렌더링 + 이미지 최적화를 그대로 사용합니다.
 * GitHub Pages 배포에서만 환경변수로 정적 내보내기와 하위 경로를 켭니다.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const staticExport = process.env.STATIC_EXPORT === "true";

const nextConfig: NextConfig = {
  ...(staticExport
    ? { output: "export" as const, images: { unoptimized: true } }
    : {}),
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
};

export default nextConfig;
