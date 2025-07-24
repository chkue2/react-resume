"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  MapPin,
  Mail,
  Calendar,
  GraduationCap,
  Briefcase,
  Award,
  Shield,
  Code,
  Zap,
  FolderOpen,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { AnimatedSection } from "@/components/animated-section";
import { StaggeredContainer } from "@/components/staggered-container";
import { useLoading } from "@/hooks/use-loading";
import {
  HeaderSkeleton,
  SummarySkeleton,
  EducationSkeleton,
  WorkExperienceSkeleton,
  CertificationsSkeleton,
  MilitarySkeleton,
  DetailedExperienceSkeleton,
  EducationCourseSkeleton,
  PortfolioSkeleton,
  SkillProgressBarSkeleton,
  ScrollToTopButtonSkeleton,
} from "@/components/skeleton-sections";
import { ThemeIndicator } from "@/components/theme-indicator";
import { CareerDisplay } from "@/components/career-display";
import { CurrentTenure } from "@/components/current-tenure";
import { SkillProgressBar } from "@/components/skill-progress-bar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollToTopButton } from "@/components/scroll-to-top-button";
import { portfolioItems } from "@/utils/portfolio-data"; // 포트폴리오 데이터 임포트
import { PortfolioCard } from "@/components/portfolio-card"; // PortfolioCard 컴포넌트 임포트

