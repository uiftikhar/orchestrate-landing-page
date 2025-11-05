import React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Container width variant
   */
  size?: "default" | "narrow" | "wide" | "full";
  
  /**
   * Padding size
   */
  padding?: "none" | "sm" | "md" | "lg" | "xl";
  
  children: React.ReactNode;
}

const sizeClasses = {
  default: "max-w-7xl",
  narrow: "max-w-4xl",
  wide: "max-w-screen-2xl",
  full: "max-w-full",
};

const paddingClasses = {
  none: "",
  sm: "px-4 py-4 sm:px-6 sm:py-6",
  md: "px-4 py-8 sm:px-6 sm:py-12 lg:px-8",
  lg: "px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20",
  xl: "px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24",
};

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      size = "default",
      padding = "md",
      className,
      children,
      ...props
    },
    ref
  ) => {
    const classes = cn(
      "mx-auto w-full",
      sizeClasses[size],
      paddingClasses[padding],
      className
    );

    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";

