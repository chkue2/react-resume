"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { PortfolioItem } from "@/utils/portfolio-data";

interface PortfolioCardProps {
  item: PortfolioItem;
}

export function PortfolioCard({ item }: PortfolioCardProps) {
  return (
    <Card className="overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800/50 backdrop-blur-sm">
      <div className="relative w-full h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
        <Image
          src={item.imageUrl || "/placeholder.svg"}
          alt={item.title}
          fill
          style={{ objectFit: "cover" }}
          className="transition-transform duration-300 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
          {item.title}
        </CardTitle>
        <CardDescription className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
          {item.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-end p-4 pt-0">
        <Link href={item.url} target="_blank" rel="noopener noreferrer">
          <Button
            variant="outline"
            className="flex items-center gap-2 bg-transparent"
          >
            자세히 보기
            <ExternalLink className="h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
