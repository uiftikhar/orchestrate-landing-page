import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Badge visual variant
   */
  variant?: "default" | "primary" | "secondary" | "success" | "warning" | "error" | "outline";
  
  /**
   * Badge size
   */
  size?: "sm" | "md" | "lg";
  
  children: React.ReactNode;
}

const variantClasses = {
  default: "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100",
  primary: "bg-purple-100 text-purple-900 dark:bg-purple-900 dark:text-purple-100",
  secondary: "bg-blue-100 text-blue-900 dark:bg-blue-900 dark:text-blue-100",
  success: "bg-green-100 text-green-900 dark:bg-green-900 dark:text-green-100",
  warning: "bg-yellow-100 text-yellow-900 dark:bg-yellow-900 dark:text-yellow-100",
  error: "bg-red-100 text-red-900 dark:bg-red-900 dark:text-red-100",
  outline: "border-2 border-gray-300 text-gray-900 dark:border-gray-700 dark:text-gray-100",
};

const sizeClasses = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-2.5 py-1 text-sm",
  lg: "px-3 py-1.5 text-base",
};

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      variant = "default",
      size = "md",
      className,
      children,
      ...props
    },
    ref
  ) => {
    const classes = cn(
      "inline-flex items-center justify-center font-medium rounded-full whitespace-nowrap",
      variantClasses[variant],
      sizeClasses[size],
      className
    );

    return (
      <span ref={ref} className={classes} {...props}>
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";

