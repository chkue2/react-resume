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
