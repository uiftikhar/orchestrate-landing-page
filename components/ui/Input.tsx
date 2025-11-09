import React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Input size
   */
  inputSize?: "sm" | "md" | "lg";
  
  /**
   * Whether the input has an error
   */
  error?: boolean;
  
  /**
   * Icon to display on the left side
   */
  leftIcon?: React.ReactNode;
  
  /**
   * Icon to display on the right side
   */
  rightIcon?: React.ReactNode;
}

const sizeClasses = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-5 py-3 text-lg",
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      inputSize = "md",
      error = false,
      leftIcon,
      rightIcon,
      className,
      ...props
    },
    ref
  ) => {
    const Wrapper = leftIcon || rightIcon ? "div" : React.Fragment;
    const wrapperProps = leftIcon || rightIcon ? { className: "relative" } : {};

    const inputClasses = cn(
      "w-full rounded-lg border bg-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
      error
        ? "border-red-500 focus:ring-red-500"
        : "border-gray-300",
      sizeClasses[inputSize],
      leftIcon && "pl-10",
      rightIcon && "pr-10",
      className
    );

    const iconClasses = "absolute top-1/2 -translate-y-1/2 text-gray-400";

    return (
      <Wrapper {...wrapperProps}>
        {leftIcon && <div className={cn(iconClasses, "left-3")}>{leftIcon}</div>}
        <input ref={ref} className={inputClasses} {...props} />
        {rightIcon && <div className={cn(iconClasses, "right-3")}>{rightIcon}</div>}
      </Wrapper>
    );
  }
);

Input.displayName = "Input";

