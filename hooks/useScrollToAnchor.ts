import { useEffect } from "react";

export function useScrollToAnchor() {
  useEffect(() => {
    const performScroll = () => {
      const hash = window.location.hash;
      if (!hash) return;
      
      const elements = document.querySelectorAll(hash);
      if (elements.length === 0) {
        return false;
      }
      
      // Helper to check if element and all parents are visible
      const isElementVisible = (element: HTMLElement): boolean => {
        let el: HTMLElement | null = element;
        while (el) {
          const style = window.getComputedStyle(el);
          if (style.display === 'none' || style.visibility === 'hidden') {
            return false;
          }
          el = el.parentElement;
        }
        const rect = element.getBoundingClientRect();
        return rect.height > 0;
      };
      
      // Find first visible element
      for (let i = 0; i < elements.length; i++) {
        const el = elements[i];
        if (el instanceof HTMLElement) {
          const isVisible = isElementVisible(el);
          
          if (isVisible) {
            // Calculate scroll position
            const rect = el.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const absoluteTop = rect.top + scrollTop;
            const finalPosition = Math.max(0, absoluteTop - 80);
            
            window.scrollTo({
              top: finalPosition,
              behavior: 'smooth'
            });
            
            return true;
          }
        }
      }
      
      return false;
    };

    // Try scrolling on load with retries
    if (window.location.hash) {
      let attempts = 0;
      const tryScroll = () => {
        if (performScroll() || attempts >= 10) {
          return;
        }
        attempts++;
        setTimeout(tryScroll, 100);
      };
      
      // Start after React renders
      setTimeout(tryScroll, 100);
    }

    // Handle hash changes
    const handleHashChange = () => {
      setTimeout(performScroll, 100);
    };
    
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);
}

