"use client";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import type { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  rootMargin?: string; // rootMargin prop을 추가합니다.
}

export function AnimatedSection({
  children,
  delay = 0,
  className = "",
  rootMargin,
}: AnimatedSectionProps) {
  // useScrollAnimation 훅에 rootMargin을 전달합니다.
  const { ref, isVisible } = useScrollAnimation(
    0.1,
    rootMargin || "0px 0px -50px 0px"
  ); // 기본값 또는 전달된 값 사용

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
