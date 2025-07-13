"use client";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import type React from "react";

import { type ReactNode, Children, cloneElement, isValidElement } from "react";
import type { HTMLAttributes, CSSProperties } from "react"; // HTMLAttributes와 CSSProperties 타입을 임포트합니다.

interface StaggeredContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}

export function StaggeredContainer({
  children,
  staggerDelay = 100,
  className = "",
}: StaggeredContainerProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div ref={ref} className={className}>
      {Children.map(children, (child, index) => {
        if (isValidElement(child)) {
          // child를 ReactElement<HTMLAttributes<HTMLElement>> 타입으로 캐스팅합니다.
          const typedChild = child as React.ReactElement<
            HTMLAttributes<HTMLElement>
          >;

          return cloneElement(typedChild, {
            ...typedChild.props, // 이제 typedChild.props는 HTMLAttributes<HTMLElement> 타입입니다.
            className: `transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            } ${typedChild.props.className || ""}`,
            style: {
              ...((typedChild.props.style as CSSProperties) || {}),
              transitionDelay: `${index * staggerDelay}ms`,
            },
          });
        }
        return child;
      })}
    </div>
  );
}
