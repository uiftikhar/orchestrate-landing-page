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
  default: "bg-gray-100 text-gray-900",
  primary: "bg-purple-100 text-purple-900",
  secondary: "bg-blue-100 text-blue-900",
  success: "bg-green-100 text-green-900",
  warning: "bg-yellow-100 text-yellow-900",
  error: "bg-red-100 text-red-900",
  outline: "border-2 border-gray-300 text-gray-900",
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

