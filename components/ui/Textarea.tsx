import React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * Textarea size
   */
  textareaSize?: "sm" | "md" | "lg";
  
  /**
   * Whether the textarea has an error
   */
  error?: boolean;
}

const sizeClasses = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-5 py-3 text-lg",
};

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      textareaSize = "md",
      error = false,
      className,
      ...props
    },
    ref
  ) => {
    const classes = cn(
      "w-full rounded-lg border bg-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed resize-y min-h-[100px] dark:bg-gray-900",
      error
        ? "border-red-500 focus:ring-red-500"
        : "border-gray-300 dark:border-gray-700",
      sizeClasses[textareaSize],
      className
    );

    return <textarea ref={ref} className={classes} {...props} />;
  }
);

Textarea.displayName = "Textarea";

