"use client";

import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Badge } from "@/components/ui/badge";

interface SkillProgressBarProps {
  skillName: string;
  proficiency: number; // 0-100
  categoryColorClass?: string; // Tailwind CSS color class for badge
}

export function SkillProgressBar({
  skillName,
  proficiency,
  categoryColorClass,
}: SkillProgressBarProps) {
  const { ref, isVisible } = useScrollAnimation(0.1, "0px 0px -100px 0px"); // 뷰포트 하단에서 100px 위에서 감지
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    if (isVisible) {
      // 컴포넌트가 보이면 실제 숙련도 값으로 애니메이션
      const timer = setTimeout(() => {
        setProgressValue(proficiency);
      }, 200); // 약간의 지연을 주어 부드러운 효과
      return () => clearTimeout(timer);
    } else {
      // 컴포넌트가 뷰포트 밖으로 나가면 초기화 (선택 사항)
      setProgressValue(0);
    }
  }, [isVisible, proficiency]);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-center justify-between">
        <Badge className={categoryColorClass}>{skillName}</Badge>
        <span className="text-sm text-gray-600 dark:text-gray-400">
          {proficiency}%
        </span>
      </div>
      <Progress value={progressValue} className="w-full" />
    </div>
  );
}
