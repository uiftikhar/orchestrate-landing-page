import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button visual variant
   */
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  
  /**
   * Button size
   */
  size?: "sm" | "md" | "lg" | "xl";
  
  /**
   * Whether the button should take full width
   */
  fullWidth?: boolean;
  
  /**
   * Whether the button is in a loading state
   */
  isLoading?: boolean;
  
  /**
   * Icon to display before the text
   */
  leftIcon?: React.ReactNode;
  
  /**
   * Icon to display after the text
   */
  rightIcon?: React.ReactNode;
  
  children: React.ReactNode;
}

const variantClasses = {
  primary:
    "bg-gray-950 text-white hover:bg-gray-800 active:bg-gray-900 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-100",
  secondary:
    "bg-white text-black",
  outline:
    "border-2 border-gray-300 text-gray-950 hover:bg-gray-50 active:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-900",
  ghost:
    "text-gray-950 hover:bg-gray-100 active:bg-gray-200 dark:text-white dark:hover:bg-gray-800",
  link: "text-gray-950 hover:underline dark:text-white",
};

const sizeClasses = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
  xl: "px-8 py-4 text-xl",
};



export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      fullWidth = false,
      isLoading = false,
      leftIcon,
      rightIcon,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const classes = cn(
      "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-full",
      variantClasses[variant],
      sizeClasses[size],
      fullWidth && "w-full",
      className
    );

    return (
      <button
        ref={ref}
        className={classes}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : (
          leftIcon
        )}
        {children}
        {rightIcon}
      </button>
    );
  }
);

Button.displayName = "Button";

