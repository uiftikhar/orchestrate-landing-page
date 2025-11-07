import { useEffect, useRef, useState } from "react";

interface UseStaggerAnimationOptions {
  delay?: number; // Delay before animation starts (ms)
  threshold?: number; // How much of the element must be visible
  triggerOnce?: boolean; // Only animate once
}

/**
 * Hook to trigger stagger animations on scroll
 * Returns a ref to attach to the element and a boolean indicating if it's visible
 */
export function useStaggerAnimation(
  options: UseStaggerAnimationOptions = {}
) {
  const { delay = 0, threshold = 0.1, triggerOnce = true } = options;
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          // Apply delay before showing
          setTimeout(() => {
            setIsVisible(true);
            if (triggerOnce) {
              setHasAnimated(true);
            }
          }, delay);

          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce && !entry.isIntersecting) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: "0px", // Trigger when element enters viewport
      }
    );

    // Small delay to ensure DOM is ready
    requestAnimationFrame(() => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [delay, threshold, triggerOnce, hasAnimated]);

  return { ref, isVisible };
}

/**
 * Get stagger delay for sequential animations
 * @param index - Index of the element in sequence
 * @param baseDelay - Base delay in milliseconds (default: 150ms)
 */
export function getStaggerDelay(index: number, baseDelay: number = 150): number {
  return index * baseDelay;
}

