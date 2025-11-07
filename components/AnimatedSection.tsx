import { ReactNode, ElementType } from "react";
import { useStaggerAnimation } from "@/hooks/useStaggerAnimation";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType;
}

/**
 * Wrapper component that animates children on scroll
 * Animation: Fade in + slide up (opacity 0→1, translateY 20px→0)
 * Transition: Ease-in-out 0.5s
 */
export function AnimatedSection({
  children,
  delay = 0,
  className,
  as: Component = "div",
}: AnimatedSectionProps) {
  const { ref, isVisible } = useStaggerAnimation({ delay });

  return (
    <Component
      ref={ref}
      className={cn(
        "transition-all duration-[0.5s] ease-[cubic-bezier(0.44,0,0.56,1)]",
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-[20px]",
        className
      )}
      style={{
        willChange: isVisible ? "auto" : "transform, opacity",
        transitionProperty: "opacity, transform",
      }}
    >
      {children}
    </Component>
  );
}

