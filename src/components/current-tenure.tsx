"use client";
import { useState, useEffect } from "react";

export function CurrentTenure() {
  const [tenure, setTenure] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const calculateTenure = () => {
      const startDate = new Date(2023, 9, 1); // 2023년 10월 (월은 0부터 시작)
      const now = new Date();

      const yearsDiff = now.getFullYear() - startDate.getFullYear();
      const monthsDiff = now.getMonth() - startDate.getMonth();

      let totalMonths = yearsDiff * 12 + monthsDiff;

      // 현재 날짜가 시작일보다 이전이면 한 달 빼기
      if (now.getDate() < startDate.getDate()) {
        totalMonths -= 1;
      }

      const years = Math.floor(totalMonths / 12);
      const months = totalMonths % 12;

      if (years === 0) {
        return `${months}개월`;
      } else if (months === 0) {
        return `${years}년`;
      } else {
        return `${years}년 ${months}개월`;
      }
    };

    const updateTenure = () => {
      setTenure(calculateTenure());
    };

    updateTenure();

    // 매일 자정에 업데이트
    const now = new Date();
    const tomorrow = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1
    );
    const msUntilMidnight = tomorrow.getTime() - now.getTime();

    const timeoutId = setTimeout(() => {
      updateTenure();
      const intervalId = setInterval(updateTenure, 24 * 60 * 60 * 1000);
      return () => clearInterval(intervalId);
    }, msUntilMidnight);

    return () => clearTimeout(timeoutId);
  }, []);

  if (!mounted) {
    return "재직중";
  }

  return `재직중 (${tenure})`;
}
