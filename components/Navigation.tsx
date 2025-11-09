"use client";

import { useState } from "react";
import { Button } from "@/components/ui";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [agenticToolsOpen, setAgenticToolsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    // Get all elements with this ID
    const elements = document.querySelectorAll(sectionId);
    
    if (elements.length === 0) {
      return;
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
    
    // Find the visible element
    let targetElement: HTMLElement | null = null;
    
    for (let i = 0; i < elements.length; i++) {
      const el = elements[i];
      if (el instanceof HTMLElement) {
        const isVisible = isElementVisible(el);
        
        if (isVisible) {
          targetElement = el;
          break; // Use first visible element
        }
      }
    }
    
    if (targetElement) {
      // Calculate absolute position from top of document
      const rect = targetElement.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const absoluteTop = rect.top + scrollTop;
      const navHeight = 80; // Height of sticky navigation
      const finalPosition = Math.max(0, absoluteTop - navHeight);
      
      // Perform the scroll
      window.scrollTo({
        top: finalPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setAgenticToolsOpen(false);
    setMobileMenuOpen(false);
    
    // Scroll first
    scrollToSection(sectionId);
    
    // Then update URL without triggering hashchange
    window.history.replaceState(null, '', sectionId);
  };

  return (
    <nav className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="px-4 sm:px-6 md:px-8 xl:px-30">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Left Section with Agentic Tools Dropdown */}
          <div className="flex items-center gap-2">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <img
                src="/logo.svg"
                alt="orchestrate"
                width="120"
                height="27"
                className="h-[27px] w-auto"
              />
            </a>
            {/* Agentic Tools Dropdown */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setAgenticToolsOpen(!agenticToolsOpen)}
                className="flex items-center gap-2 text-sm text-gray-700 hover:text-gray-950 transition-colors"
              >
                Agentic Tools
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transition-transform ${
                    agenticToolsOpen ? "rotate-180" : ""
                  }`}
                >
                  <path
                    d="M4 6L8 10L12 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Agentic Tools Dropdown Menu */}
              {agenticToolsOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setAgenticToolsOpen(false)}
                  />
                  <div className="absolute top-full left-0 mt-2 -translate-x-9 w-[680px] bg-white rounded-lg shadow-lg border border-gray-200 p-6 z-20">
                    <div className="grid grid-cols-2 gap-6">
                      {/* Product-delta */}
                      <a
                        href="#product-delta"
                        className="flex gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                        onClick={(e) => handleAnchorClick(e, "#product-delta")}
                      >
                        <div className="flex-shrink-0">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-700">
                            <rect x="4" y="4" width="6" height="6" stroke="currentColor" strokeWidth="1.5" />
                            <rect x="14" y="4" width="6" height="6" stroke="currentColor" strokeWidth="1.5" />
                            <rect x="4" y="14" width="6" height="6" stroke="currentColor" strokeWidth="1.5" />
                            <rect x="14" y="14" width="6" height="6" stroke="currentColor" strokeWidth="1.5" />
                          </svg>
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="text-sm font-medium text-gray-900">Product-delta</div>
                          <div className="text-sm text-gray-600">Know what to build before you build</div>
                        </div>
                      </a>

                      {/* Impact-trace */}
                      <a
                        href="#impact-trace"
                        className="flex gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                        onClick={(e) => handleAnchorClick(e, "#impact-trace")}
                      >
                        <div className="flex-shrink-0">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-700">
                            <rect x="4" y="4" width="6" height="6" stroke="currentColor" strokeWidth="1.5" />
                            <rect x="14" y="4" width="6" height="6" stroke="currentColor" strokeWidth="1.5" />
                            <rect x="4" y="14" width="6" height="6" stroke="currentColor" strokeWidth="1.5" />
                            <rect x="14" y="14" width="6" height="6" stroke="currentColor" strokeWidth="1.5" />
                          </svg>
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="text-sm font-medium text-gray-900">Impact-trace</div>
                          <div className="text-sm text-gray-600">Connect product changes to business goals</div>
                        </div>
                      </a>

                      {/* Fuse-evaluate */}
                      <a
                        href="#fuse-evaluate"
                        className="flex gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                        onClick={(e) => handleAnchorClick(e, "#fuse-evaluate")}
                      >
                        <div className="flex-shrink-0">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-700">
                            <path d="M12 4L4 8L12 12L20 8L12 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                            <path d="M4 12L12 16L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                            <path d="M4 16L12 20L20 16" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="text-sm font-medium text-gray-900">Fuse-evaluate</div>
                          <div className="text-sm text-gray-600">Confident decisions without waiting for stat sig</div>
                        </div>
                      </a>

                      {/* Knowledge-graph */}
                      <a
                        href="#knowledge-graph"
                        className="flex gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                        onClick={(e) => handleAnchorClick(e, "#knowledge-graph")}
                      >
                        <div className="flex-shrink-0">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-700">
                            <path d="M12 4L4 8L12 12L20 8L12 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                            <path d="M4 12L12 16L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                            <path d="M4 16L12 20L20 16" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="text-sm font-medium text-gray-900">Knowledge-graph</div>
                          <div className="text-sm text-gray-600">Learn what works across your product</div>
                        </div>
                      </a>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="/contact"
              className="text-sm text-gray-700 hover:text-gray-950 transition-colors"
            >
              Contact us
            </a>

            <Button variant="ghost" size="md" asChild>
              <a href="/contact">Book demo</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-gray-950 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 12H21M3 6H21M3 18H21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => setAgenticToolsOpen(!agenticToolsOpen)}
                className="flex items-center justify-between text-sm text-gray-700 hover:text-gray-950 transition-colors"
              >
                Agentic Tools
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transition-transform ${
                    agenticToolsOpen ? "rotate-180" : ""
                  }`}
                >
                  <path
                    d="M4 6L8 10L12 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {agenticToolsOpen && (
                <div className="pl-4 flex flex-col space-y-3">
                  <a
                    href="#product-delta"
                    className="flex gap-3 text-sm hover:text-gray-950 transition-colors"
                    onClick={(e) => handleAnchorClick(e, "#product-delta")}
                  >
                    <div className="flex-shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-700">
                        <rect x="4" y="4" width="6" height="6" stroke="currentColor" strokeWidth="1.5" />
                        <rect x="14" y="4" width="6" height="6" stroke="currentColor" strokeWidth="1.5" />
                        <rect x="4" y="14" width="6" height="6" stroke="currentColor" strokeWidth="1.5" />
                        <rect x="14" y="14" width="6" height="6" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="font-medium text-gray-900">Product-delta</div>
                      <div className="text-xs text-gray-600">Know what to build before you build</div>
                    </div>
                  </a>

                  <a
                    href="#impact-trace"
                    className="flex gap-3 text-sm hover:text-gray-950 transition-colors"
                    onClick={(e) => handleAnchorClick(e, "#impact-trace")}
                  >
                    <div className="flex-shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-700">
                        <rect x="4" y="4" width="6" height="6" stroke="currentColor" strokeWidth="1.5" />
                        <rect x="14" y="4" width="6" height="6" stroke="currentColor" strokeWidth="1.5" />
                        <rect x="4" y="14" width="6" height="6" stroke="currentColor" strokeWidth="1.5" />
                        <rect x="14" y="14" width="6" height="6" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="font-medium text-gray-900">Impact-trace</div>
                      <div className="text-xs text-gray-600">Connect product changes to business goals</div>
                    </div>
                  </a>

                  <a
                    href="#fuse-evaluate"
                    className="flex gap-3 text-sm hover:text-gray-950 transition-colors"
                    onClick={(e) => handleAnchorClick(e, "#fuse-evaluate")}
                  >
                    <div className="flex-shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-700">
                        <path d="M12 4L4 8L12 12L20 8L12 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                        <path d="M4 12L12 16L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                        <path d="M4 16L12 20L20 16" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="font-medium text-gray-900">Fuse-evaluate</div>
                      <div className="text-xs text-gray-600">Confident decisions without waiting for stat sig</div>
                    </div>
                  </a>

                  <a
                    href="#knowledge-graph"
                    className="flex gap-3 text-sm hover:text-gray-950 transition-colors"
                    onClick={(e) => handleAnchorClick(e, "#knowledge-graph")}
                  >
                    <div className="flex-shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-700">
                        <path d="M12 4L4 8L12 12L20 8L12 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                        <path d="M4 12L12 16L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                        <path d="M4 16L12 20L20 16" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="font-medium text-gray-900">Knowledge-graph</div>
                      <div className="text-xs text-gray-600">Learn what works across your product</div>
                    </div>
                  </a>
                </div>
              )}

              <a
                href="/contact"
                className="text-sm text-gray-700 hover:text-gray-950 transition-colors"
              >
                Contact us
              </a>

              <Button variant="primary" size="md" fullWidth asChild>
                <a href="/contact">Book demo</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

