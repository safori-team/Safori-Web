/**
 * 사이트에 노출되는 모든 문구를 한곳에 모아둡니다.
 * 발표자료(팀 Caring · Safori)의 표현을 그대로 가져오되,
 * 지표·재무·시장 수치는 대외 공개 범위에서 제외했습니다.
 */

export const site = {
  name: "Safori",
  eyebrow: "2026 글로벌 피우다프로젝트 · 팀 Caring",
  tagline: "말하기만 해도 시작되는 시니어 정서 케어",
  description:
    "어르신의 이야기를 듣고, 도란이가 먼저 마음의 변화를 알아챕니다.",
};

export const nav = [
  { href: "#problem", label: "문제" },
  { href: "#service", label: "서비스" },
  { href: "#features", label: "핵심 기능" },
  { href: "#demo", label: "앱 시연" },
  { href: "#team", label: "팀 소개" },
];

export const problem = {
  eyebrow: "문제 인식 및 개발 배경",
  title: ["매년 깊어지는 시니어의 정서적 고립,", "그러나 파악 불가능한 기존의 서면 조사"],
  lead:
    "어르신의 마음은 매일 조금씩 달라집니다. 하지만 지금의 돌봄은 그 변화를 담을 그릇이 없습니다.",
  cards: [
    {
      label: "기존 시스템 01",
      title: "서면 체크리스트",
      body: "방문 시점에만, 복지사가 대신 기록합니다. 그 사이 어르신의 마음은 어디에도 남지 않습니다.",
    },
    {
      label: "기존 시스템 02",
      title: "현장 복지 인력의 한계",
      body: "인력 부족으로 일상적이고 복합적인 정서 변화를 관찰하는 데 물리적인 한계가 있습니다.",
    },
  ],
};

export const service = {
  eyebrow: "개발 목표 및 기획 개요",
  title: "말하기만 하면 마음이 기록되고 함께 돌아봅니다",
  lead:
    "정서적 고립 위험에 놓인 어르신을 위해, 복지사·생활지원사와 함께 쓰도록 설계했습니다.",
  steps: [
    {
      step: "01",
      title: "말하기",
      body: "오늘 있었던 일과 감정을 음성으로 남깁니다.",
    },
    {
      step: "02",
      title: "대화하기",
      body: "마음이 무거운 날, 도란이와 이야기를 나눕니다.",
    },
    {
      step: "03",
      title: "돌아보기",
      body: "그날의 마음과 최근의 흐름을 한눈에 확인합니다.",
    },
  ],
  note:
    "초기 한 달은 복지사와 함께, 이후에는 어르신 혼자. ‘완전 독립 사용’ 전제를 버리고 현장 자문을 반영해 보조자 연계형으로 재정의했습니다.",
};

export const features = {
  eyebrow: "서비스 주요 기능",
  title: "핵심 기능은 이렇습니다",
  lead:
    "어르신이 말로 마음을 기록하면, 도란이가 대화를 돕고, 감정 변화를 쉽게 돌아볼 수 있습니다.",
  items: [
    {
      title: "말하기",
      subtitle: "오늘 있었던 일과 감정을 음성으로 기록",
      body: "복잡한 입력 없이 버튼 하나로 오늘의 마음을 남깁니다. 큰 버튼과 한 화면 한 행동으로, 처음 써보셔도 헤매지 않습니다.",
      image: "/assets/screen-record.png",
      alt: "음성으로 마음 일기를 녹음하는 Safori 앱 화면",
    },
    {
      title: "대화하기",
      subtitle: "공감형 질문으로 마음을 천천히 정리",
      body: "도란이가 오늘의 이야기를 되짚고, 부담 없는 질문을 건넵니다. 말하고 싶지 않은 질문은 언제든 넘어갈 수 있습니다.",
      image: "/assets/screen-chat.png",
      alt: "도란이와 음성으로 대화하는 Safori 앱 화면",
    },
    {
      title: "돌아보기",
      subtitle: "그날의 마음과 최근 흐름을 한눈에 확인",
      body: "오늘 가장 크게 느껴진 마음과 세부 감정을 정리해 보여 드립니다. 결과가 마음과 다르면 직접 바로잡을 수 있습니다.",
      image: "/assets/screen-review.png",
      alt: "하루의 감정 분석 결과를 확인하는 Safori 앱 화면",
    },
  ],
};

export const demo = {
  eyebrow: "구현 결과 및 프로토타입",
  title: "어르신은 이렇게 사용하십니다",
  lead: "말하기부터 마무리까지, 실제 동작하는 앱 흐름을 영상으로 담았습니다.",
  src: "/media/safori-demo.mp4",
  poster: "/media/safori-demo-poster.jpg",
};

export const team = {
  eyebrow: "팀 소개",
  title: "팀 Caring",
  lead: "저희는 앱을 만든 것이 아니라, 현장에서 배워 앱을 바꾸고 있습니다.",
  members: [
    { name: "박진하", role: "PM · PO" },
    { name: "이승연", role: "UI · UX 디자이너" },
    { name: "박준혁", role: "프론트엔드 개발자" },
    { name: "공윤서", role: "백엔드 개발자" },
    { name: "이정한", role: "AI 개발자" },
  ],
};
