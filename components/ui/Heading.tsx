import React from "react";
import { cn } from "@/lib/utils";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /**
   * The heading level (h1-h6)
   */
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  
  /**
   * Visual size of the heading (can be different from semantic level)
   */
  size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  
  /**
   * Font weight
   */
  weight?: "medium" | "semibold" | "bold" | "extrabold";
  
  /**
   * Text color variant
   */
  variant?: "primary" | "secondary" | "inverted-primary" | "inverted-secondary";
  
  /**
   * Text alignment
   */
  align?: "left" | "center" | "right";
  
  /**
   * Letter spacing
   */
  tracking?: "tighter" | "tight" | "normal" | "wide";
  
  children: React.ReactNode;
}

const sizeClasses = {
  h1: "text-6xl",
  h2: "text-5xl",
  h3: "text-4xl",
  h4: "text-3xl",
  h5: "text-2xl",
  h6: "text-xl",
};

const weightClasses = {
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
};

const variantClasses = {
  primary: "text-primary",
  secondary: "text-secondary",
  "inverted-primary": "text-inverted-primary",
  "inverted-secondary": "text-inverted-secondary",
};

const alignClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

const trackingClasses = {
  tighter: "tracking-tighter",
  tight: "tracking-tight",
  normal: "tracking-normal",
  wide: "tracking-wide",
};

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      as: Component = "h2",
      size,
      weight = "bold",
      variant = "primary",
      align = "left",
      tracking = "tight",
      className,
      children,
      ...props
    },
    ref
  ) => {
    // If no size is specified, match the semantic element
    const headingSize = size || Component;
    
    const classes = cn(
      "heading", // Base class for higher specificity
      sizeClasses[headingSize],
      weightClasses[weight],
      variantClasses[variant],
      alignClasses[align],
      trackingClasses[tracking],
      "leading-tight",
      className
    );

    return (
      <Component ref={ref} className={classes} {...props}>
        {children}
      </Component>
    );
  }
);

Heading.displayName = "Heading";

