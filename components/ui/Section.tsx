import React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Background variant
   */
  background?: "default" | "neutral" | "dark" | "gradient";
  
  /**
   * Vertical padding size
   */
  spacing?: "none" | "sm" | "md" | "lg" | "xl" | "2xl";
  
  children: React.ReactNode;
}

const backgroundClasses = {
  default: "bg-white dark:bg-gray-950",
  neutral: "bg-gray-50 dark:bg-gray-900",
  dark: "bg-gray-950 text-white",
  gradient: "bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900",
};

const spacingClasses = {
  none: "",
  sm: "py-8 sm:py-12",
  md: "py-12 sm:py-16 lg:py-20",
  lg: "py-16 sm:py-20 lg:py-24",
  xl: "py-20 sm:py-24 lg:py-32",
  "2xl": "py-24 sm:py-32 lg:py-40",
};

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    {
      background = "default",
      spacing = "lg",
      className,
      children,
      ...props
    },
    ref
  ) => {
    const classes = cn(
      "relative w-full",
      backgroundClasses[background],
      spacingClasses[spacing],
      className
    );

    return (
      <section ref={ref} className={classes} {...props}>
        {children}
      </section>
    );
  }
);

Section.displayName = "Section";

