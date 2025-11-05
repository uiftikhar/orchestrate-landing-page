import React from "react";
import { cn } from "@/lib/utils";

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * The HTML element to render
   */
  as?: "p" | "span" | "div" | "label" | "small";
  
  /**
   * Text size variant
   */
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl";
  
  /**
   * Font weight
   */
  weight?: "light" | "normal" | "medium" | "semibold" | "bold";
  
  /**
   * Text color variant
   */
  variant?: "primary" | "secondary" | "tertiary" | "inverted-primary" | "inverted-secondary" | "inverted-tertiary";
  
  /**
   * Text alignment
   */
  align?: "left" | "center" | "right";
  
  /**
   * Whether to make text italic
   */
  italic?: boolean;
  
  children: React.ReactNode;
}

const sizeClasses = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
};

const weightClasses = {
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

const variantClasses = {
  primary: "text-primary",
  secondary: "text-secondary",
  tertiary: "text-tertiary",
  "inverted-primary": "text-inverted-primary",
  "inverted-secondary": "text-inverted-secondary",
  "inverted-tertiary": "text-inverted-tertiary",
};

const alignClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

export const Text = React.forwardRef<HTMLElement, TextProps>(
  (
    {
      as: Component = "p",
      size = "base",
      weight = "normal",
      variant = "primary",
      align = "left",
      italic = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const classes = cn(
      sizeClasses[size],
      weightClasses[weight],
      variantClasses[variant],
      alignClasses[align],
      italic && "italic",
      className
    );

    return (
      <Component ref={ref as any} className={classes} {...props}>
        {children}
      </Component>
    );
  }
);

Text.displayName = "Text";

