"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItemProps {
  /**
   * The title of the accordion item
   */
  title: string;
  
  /**
   * The content to display when expanded
   */
  content: React.ReactNode;
  
  /**
   * Whether the item is initially open
   */
  defaultOpen?: boolean;
  
  /**
   * Additional class name for the wrapper
   */
  className?: string;
}

export const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ title, content, defaultOpen = false, className }, ref) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
      <div
        ref={ref}
        className={cn(
          "border-b border-gray-200 last:border-b-0 transition-colors duration-300",
          isOpen ? "bg-gray-50" : "bg-transparent",
          className
        )}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "w-full flex items-center justify-between py-5 text-left transition-colors hover:text-gray-600",
            isOpen ? "px-5" : ""
          )}
          aria-expanded={isOpen}
        >
          <span className="text-lg font-semibold text-gray-950 pr-4">
            {title}
          </span>
          <div className="flex-shrink-0">
            <div
              className={cn(
                "transition-transform duration-300 ease-in-out",
                isOpen ? "rotate-180" : "rotate-0"
              )}
            >
              {isOpen ? (
                <Minus size={24} className="text-gray-950" />
              ) : (
                <Plus size={24} className="text-gray-950" />
              )}
            </div>
          </div>
        </button>
        
        <div
          className={cn(
            "overflow-hidden transition-all duration-300 ease-in-out",
            isOpen ? "max-h-[500px] opacity-100 pb-5" : "max-h-0 opacity-0"
          )}
        >
          <div className={cn(
            "text-base text-gray-600 leading-relaxed pr-12",
            isOpen ? "px-5" : ""
          )}>
            {content}
          </div>
        </div>
      </div>
    );
  }
);

AccordionItem.displayName = "AccordionItem";

export interface AccordionProps {
  /**
   * Array of accordion items
   */
  items: Array<{
    title: string;
    content: React.ReactNode;
    defaultOpen?: boolean;
  }>;
  
  /**
   * Whether only one item can be open at a time
   */
  allowMultiple?: boolean;
  
  /**
   * Additional class name for the wrapper
   */
  className?: string;
}

export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ items, allowMultiple = true, className }, ref) => {
    const [openIndexes, setOpenIndexes] = useState<number[]>(
      items
        .map((item, index) => (item.defaultOpen ? index : -1))
        .filter((index) => index !== -1)
    );

    const handleToggle = (index: number) => {
      if (allowMultiple) {
        setOpenIndexes((prev) =>
          prev.includes(index)
            ? prev.filter((i) => i !== index)
            : [...prev, index]
        );
      } else {
        setOpenIndexes((prev) =>
          prev.includes(index) ? [] : [index]
        );
      }
    };

    return (
      <div ref={ref} className={cn("w-full", className)}>
        {items.map((item, index) => (
          <div
            key={index}
            className={cn(
              "border-b border-gray-200 last:border-b-0 transition-colors duration-300 rounded-lg px-5 mb-2",
              openIndexes.includes(index) ? "bg-gray-100" : "bg-transparent"
            )}
          >
            <button
              onClick={() => handleToggle(index)}
              className={cn(
                "w-full flex items-center justify-between py-5 text-left transition-colors hover:text-gray-600",
              )}
              aria-expanded={openIndexes.includes(index)}
            >
              <span className="text-lg font-semibold text-gray-950 pr-4">
                {item.title}
              </span>
              <div className="flex-shrink-0">
                <div
                  className={cn(
                    "transition-transform duration-300 ease-in-out",
                    openIndexes.includes(index) ? "rotate-180" : "rotate-0"
                  )}
                >
                  {openIndexes.includes(index) ? (
                    <Minus size={24} className="text-gray-950" />
                  ) : (
                    <Plus size={24} className="text-gray-950" />
                  )}
                </div>
              </div>
            </button>
            
            <div
              className={cn(
                "overflow-hidden transition-all duration-300 ease-in-out",
                openIndexes.includes(index)
                  ? "max-h-[500px] opacity-100 pb-5"
                  : "max-h-0 opacity-0"
              )}
            >
              <div className={cn(
                "text-base text-gray-600 leading-relaxed pr-12",
                openIndexes.includes(index) ? "px-5" : ""
              )}>
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
);

Accordion.displayName = "Accordion";

