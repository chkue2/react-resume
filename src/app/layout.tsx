import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "최한규 - Frontend Developer",
  description:
    "Frontend Developer & Full-Stack Engineer with 6+ years of experience",
  keywords: [
    "프론트엔드",
    "프론트엔드 개발자",
    "Vue",
    "Vue 개발자",
    "프론트엔드 개발자 이력서",
    "최한규",
    "이력서",
    "포트폴리오",
    "Frontend Developer",
    "Vue.js Developer",
    "개발자",
    "TypeScript",
    "경력직 개발자",
  ],
  openGraph: {
    title: "최한규 - Frontend Developer",
    description:
      "Frontend Developer & Full-Stack Engineer with 6+ years of experience",
    url: "https://react-resume-pi-three.vercel.app/", // 실제 배포 URL로 변경해주세요.
    siteName: "최한규의 개발 이력서",
    images: [
      {
        url: "/profile.jpeg", // public 폴더의 이미지 경로
        width: 1200, // 이미지의 실제 너비
        height: 630, // 이미지의 실제 높이
        alt: "최한규 프로필 이미지",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "최한규 - Frontend Developer",
    description:
      "Frontend Developer & Full-Stack Engineer with 6+ years of experience",
    images: ["/profile.jpeg"], // public 폴더의 이미지 경로
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
