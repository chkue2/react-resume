"use client";
import { useCareerCalculation } from "@/hooks/use-career-calculation";
import { Skeleton } from "@/components/ui/skeleton";

interface CareerDisplayProps {
  className?: string;
}

export function CareerDisplay({ className = "" }: CareerDisplayProps) {
  const { totalCareer, mounted } = useCareerCalculation();

  if (!mounted) {
    return <Skeleton className="h-8 w-20" />;
  }

  return (
    <p
      className={`text-2xl font-bold text-emerald-600 dark:text-emerald-400 ${className}`}
    >
      {totalCareer}
    </p>
  );
}
