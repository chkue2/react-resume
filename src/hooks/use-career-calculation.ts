"use client";
import { useState, useEffect } from "react";
import { calculateTotalCareer, careerPeriods } from "@/utils/career-calculator";

export function useCareerCalculation() {
  const [totalCareer, setTotalCareer] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const updateCareer = () => {
      const career = calculateTotalCareer(careerPeriods);
      setTotalCareer(career);
    };

    // 초기 계산
    updateCareer();

    // 매일 자정에 업데이트 (날짜가 바뀔 때마다)
    const now = new Date();
    const tomorrow = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1
    );
    const msUntilMidnight = tomorrow.getTime() - now.getTime();

    const timeoutId = setTimeout(() => {
      updateCareer();

      // 이후 24시간마다 업데이트
      const intervalId = setInterval(updateCareer, 24 * 60 * 60 * 1000);

      return () => clearInterval(intervalId);
    }, msUntilMidnight);

    return () => clearTimeout(timeoutId);
  }, []);

  return { totalCareer, mounted };
}
