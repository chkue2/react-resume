export interface PortfolioItem {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    title: "등기소다 프로 앱",
    description:
      "기존 JSP 기반 프로젝트를 Vue3로 마이그레이션하고, Swift와 Kotlin을 이용하여 Webview App을 만들어 출시했습니다.",
    url: "https://bead-ethernet-110.notion.site/76ac06143eb242ec883de1050c627ddd?p=122d13fa539880b6964bcacf5a4e431e&pm=c",
    imageUrl: "/priros-app.png", // 실제 이미지 URL로 교체하세요
  },
  {
    title: "등기소다 사용자 플랫폼",
    description:
      "신규 서비스 오픈으로, 프로젝트 셋팅부터 개발까지 프론트엔드 관련된 부분들을 혼자 맡아서 진행했습니다.",
    url: "https://lawtalksoda.com",
    imageUrl: "/lawtalksoda.png", // 실제 이미지 URL로 교체하세요
  },
  {
    title: "홈핏 서비스",
    description:
      "기존 php 기반 프로젝트를 Vue2로 마이그레이션하고, 서비스 확장과 성능 최적화에 기여했습니다.",
    url: "https://www.homefit.co.kr/", // 실제 URL로 교체하세요
    imageUrl: "/homefit.png", // 실제 이미지 URL로 교체하세요
  },
  {
    title: "해피버스킹",
    description:
      "JSP 기반 웹 및 모바일 UI 퍼블리싱, Java 백엔드 개발, Cordova 하이브리드 앱 출시 및 Firebase 연동을 진행했습니다.",
    url: "https://happybusking.com/", // 실제 URL로 교체하세요
    imageUrl: "/happy.png", // 실제 이미지 URL로 교체하세요
  },
  {
    title: "기타 프로젝트",
    description:
      "JSP 기반 프로젝트부터 단순 퍼블리싱 프로젝트까지 다양한 프로젝트들을 진행했습니다.",
    url: "https://bead-ethernet-110.notion.site/76ac06143eb242ec883de1050c627ddd", // 실제 URL로 교체하세요
    imageUrl: "/portpolio.png", // 실제 이미지 URL로 교체하세요
  },
];
