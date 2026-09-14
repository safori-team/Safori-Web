# Safori 소개 사이트

팀 Caring의 시니어 정서 케어 서비스 **Safori**를 소개하는 한국어 원페이지 사이트입니다.
발표자료(26p)의 문구·색상·이미지를 기반으로 구성했습니다.

## 기술 스택

- Next.js 16 (App Router) · React 19 · TypeScript
- Tailwind CSS v4
- 폰트: Noto Sans KR (`next/font`로 셀프 호스팅)

## 로컬 실행

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # 프로덕션 빌드
```

## 구성

| 섹션 | 컴포넌트 | 내용 |
| --- | --- | --- |
| 히어로 | `components/hero.tsx` | 로고 · 태그라인 · 도란이 |
| 문제 | `components/problem.tsx` | 정서적 고립과 기존 서면 조사의 한계 |
| 서비스 | `components/service.tsx` | 말하기 → 대화하기 → 돌아보기 |
| 핵심 기능 | `components/features.tsx` | 앱 화면 3종 |
| 앱 시연 | `components/demo.tsx` | 실제 동작 영상 |
| 팀 소개 | `components/team.tsx` | 팀 Caring 소개 (개인 실명·역할 미노출) |

### 문구 수정

사이트에 노출되는 모든 텍스트는 **`lib/content.ts` 한 파일**에 모여 있습니다.
컴포넌트를 건드리지 않고 이 파일만 고치면 됩니다.

### 공개 범위

대외 공개용이므로 발표자료의 다음 내용은 의도적으로 제외했습니다.

- 통계·성능·테스트 지표 (자살률, E2E/단위 테스트 건수, 응답 속도, STT 정확도 등)
- 시장 규모(TAM·SAM·SOM), 세션당 원가·매출, 기관 구독가
- 실증 계획, KPI, 멘토링 내역, 상세 기술 스택
- 팀원 개인 실명과 역할

## 에셋

`public/assets`의 이미지는 발표자료 PDF에서 추출해 배경을 투명 처리한 것입니다.
원본 벡터(SVG/AI) 파일이 있다면 교체하는 편이 화질에 유리합니다.

| 파일 | 용도 |
| --- | --- |
| `safori-logo.png` | 어두운 배경용 로고 (흰 워드마크) |
| `safori-logo-dark.png` | 밝은 배경용 로고 (네이비 워드마크) |
| `dorani.png` | 마스코트 도란이 |
| `screen-*.png` | 앱 화면 3종 |
| `media/safori-demo.mp4` | 앱 시연 영상 (원본 HEVC .mov → H.264 변환) |

## 배포

Vercel에 배포합니다. 프레임워크는 자동으로 Next.js로 감지되며 별도 설정이 필요 없습니다.

```bash
npx vercel --prod
```
