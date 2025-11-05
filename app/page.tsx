"use client";

import { Heading, Text, Button } from "@/components/ui";
import { Navigation } from "@/components/Navigation";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="w-full bg-gray-50 min-h-[calc(100vh-64px)] lg:min-h-[calc(100vh-80px)] flex">
          <div className="max-w-[1440px] mx-auto w-full">
            {/* Mobile Layout (< 768px) */}
            <div className="block md:hidden space-y-8 px-5 py-14">
              <div className="space-y-6">
                <Heading
                  as="h1"
                  className="text-[40px] leading-[1.1] font-bold tracking-tight"
                >
                  Product execution, augmented
                </Heading>
                <Text
                  size="lg"
                  variant="secondary"
                  className="leading-relaxed max-w-md pt-5"
                >
                  Orchestrate is your agentic product strategist. It learns from
                  every product change, proves what drives impact, and sharpens
                  what you build next.
                </Text>
              </div>

              <div className="flex flex-row gap-3">
                <Button variant="primary" size="lg" fullWidth>
                  Book a demo
                </Button>
                <Button variant="outline" size="lg" fullWidth>
                  Talk to sales
                </Button>
              </div>
            </div>

            {/* Tablet Layout (768px - 1023px) */}
            <div className="hidden md:block lg:hidden px-8">
              <div className="flex items-center justify-between gap-12">
                <div className="space-y-6 flex-1">
                  <Heading
                    as="h1"
                    className="text-[56px] leading-[1.1] font-bold tracking-tight"
                  >
                    Product execution, augmented
                  </Heading>
                  <Text
                    size="xl"
                    variant="secondary"
                    className="leading-relaxed max-w-xl"
                  >
                    Orchestrate is your agentic product strategist. It learns
                    from every product change, proves what drives impact, and
                    sharpens what you build next.
                  </Text>
                </div>

                <div className="flex flex-col gap-3 min-w-[200px]">
                  <Button variant="primary" size="lg">
                    Book a demo
                  </Button>
                  <Button variant="outline" size="lg">
                    Talk to sales
                  </Button>
                </div>
              </div>
            </div>

            {/* Desktop Layout (>= 1024px) */}
            <div className="hidden lg:block px-30">
              <div className="flex items-center justify-between gap-16">
                <div className="space-y-6 flex-1 max-w-2xl">
                  <Heading
                    as="h1"
                    className="text-[64px] leading-[1.1] font-bold tracking-tight"
                  >
                    Product execution, augmented
                  </Heading>
                  <Text
                    size="xl"
                    variant="secondary"
                    className="leading-relaxed text-[18px]"
                  >
                    Orchestrate is your agentic product strategist. It learns
                    from every product change, proves what drives impact, and
                    sharpens what you build next.
                  </Text>
                </div>

                <div className="flex gap-4 items-center">
                  <Button variant="primary" size="lg" className="whitespace-nowrap">
                    Book a demo
                  </Button>
                  <Button variant="outline" size="lg" className="whitespace-nowrap">
                    Talk to sales
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
