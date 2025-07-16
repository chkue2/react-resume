"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // 스크롤 위치에 따라 버튼 가시성 토글
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      // 300px 이상 스크롤 시 버튼 표시
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // 페이지 맨 위로 스크롤
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // 부드러운 스크롤
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <Button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-4 right-4 z-50 rounded-full p-2 shadow-lg transition-all duration-300",
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      )}
      size="icon"
      aria-label="맨 위로 스크롤"
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  );
}
