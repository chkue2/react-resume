interface CareerPeriod {
  startDate: string; // "YYYY.MM" 형식
  endDate: string | "current"; // "YYYY.MM" 형식 또는 "current"
  isDevRole: boolean; // 개발 업무 여부
}

export function calculateTotalCareer(periods: CareerPeriod[]): string {
  let totalMonths = 0;

  periods.forEach((period) => {
    if (!period.isDevRole) return;

    const [startYear, startMonth] = period.startDate.split(".").map(Number);

    let endYear: number;
    let endMonth: number;

    if (period.endDate === "current") {
      const now = new Date();
      endYear = now.getFullYear();
      endMonth = now.getMonth() + 1; // getMonth()는 0부터 시작하므로 +1
    } else {
      [endYear, endMonth] = period.endDate.split(".").map(Number);
    }

    // 시작일과 종료일 사이의 개월 수 계산 (시작 월과 종료 월을 모두 포함)
    const monthsDiff = (endYear - startYear) * 12 + (endMonth - startMonth) + 1;
    totalMonths += monthsDiff;
  });

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years === 0) {
    return `${months}개월`;
  } else if (months === 0) {
    return `${years}년`;
  } else {
    return `${years}년 ${months}개월`;
  }
}

// 최한규님의 경력 데이터
export const careerPeriods: CareerPeriod[] = [
  {
    startDate: "2018.05",
    endDate: "2020.07",
    isDevRole: true, // 비즈웍스 - 개발팀 주임
  },
  {
    startDate: "2020.10",
    endDate: "2021.02",
    isDevRole: true, // 메타빌드 - 사업수행실 매니저 (eGovFramework 개발)
  },
  {
    startDate: "2021.04",
    endDate: "2023.07",
    isDevRole: true, // 홈핏 - 개발팀 담당
  },
  {
    startDate: "2023.10",
    endDate: "current",
    isDevRole: true, // 로앤텍 - 개발팀 담당 (재직중)
  },
];