export default function ResumePage() {
  const isLoading = useLoading(2000); // 2초 로딩 시뮬레이션

  // 스킬 데이터 정의 (숙련도 포함)
  const frontendSkills = [
    {
      name: "Vue3",
      proficiency: 90,
      color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    },
    {
      name: "Vue2",
      proficiency: 85,
      color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    },
    {
      name: "Nuxt.js",
      proficiency: 80,
      color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    },
    {
      name: "TypeScript",
      proficiency: 75,
      color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    },
    {
      name: "HTML/CSS",
      proficiency: 95,
      color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    },
    {
      name: "SCSS",
      proficiency: 85,
      color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    },
    {
      name: "JavaScript",
      proficiency: 90,
      color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    },
  ];

  const animationSkills = [
    {
      name: "AOS.js",
      proficiency: 70,
      color:
        "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    },
    {
      name: "Anime.js",
      proficiency: 65,
      color:
        "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    },
    {
      name: "ScrollMagic",
      proficiency: 60,
      color:
        "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    },
    {
      name: "GSAP",
      proficiency: 55,
      color:
        "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    },
    {
      name: "TweenMax",
      proficiency: 50,
      color:
        "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    },
  ];

  const backendSkills = [
    {
      name: "Spring Framework",
      proficiency: 70,
      color:
        "border-green-300 text-green-700 dark:border-green-600 dark:text-green-400",
    },
    {
      name: "eGovFramework",
      proficiency: 65,
      color:
        "border-green-300 text-green-700 dark:border-green-600 dark:text-green-400",
    },
    {
      name: "Java",
      proficiency: 75,
      color:
        "border-green-300 text-green-700 dark:border-green-600 dark:text-green-400",
    },
    {
      name: "MyBatis",
      proficiency: 70,
      color:
        "border-green-300 text-green-700 dark:border-green-600 dark:text-green-400",
    },
  ];

  const mobileSkills = [
    {
      name: "Cordova PhoneGap",
      proficiency: 80,
      color:
        "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
    },
    {
      name: "Swift",
      proficiency: 40,
      color:
        "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
    },
    {
      name: "Kotlin",
      proficiency: 40,
      color:
        "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
    },
    {
      name: "WebView Apps",
      proficiency: 85,
      color:
        "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
    },
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Theme Toggle Skeleton */}
          <div className="flex justify-end mb-4">
            <div className="h-10 w-10 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse" />
          </div>
          {/* Header Skeleton */}
          <HeaderSkeleton />
          {/* Summary Skeleton */}
          <SummarySkeleton />
          {/* Education Skeleton */}
          <EducationSkeleton />
          {/* Work Experience Skeleton */}
          <WorkExperienceSkeleton />
          {/* Skills Skeleton */}
          <Card className="mb-6 border-0 shadow-lg dark:bg-gray-800/50 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Skeleton className="h-5 w-5 rounded" />
                <Skeleton className="h-6 w-24" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div>
                  <Skeleton className="h-5 w-40 mb-2" />
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <SkillProgressBarSkeleton key={i} />
                    ))}
                  </div>
                </div>
                <div>
                  <Skeleton className="h-5 w-40 mb-2" />
                  <div className="space-y-3">
                    {[1, 2].map((i) => (
                      <SkillProgressBarSkeleton key={i} />
                    ))}
                  </div>
                </div>
                <div>
                  <Skeleton className="h-5 w-40 mb-2" />
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <SkillProgressBarSkeleton key={i} />
                    ))}
                  </div>
                </div>
                <div>
                  <Skeleton className="h-5 w-40 mb-2" />
                  <div className="space-y-3">
                    {[1, 2].map((i) => (
                      <SkillProgressBarSkeleton key={i} />
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          {/* Certifications Skeleton */}
          <CertificationsSkeleton />
          {/* Military Skeleton */}
          <MilitarySkeleton />
          {/* Detailed Experience Skeletons */}
          <DetailedExperienceSkeleton title="로앤텍" />
          <DetailedExperienceSkeleton title="홈핏" />
          <DetailedExperienceSkeleton title="메타빌드" />
          <DetailedExperienceSkeleton title="비즈웍스" />
          {/* Education Course Skeleton */}
          <EducationCourseSkeleton />
          {/* Career Breakdown Skeleton */}
          <div className="mb-6 border-0 shadow-lg dark:bg-gray-800/50 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded bg-gray-200 dark:bg-gray-700" />
                <div className="h-6 w-32 bg-gray-200 dark:bg-gray-700" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                <div className="flex justify-between items-center p-3 rounded-lg bg-gray-200 dark:bg-gray-700">
                  <div className="h-5 w-24" />
                  <div className="h-6 w-16 rounded-full" />
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-gray-200 dark:bg-gray-700">
                  <div className="h-5 w-24" />
                  <div className="h-6 w-16 rounded-full" />
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-gray-200 dark:bg-gray-700">
                  <div className="h-5 w-24" />
                  <div className="h-6 w-16 rounded-full" />
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-gray-200 dark:bg-gray-700">
                  <div className="h-5 w-24" />
                  <div className="h-6 w-16 rounded-full" />
                </div>
              </div>
            </CardContent>
          </div>
          {/* Portfolio Skeleton */}
          <PortfolioSkeleton />
          {/* Footer Skeleton */}
          <div className="text-center mt-8">
            <div className="h-4 w-96 bg-gray-200 dark:bg-gray-700 rounded mx-auto animate-pulse" />
          </div>
          {/* Scroll To Top Button Skeleton */}
          <ScrollToTopButtonSkeleton />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Theme Toggle */}
        <div className="flex justify-end mb-4">
          <ThemeToggle />
        </div>

        {/* Header */}
        <AnimatedSection delay={200}>
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              최한규
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              Frontend Developer
            </p>
            <StaggeredContainer
              staggerDelay={150}
              className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400"
            >
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>1993년생</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>경기도 안산시 단원구</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:chkue0924@kakao.com"
                  className="hover:underline"
                >
                  chkue0924@kakao.com
                </a>
              </div>
            </StaggeredContainer>
          </div>
        </AnimatedSection>

        {/* Summary */}
        <AnimatedSection delay={300}>
          <Card className="mb-6 border-0 shadow-lg dark:bg-gray-800/50 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span className="text-gray-900 dark:text-white">경력 요약</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <StaggeredContainer
                staggerDelay={200}
                className="grid md:grid-cols-2 gap-4"
              >
                <div>
                  <CareerDisplay />
                  <p className="text-gray-600 dark:text-gray-300">
                    총 개발 경력
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                    Vue.js
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    주력 프론트엔드 기술
                  </p>
                </div>
              </StaggeredContainer>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Education */}
        <AnimatedSection delay={400}>
          <Card className="mb-6 border-0 shadow-lg dark:bg-gray-800/50 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span className="text-gray-900 dark:text-white">학력사항</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <StaggeredContainer staggerDelay={150} className="space-y-3">
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    학점은행제 (학사) 컴퓨터공학
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    2012.03 ~ 2018.08
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    대입 검정고시
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    2010.03 ~ 2010.08
                  </p>
                </div>
              </StaggeredContainer>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Work Experience */}
        <AnimatedSection delay={500}>
          <Card className="mb-6 border-0 shadow-lg dark:bg-gray-800/50 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span className="text-gray-900 dark:text-white">근무사항</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <StaggeredContainer staggerDelay={200} className="space-y-4">
                <div className="border-l-4 border-emerald-500 dark:border-emerald-400 pl-4 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/10 rounded-r-lg transition-colors duration-300 py-2">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                        로앤텍
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        개발팀 / 담당
                      </p>
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200"
                    >
                      2023.10 ~ <CurrentTenure />
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    부동산 등기 플랫폼 회사 (직원수 6명)
                  </p>
                </div>

                <div className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 hover:bg-gray-50/50 dark:hover:bg-gray-800/30 rounded-r-lg transition-colors duration-300 py-2">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                        홈핏
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        개발팀 / 담당
                      </p>
                    </div>
                    <Badge
                      variant="outline"
                      className="dark:border-gray-600 dark:text-gray-300"
                    >
                      2021.04 ~ 2023.07
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    플랫폼 회사 (직원수 18명, 매출액 24억)
                  </p>
                </div>

                <div className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 hover:bg-gray-50/50 dark:hover:bg-gray-800/30 rounded-r-lg transition-colors duration-300 py-2">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                        메타빌드
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        사업수행실 / 매니저
                      </p>
                    </div>
                    <Badge
                      variant="outline"
                      className="dark:border-gray-600 dark:text-gray-300"
                    >
                      2020.10 ~ 2021.02
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    SI,SM회사 (직원수 240명, 매출액 330억)
                  </p>
                </div>

                <div className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 hover:bg-gray-50/50 dark:hover:bg-gray-800/30 rounded-r-lg transition-colors duration-300 py-2">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                        비즈웍스
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        개발팀 / 주임
                      </p>
                    </div>
                    <Badge
                      variant="outline"
                      className="dark:border-gray-600 dark:text-gray-300"
                    >
                      2018.05 ~ 2020.07
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    ERP 및 플랫폼 회사 (직원수 10명, 매출액 15억)
                  </p>
                </div>
              </StaggeredContainer>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Skills */}
        <AnimatedSection delay={600}>
          <Card className="mb-6 border-0 shadow-lg dark:bg-gray-800/50 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span className="text-gray-900 dark:text-white">
                  역량 / 지식
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <StaggeredContainer staggerDelay={100} className="grid gap-4">
                <div>
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                    Frontend Development
                  </h4>
                  <div className="space-y-3">
                    {frontendSkills.map((skill) => (
                      <SkillProgressBar
                        key={skill.name}
                        skillName={skill.name}
                        proficiency={skill.proficiency}
                        categoryColorClass={skill.color}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                    Animation & Interaction
                  </h4>
                  <div className="space-y-3">
                    {animationSkills.map((skill) => (
                      <SkillProgressBar
                        key={skill.name}
                        skillName={skill.name}
                        proficiency={skill.proficiency}
                        categoryColorClass={skill.color}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                    Backend & Framework
                  </h4>
                  <div className="space-y-3">
                    {backendSkills.map((skill) => (
                      <SkillProgressBar
                        key={skill.name}
                        skillName={skill.name}
                        proficiency={skill.proficiency}
                        categoryColorClass={skill.color}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                    Mobile Development
                  </h4>
                  <div className="space-y-3">
                    {mobileSkills.map((skill) => (
                      <SkillProgressBar
                        key={skill.name}
                        skillName={skill.name}
                        proficiency={skill.proficiency}
                        categoryColorClass={skill.color}
                      />
                    ))}
                  </div>
                </div>
              </StaggeredContainer>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Certifications */}
        <AnimatedSection delay={700}>
          <Card className="mb-6 border-0 shadow-lg dark:bg-gray-800/50 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span className="text-gray-900 dark:text-white">자격사항</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <StaggeredContainer staggerDelay={200} className="space-y-3">
                <div className="flex justify-between items-center hover:bg-gray-50/50 dark:hover:bg-gray-800/30 rounded-lg p-2 transition-colors duration-300">
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      네트워크관리사2급
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      한국정보통신자격협회
                    </p>
                  </div>
                  <Badge
                    variant="outline"
                    className="dark:border-gray-600 dark:text-gray-300"
                  >
                    2017.06
                  </Badge>
                </div>
                <Separator className="dark:bg-gray-700" />
                <div className="flex justify-between items-center hover:bg-gray-50/50 dark:hover:bg-gray-800/30 rounded-lg p-2 transition-colors duration-300">
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      정보처리산업기사
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      한국산업인력공단
                    </p>
                  </div>
                  <Badge
                    variant="outline"
                    className="dark:border-gray-600 dark:text-gray-300"
                  >
                    2015.05
                  </Badge>
                </div>
                <Separator className="dark:bg-gray-700" />
                <div className="flex justify-between items-center hover:bg-gray-50/50 dark:hover:bg-gray-800/30 rounded-lg p-2 transition-colors duration-300">
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      SCJP
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      SUN
                    </p>
                  </div>
                  <Badge
                    variant="outline"
                    className="dark:border-gray-600 dark:text-gray-300"
                  >
                    2011.04
                  </Badge>
                </div>
              </StaggeredContainer>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Education Course */}
        <AnimatedSection delay={800}>
          <Card className="mb-6 border-0 shadow-lg dark:bg-gray-800/50 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span className="text-gray-900 dark:text-white">
                  교육이수사항
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center hover:bg-gray-50/50 dark:hover:bg-gray-800/30 rounded-lg p-2 transition-colors duration-300">
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    빅데이터 응용 SW 개발자 과정
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    중앙정보기술인재개발원
                  </p>
                </div>
                <Badge
                  variant="outline"
                  className="dark:border-gray-600 dark:text-gray-300"
                >
                  2017.11 ~ 2018.05
                </Badge>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Military Service */}
        <AnimatedSection delay={900}>
          <Card className="mb-6 border-0 shadow-lg dark:bg-gray-800/50 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span className="text-gray-900 dark:text-white">병력사항</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center hover:bg-gray-50/50 dark:hover:bg-gray-800/30 rounded-lg p-2 transition-colors duration-300">
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    사회복무요원
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    소집해제(만기제대)
                  </p>
                </div>
                <Badge
                  variant="outline"
                  className="dark:border-gray-600 dark:text-gray-300"
                >
                  2015.10 ~ 2017.10
                </Badge>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Detailed Experience - Accordion */}
        <AnimatedSection delay={1000}>
          <Card className="mb-6 border-0 shadow-lg dark:bg-gray-800/50 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span className="text-gray-900 dark:text-white">상세 경력</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {" "}
              {/* CardContent의 패딩을 0으로 설정하여 AccordionItem이 직접 패딩을 갖도록 함 */}
              <Accordion
                type="single"
                collapsible
                defaultValue="item-1"
                className="w-full"
              >
                {/* 로앤텍 */}
                <AccordionItem
                  value="item-1"
                  className="border-b border-gray-200 dark:border-gray-700"
                >
                  <AccordionTrigger className="flex items-center gap-2 px-6 py-4 text-gray-900 dark:text-white hover:no-underline hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors duration-300">
                    <Zap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    <span className="font-semibold">
                      로앤텍 (2023.10 ~ 재직중)
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4">
                    <StaggeredContainer
                      staggerDelay={100}
                      className="space-y-4"
                    >
                      <div>
                        <h4 className="font-semibold text-emerald-700 dark:text-emerald-400 mb-2">
                          프론트엔드 개발 및 UI/UX 개선
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                          <li>
                            기존 JSP 기반 프로젝트를 Java + Vue3 환경으로
                            마이그레이션하여 프론트엔드 모듈화 및 유지보수성
                            향상
                          </li>
                          <li>
                            Quasar 프레임워크를 활용한 대시보드 UI 개발 및
                            데이터 시각화 기능 구현
                          </li>
                          <li>
                            Vue-chartjs 기반의 실시간 데이터 시각화 컴포넌트
                            개발
                          </li>
                          <li>
                            HTML, SCSS, Vanilla JavaScript를 활용한 반응형
                            퍼블리싱 및 접근성 고려 마크업 작업
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-emerald-700 dark:text-emerald-400 mb-2">
                          SPA 및 SSR 기반 웹 서비스 개발
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                          <li>
                            Nuxt + Vue3 기반의 SSR 웹 애플리케이션 신규 서비스
                            기획 및 구축
                          </li>
                          <li>
                            SEO 최적화, 초기 로딩 속도 개선, 페이지 단위 렌더링
                            최적화 경험
                          </li>
                          <li>
                            Pinia를 활용한 상태 관리 및 모듈화 설계로 컴포넌트
                            간 데이터 흐름 효율화
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-emerald-700 dark:text-emerald-400 mb-2">
                          모바일 앱(WebView) 개발 및 배포
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                          <li>
                            Kotlin 기반 WebView 앱 개발 및 Android 스토어 론칭
                          </li>
                          <li>
                            Swift 기반 WebView 앱 개발 및 iOS 앱스토어 배포
                          </li>
                          <li>
                            웹 서비스와 모바일 앱 간 UI/UX 일관성 유지 및 연동
                            최적화
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-emerald-700 dark:text-emerald-400 mb-2">
                          협업 및 DevOps 환경 구축
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                          <li>GitLab을 활용한 형상 관리 및 브랜치 전략 운영</li>
                          <li>Jenkins를 통한 CI/CD 자동 배포 운영</li>
                          <li>
                            Postman, Swagger UI, Figma를 활용해 백엔드,
                            디자이너와 원활한 협업 환경 구축
                          </li>
                          <li>
                            Notion을 통한 프로젝트 일정 관리 및 팀 단위 업무
                            진행 상황 관리
                          </li>
                        </ul>
                      </div>
                    </StaggeredContainer>
                  </AccordionContent>
                </AccordionItem>

                {/* 홈핏 */}
                <AccordionItem
                  value="item-2"
                  className="border-b border-gray-200 dark:border-gray-700"
                >
                  <AccordionTrigger className="flex items-center gap-2 px-6 py-4 text-gray-900 dark:text-white hover:no-underline hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors duration-300">
                    <Zap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    <span className="font-semibold">
                      홈핏 (2021.04 ~ 2023.07)
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4">
                    <div className="space-y-4">
                      <AnimatedSection delay={100}>
                        <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg border dark:border-emerald-800">
                          <h4 className="font-semibold text-emerald-700 dark:text-emerald-400 mb-2">
                            🚀 주요 성과
                          </h4>
                          <StaggeredContainer
                            staggerDelay={150}
                            className="grid md:grid-cols-2 gap-4 text-sm"
                          >
                            <div>
                              <p className="font-semibold text-gray-900 dark:text-white">
                                사용자 체류 시간
                              </p>
                              <p className="text-emerald-600 dark:text-emerald-400">
                                33초 → 1분대 (100% 증가)
                              </p>
                            </div>
                            <div>
                              <p className="font-semibold text-gray-900 dark:text-white">
                                페이지 로드 시간
                              </p>
                              <p className="text-emerald-600 dark:text-emerald-400">
                                5초대 → 3초대 개선
                              </p>
                            </div>
                            <div>
                              <p className="font-semibold text-gray-900 dark:text-white">
                                이탈률
                              </p>
                              <p className="text-emerald-600 dark:text-emerald-400">
                                58% → 38% (20%p 감소)
                              </p>
                            </div>
                            <div>
                              <p className="font-semibold text-gray-900 dark:text-white">
                                서비스 확장
                              </p>
                              <p className="text-emerald-600 dark:text-emerald-400">
                                1종 → 4종 다각화
                              </p>
                            </div>
                          </StaggeredContainer>
                        </div>
                      </AnimatedSection>

                      <AnimatedSection delay={200}>
                        <StaggeredContainer
                          staggerDelay={100}
                          className="space-y-4"
                        >
                          <div>
                            <h4 className="font-semibold text-emerald-700 dark:text-emerald-400 mb-2">
                              웹 서비스 리뉴얼 및 마이그레이션
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                              <li>
                                PHP 기반 레거시 프로젝트를 Nuxt + Vue2 환경으로
                                전환, 유지보수성과 확장성 강화
                              </li>
                              <li>
                                Vue3 + TypeScript 기반 B2B 고객 전용 대시보드 및
                                예약 시스템 개발
                              </li>
                              <li>
                                코치용 디지털 노트 시스템 개발로 기존 종이 방식
                                디지털화
                              </li>
                              <li>
                                준비물 관련 커머스 기능 개발 및 서비스 내 통합
                              </li>
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold text-emerald-700 dark:text-emerald-400 mb-2">
                              프론트엔드 개발 및 인터랙션 구현
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                              <li>
                                HTML, SCSS, Vanilla JavaScript 기반의 웹
                                퍼블리싱 작업 수행
                              </li>
                              <li>
                                Axios를 통한 REST API 통신 및 데이터 바인딩 처리
                              </li>
                              <li>
                                TweenMax & ScrollMagic 활용하여 서비스 소개
                                페이지에 인터랙티브 효과 구현
                              </li>
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold text-emerald-700 dark:text-emerald-400 mb-2">
                              데이터 분석 및 운영 환경 개선
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                              <li>
                                Google Analytics UA → GA4 전환 작업 수행, 이벤트
                                기반 분석 체계 도입
                              </li>
                              <li>
                                Zeplin, Postman, Slack을 활용한
                                디자이너·기획자·백엔드와의 유기적 협업
                              </li>
                              <li>Git 기반 형상 관리 및 브랜치 전략 적용</li>
                              <li>
                                Notion을 활용한 프로젝트 일정 관리 및
                                커뮤니케이션 체계 정립
                              </li>
                            </ul>
                          </div>
                        </StaggeredContainer>
                      </AnimatedSection>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* 메타빌드 */}
                <AccordionItem
                  value="item-3"
                  className="border-b border-gray-200 dark:border-gray-700"
                >
                  <AccordionTrigger className="flex items-center gap-2 px-6 py-4 text-gray-900 dark:text-white hover:no-underline hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors duration-300">
                    <Zap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    <span className="font-semibold">
                      메타빌드 (2020.10 ~ 2021.02)
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4">
                    <StaggeredContainer
                      staggerDelay={100}
                      className="space-y-4"
                    >
                      <div>
                        <h4 className="font-semibold text-emerald-700 dark:text-emerald-400 mb-2">
                          프론트엔드 퍼블리싱 및 UI 구축
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                          <li>
                            HTML, CSS3, Bootstrap 을 활용한 반응형 웹 퍼블리싱
                            수행
                          </li>
                          <li>
                            Adobe XD 기반 디자인 시안을 바탕으로 퍼블리싱 및
                            디자이너와 협업 진행
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-emerald-700 dark:text-emerald-400 mb-2">
                          백엔드 API 개발 및 시스템 연동
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                          <li>Java 기반 REST API 구현 및 서비스 연동</li>
                          <li>
                            Spring Swagger UI 를 활용하여 REST API 문서 자동화
                          </li>
                          <li>Java 컨트롤러 설정 및 데이터 흐름 연동 처리</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-emerald-700 dark:text-emerald-400 mb-2">
                          형상 관리 및 협업 환경
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                          <li>
                            SVN 기반 형상 관리를 통한 코드 버전 관리 및 팀 협업
                          </li>
                          <li>
                            Adobe XD 를 활용하여 디자이너와 UI/UX 커뮤니케이션
                            원활화
                          </li>
                        </ul>
                      </div>
                    </StaggeredContainer>
                  </AccordionContent>
                </AccordionItem>

                {/* 비즈웍스 */}
                <AccordionItem
                  value="item-4"
                  className="border-b border-gray-200 dark:border-gray-700"
                >
                  <AccordionTrigger className="flex items-center gap-2 px-6 py-4 text-gray-900 dark:text-white hover:no-underline hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors duration-300">
                    <Zap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    <span className="font-semibold">
                      비즈웍스 (2018.05 ~ 2020.07)
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4">
                    <StaggeredContainer
                      staggerDelay={100}
                      className="space-y-4"
                    >
                      <div>
                        <h4 className="font-semibold text-emerald-700 dark:text-emerald-400 mb-2">
                          프론트엔드 퍼블리싱 및 UI 구축
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                          <li>
                            HTML, CSS3, jQuery, jQuery Mobile 을 활용한 웹 및
                            모바일 UI 퍼블리싱
                          </li>
                          <li>
                            Adobe XD 기반 디자인 시안을 바탕으로 퍼블리싱 및
                            디자이너 협업 진행
                          </li>
                          <li>
                            JSP 를 통한 데이터 바인딩 처리, 프론트-백 간 연동
                            구현
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-emerald-700 dark:text-emerald-400 mb-2">
                          백엔드 개발 및 시스템 구성
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                          <li>
                            Java + MyBatis 기반 백엔드 구조 설정 및 서버 로직
                            구현
                          </li>
                          <li>
                            HeidiSQL 을 활용한 데이터 모델링 및 스키마 설계
                          </li>
                          <li>Tomcat 서버 설정 및 배포 환경 구성</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-emerald-700 dark:text-emerald-400 mb-2">
                          모바일 앱 및 외부 서비스 연동
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                          <li>
                            Cordova 기반 하이브리드 앱 패키징 및 iOS, Android
                            동시 출시
                          </li>
                          <li>
                            Firebase Push 알림 서비스 및 실시간 데이터베이스
                            연동, 이미지 업로드 기능 포함
                          </li>
                        </ul>
                      </div>
                    </StaggeredContainer>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Portfolio */}
        <AnimatedSection delay={1100}>
          <Card className="mb-6 border-0 shadow-lg dark:bg-gray-800/50 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FolderOpen className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span className="text-gray-900 dark:text-white">
                  포트폴리오
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300">
                프로젝트에 투입되어 작업하거나, 개인 프로젝트로 제작한
                포트폴리오 모음집입니다. 자세한 내용이 궁금하시다면 아래
                페이지를 클릭하면 상세 정보를 확인하실 수 있습니다.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                외부 요청으로 진행된 프로젝트의 경우, URL 공개가 어렵습니다.
                양해 부탁드립니다.
              </p>
              <StaggeredContainer
                staggerDelay={100}
                className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              >
                {portfolioItems.map((item, index) => (
                  <PortfolioCard key={index} item={item} />
                ))}
              </StaggeredContainer>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Footer */}
        <AnimatedSection delay={1200} rootMargin="0px">
          <div className="text-center text-gray-500 dark:text-gray-400 text-sm mt-8">
            <p>
              Frontend Developer with 6+ years of experience in Vue.js and
              Full-Stack Development
            </p>
          </div>
        </AnimatedSection>

        {/* Theme Indicator */}
        <ThemeIndicator />

        {/* Scroll To Top Button */}
        <ScrollToTopButton />
      </div>
    </div>
  );
}
