"use client";
import { useTheme } from "next-themes";
import { useSystemTheme } from "@/hooks/use-system-theme";
import { Monitor, Moon, Sun } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

export function ThemeIndicator() {
  const { theme, systemTheme } = useTheme();
  const detectedSystemTheme = useSystemTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme =
    theme === "system" ? systemTheme || detectedSystemTheme : theme;
  const isSystemTheme = theme === "system";

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <Badge
        variant="outline"
        className="flex items-center gap-2 bg-background/80 backdrop-blur-sm border-border/50"
      >
        {isSystemTheme ? (
          <>
            <Monitor className="h-3 w-3" />
            <span className="text-xs">
              시스템 ({currentTheme === "dark" ? "다크" : "라이트"})
            </span>
          </>
        ) : (
          <>
            {currentTheme === "dark" ? (
              <Moon className="h-3 w-3" />
            ) : (
              <Sun className="h-3 w-3" />
            )}
            <span className="text-xs">
              {currentTheme === "dark" ? "다크 모드" : "라이트 모드"}
            </span>
          </>
        )}
      </Badge>
    </div>
  );
}
