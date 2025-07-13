import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function HeaderSkeleton() {
  return (
    <div className="text-center mb-8">
      <Skeleton className="h-10 w-48 mx-auto mb-2" />
      <Skeleton className="h-6 w-80 mx-auto mb-4" />
      <div className="flex flex-wrap justify-center gap-4">
        <Skeleton className="h-5 w-24" />
        <Skeleton className="h-5 w-32" />
        <Skeleton className="h-5 w-28" />
      </div>
    </div>
  );
}

export function SummarySkeleton() {
  return (
    <Card className="mb-6 border-0 shadow-lg dark:bg-gray-800/50 backdrop-blur-sm">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Skeleton className="h-5 w-5 rounded" />
          <Skeleton className="h-6 w-24" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Skeleton className="h-8 w-20 mb-1" />
            <Skeleton className="h-4 w-24" />
          </div>
          <div>
            <Skeleton className="h-8 w-16 mb-1" />
            <Skeleton className="h-4 w-32" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function EducationSkeleton() {
  return (
    <Card className="mb-6 border-0 shadow-lg dark:bg-gray-800/50 backdrop-blur-sm">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Skeleton className="h-5 w-5 rounded" />
          <Skeleton className="h-6 w-20" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div>
            <Skeleton className="h-5 w-48 mb-1" />
            <Skeleton className="h-4 w-32" />
          </div>
          <div>
            <Skeleton className="h-5 w-32 mb-1" />
            <Skeleton className="h-4 w-28" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function WorkExperienceSkeleton() {
  return (
    <Card className="mb-6 border-0 shadow-lg dark:bg-gray-800/50 backdrop-blur-sm">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Skeleton className="h-5 w-5 rounded" />
          <Skeleton className="h-6 w-20" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 py-2"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <Skeleton className="h-6 w-24 mb-1" />
                  <Skeleton className="h-4 w-20" />
                </div>
                <Skeleton className="h-6 w-32 rounded-full" />
              </div>
              <Skeleton className="h-4 w-64" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function SkillsSkeleton() {
  return (
    <Card className="mb-6 border-0 shadow-lg dark:bg-gray-800/50 backdrop-blur-sm">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Skeleton className="h-5 w-5 rounded" />
          <Skeleton className="h-6 w-24" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {[1, 2, 3, 4].map((section) => (
            <div key={section}>
              <Skeleton className="h-5 w-40 mb-2" />
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: Math.floor(Math.random() * 5) + 3 }).map(
                  (_, index) => (
                    <Skeleton key={index} className="h-6 w-16 rounded-full" />
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function CertificationsSkeleton() {
  return (
    <Card className="mb-6 border-0 shadow-lg dark:bg-gray-800/50 backdrop-blur-sm">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Skeleton className="h-5 w-5 rounded" />
          <Skeleton className="h-6 w-20" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {[1, 2, 3].map((item) => (
            <div key={item}>
              <div className="flex justify-between items-center p-2">
                <div>
                  <Skeleton className="h-5 w-32 mb-1" />
                  <Skeleton className="h-4 w-24" />
                </div>
                <Skeleton className="h-6 w-16 rounded-full" />
              </div>
              {item < 3 && <Skeleton className="h-px w-full" />}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function MilitarySkeleton() {
  return (
    <Card className="mb-6 border-0 shadow-lg dark:bg-gray-800/50 backdrop-blur-sm">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Skeleton className="h-5 w-5 rounded" />
          <Skeleton className="h-6 w-20" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center p-2">
          <div>
            <Skeleton className="h-5 w-24 mb-1" />
            <Skeleton className="h-4 w-32" />
          </div>
          <Skeleton className="h-6 w-32 rounded-full" />
        </div>
      </CardContent>
    </Card>
  );
}

export function DetailedExperienceSkeleton({ title }: { title: string }) {
  return (
    <Card className="mb-6 border-0 shadow-lg dark:bg-gray-800/50 backdrop-blur-sm">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Skeleton className="h-5 w-5 rounded" />
          <Skeleton className="h-6 w-80" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {title === "홈핏" && (
            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg border dark:border-emerald-800">
              <Skeleton className="h-5 w-24 mb-2" />
              <div className="grid md:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item}>
                    <Skeleton className="h-4 w-24 mb-1" />
                    <Skeleton className="h-4 w-32" />
                  </div>
                ))}
              </div>
            </div>
          )}
          {[1, 2, 3].map((section) => (
            <div key={section}>
              <Skeleton className="h-5 w-48 mb-2" />
              <div className="space-y-1">
                {[1, 2, 3].map((item) => (
                  <Skeleton key={item} className="h-4 w-full" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function EducationCourseSkeleton() {
  return (
    <Card className="mb-6 border-0 shadow-lg dark:bg-gray-800/50 backdrop-blur-sm">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Skeleton className="h-5 w-5 rounded" />
          <Skeleton className="h-6 w-32" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center p-2">
          <div>
            <Skeleton className="h-5 w-48 mb-1" />
            <Skeleton className="h-4 w-32" />
          </div>
          <Skeleton className="h-6 w-32 rounded-full" />
        </div>
      </CardContent>
    </Card>
  );
}

export function PortfolioSkeleton() {
  return (
    <Card className="mb-6 border-0 shadow-lg dark:bg-gray-800/50 backdrop-blur-sm">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Skeleton className="h-5 w-5 rounded" />
          <Skeleton className="h-6 w-24" />
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-10 w-32 rounded-md" />
      </CardContent>
    </Card>
  );
}
