"use client";
import { useState, useEffect } from "react";
import { careerPeriods } from "@/utils/career-calculator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

// Helper function to calculate duration, can be outside the component
const calculatePeriodDuration = (
  startDate: string,
  endDate: string | "current"
) => {
  const [startYear, startMonth] = startDate.split(".").map(Number);

  let endYear: number;
  let endMonth: number;

  if (endDate === "current") {
    const now = new Date();
    endYear = now.getFullYear();
    endMonth = now.getMonth() + 1;
  } else {
    [endYear, endMonth] = endDate.split(".").map(Number);
  }

  const monthsDiff = (endYear - startYear) * 12 + (endMonth - startMonth);
  const years = Math.floor(monthsDiff / 12);
  const months = monthsDiff % 12;

  if (years === 0) {
    return `${months}개월`;
  } else if (months === 0) {
    return `${years}년`;
  } else {
    return `${years}년 ${months}개월`;
  }
};

export function CareerBreakdown() {
  const [mounted, setMounted] = useState(false);
  const [durations, setDurations] = useState<string[]>([]); // 계산된 기간을 저장할 상태

  useEffect(() => {
    setMounted(true);
    // 컴포넌트가 클라이언트에 마운트된 후에만 기간을 계산합니다.
    const calculatedDurations = careerPeriods.map((period) =>
      calculatePeriodDuration(period.startDate, period.endDate)
    );
    setDurations(calculatedDurations);

    // 매일 자정에 업데이트 (날짜가 바뀔 때마다)
    const now = new Date();
    const tomorrow = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1
    );
    const msUntilMidnight = tomorrow.getTime() - now.getTime();

    const timeoutId = setTimeout(() => {
      const updatedDurations = careerPeriods.map((period) =>
        calculatePeriodDuration(period.startDate, period.endDate)
      );
      setDurations(updatedDurations);
      const intervalId = setInterval(() => {
        const intervalUpdatedDurations = careerPeriods.map((period) =>
          calculatePeriodDuration(period.startDate, period.endDate)
        );
        setDurations(intervalUpdatedDurations);
      }, 24 * 60 * 60 * 1000);
      return () => clearInterval(intervalId);
    }, msUntilMidnight);

    return () => clearTimeout(timeoutId);
  }, []);

  if (!mounted) {
    return null; // 서버에서는 null을 렌더링하여 불일치 방지
  }

  const companyNames = ["비즈웍스", "메타빌드", "홈핏", "로앤텍"];

  return (
    <Card className="mb-6 border-0 shadow-lg dark:bg-gray-800/50 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          <span className="text-gray-900 dark:text-white">경력 상세</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3">
          {careerPeriods.map((period, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-3 rounded-lg bg-gray-50/50 dark:bg-gray-800/30"
            >
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  {companyNames[index]}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {period.startDate} ~{" "}
                  {period.endDate === "current" ? "현재" : period.endDate}
                </p>
              </div>
              <Badge
                variant="outline"
                className="dark:border-gray-600 dark:text-gray-300"
              >
                {durations[index]} {/* 상태에 저장된 기간 사용 */}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
