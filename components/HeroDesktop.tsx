"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Heading, Text, Button, Accordion, Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui";
import { getStaggerDelay } from "@/hooks/useStaggerAnimation";
import { Database, UserSearch, LayoutList, Calendar, CircleQuestionMark, MessageSquareDot, LayoutTemplate, GitMerge, Flame, LineChart, Check } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

// Constants defined outside component to prevent recreation on every render
const ROTATION_INTERVAL_MS = 10000;
const IMAGE_TRANSITION_DURATION_MS = 180;

const tabs = [
  { label: "Without Orchestrate", id: 0 },
  { label: "With Orchestrate", id: 1 },
  { label: "Comparison", id: 2 },
] as const;

const tabImages = [
  {
    id: 0,
    src: "/without-orchestrate.svg",
    alt: "Dashboard view without Orchestrate",
  },
  {
    id: 1,
    src: "/with-orchestrate.svg",
    alt: "Dashboard view with Orchestrate",
  },
  {
    id: 2,
    src: "/orchestrate-vs-non-orchestrate.svg",
    alt: "Comparison between Orchestrate and a traditional setup",
  },
] as const;

export function HeroDesktop() {
  const [activeTab, setActiveTab] = useState(0);
  const [imageTab, setImageTab] = useState(0);
  const [isImageVisible, setIsImageVisible] = useState(true);
  const [progressKey, setProgressKey] = useState(0);
  const rotateIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const fadeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Handle image fade transition with cleanup
  useEffect(() => {
    if (activeTab === imageTab) return;

    setIsImageVisible(false);

    fadeTimeoutRef.current = setTimeout(() => {
      setImageTab(activeTab);
      requestAnimationFrame(() => setIsImageVisible(true));
    }, IMAGE_TRANSITION_DURATION_MS);

    return () => {
      if (fadeTimeoutRef.current) {
        clearTimeout(fadeTimeoutRef.current);
      }
    };
  }, [activeTab, imageTab]);

  // Memoized function to start/restart timers
  const startTimers = useCallback(() => {
    // Clear existing interval to prevent memory leaks
    if (rotateIntervalRef.current) {
      clearInterval(rotateIntervalRef.current);
      rotateIntervalRef.current = null;
    }

    // Reset progress animation by changing key
    setProgressKey((prev) => prev + 1);

    // Start rotation interval
    rotateIntervalRef.current = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
      setProgressKey((prev) => prev + 1);
    }, ROTATION_INTERVAL_MS);
  }, []);

  // Auto-rotate tabs with cleanup on unmount
  useEffect(() => {
    startTimers();

    return () => {
      if (rotateIntervalRef.current) {
        clearInterval(rotateIntervalRef.current);
        rotateIntervalRef.current = null;
      }
    };
  }, [startTimers]);

  // Handle manual tab click
  const handleTabClick = useCallback((tabId: number) => {
    setActiveTab(tabId);
    startTimers();
  }, [startTimers]);

  const activeImage = tabImages.find((tabImage) => tabImage.id === imageTab) ?? tabImages[0];

  return (
    <main className="hidden block xl:block">
      <section className="mt-40">
        <article className="text-center px-30 pb-40">
          <AnimatedSection delay={getStaggerDelay(0)}>
            <Heading
              as="h1"
              className="text-[64px] leading-[1.1] font-semibold mb-8 tracking-tight max-w-[540px]"
            >
              Product execution, augmented
            </Heading>
          </AnimatedSection>
          <AnimatedSection delay={getStaggerDelay(0.5)}>
            <div className="flex items-end justify-between gap-6">
              <Text
                size="lg"
                className="text-gray-600 leading-relaxed max-w-[530px]"
              >
                Orchestrate connects your strategic goals to the product changes that actually move them. It learns from every product change, proves what drives impact, and tells you what to build next
              </Text>
              <Button variant="primary" size="lg" className="px-6 text-sm font-medium" asChild>
                <a href="/contact">Book demo</a>
              </Button>
            </div>
          </AnimatedSection>
        </article>

        {/* Tabs */}
        <div className="px-30" role="tablist" aria-label="Dashboard views">
          <AnimatedSection delay={getStaggerDelay(1)}>
            <div className="flex justify-center gap-12">
              {tabs.map((tab) => (
                <div key={tab.id} className="flex flex-col items-center">
                  <button
                    role="tab"
                    onClick={() => handleTabClick(tab.id)}
                    aria-selected={activeTab === tab.id}
                    aria-controls={`tabpanel-${tab.id}`}
                    className={`pb-4 px-1 text-lg font-medium transition-all cursor-pointer focus:outline-none w-[300px] ${activeTab === tab.id
                      ? "text-gray-900"
                      : "text-gray-500 hover:text-gray-700"
                      }`}
                  >
                    {tab.label}
                  </button>
                  {/* Progress Bar - Only visible for active tab */}
                  {activeTab === tab.id && (
                    <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        key={progressKey}
                        className="h-full animate-progress bg-gradient-to-r from-[#f3e7d9] to-[#e9cbaf]"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* 986 x 543  p-32*/}

        {/* Dashboard Mockup */}
        <AnimatedSection delay={getStaggerDelay(1.5)}>
          <figure
            className="py-16 bg-[url(/gradient-blue-yellow-backgrop.png)] bg-cover bg-center bg-no-repeat"
            role="tabpanel"
            id={`tabpanel-${activeTab}`}
            aria-labelledby={`tab-${activeTab}`}
          >
            <div
              className={`flex justify-center items-center w-full h-[700px] rounded-lg transition-opacity duration-[400ms] ease-[cubic-bezier(0.44,0,0.56,1)] ${isImageVisible ? "opacity-100" : "opacity-0"
                }`}
            >
              <img
                key={activeImage.id}
                src={activeImage.src}
                alt={activeImage.alt}
                className="rounded-lg h-full object-cover"
              />
            </div>
          </figure>
        </AnimatedSection>
      </section>

      {/* Features Section */}
      <section id="product-delta" className="mt-30 bg-white">
        <div className="grid grid-cols-[0.9fr_1fr] gap-12 items-center pr-8">
          <figure
            className="rounded-l-none rounded-r-xl h-full bg-[url(/gradient-blue-yellow-backgrop.png)] bg-cover bg-center bg-no-repeat pt-6 pb-6 pr-6"
          >
            <div className="h-full bg-white rounded-r-xl flex">
              <img
                src="/strategy-tree.svg"
                alt="Strategy Tree"
                className="w-full h-auto scale-96 "
              />
            </div>
          </figure>
          <article >
            <Heading
              as="h2"
              className="text-[48px] leading-[1.15] font-semibold mb-5"
            >
              Your team has 100 ideas.<br />
              We tell you which matter.
            </Heading>
            <Text className="text-gray-600 pb-10 text-[18px] leading-[1.6]" weight="medium">
              Orchestrate analyzes your strategy, historical data,<br />
              and current signals to propose ranked product changes, so <br />
              you only invest in what's most likely to move your metrics.
            </Text>

            <ul className="space-y-[10px]">
              <li className="flex items-center gap-4">
                <Database size={24} color="#4778F5" className="flex-shrink-0" aria-hidden="true" />
                <Text size="lg" className="leading-relaxed" weight="medium">
                  Ranked by strategic impact × probability of success
                </Text>
              </li>
              <li className="flex items-center gap-4">
                <UserSearch size={24} color="#4778F5" className="flex-shrink-0" aria-hidden="true" />
                <Text size="lg" className="leading-relaxed" weight="medium">
                  Multi-modal evidence for each proposal <br />
                  quant + qual + historical)
                </Text>
              </li>
              <li className="flex items-center gap-4">
                <LayoutList size={24} color="#4778F5" className="flex-shrink-0" aria-hidden="true" />
                <Text size="lg" className="leading-relaxed" weight="medium">
                  Export deltas directly into Figma, Cursor, Claude <br />
                  Code, or build your own way
                </Text>
              </li>
              <li className="flex items-center gap-4">
                <LayoutList size={24} color="#4778F5" className="flex-shrink-0" aria-hidden="true" />
                <Text size="lg" className="leading-relaxed" weight="medium">
                  Learns from every shipped change, proposals get<br />
                  smarter over time
                </Text>
              </li>
            </ul>
          </article>
        </div>
      </section>

      {/* Additional Features Section */}
      <section id="fuse-evaluate" className="mt-32 bg-white">
        <div className="grid grid-cols-[1fr_0.98fr] gap-12 items-center">
          <article className="pl-30">
            <Heading
              as="h2"
              className="text-[48px] leading-[1.15] font-semibold mb-5"
            >
              Confidence without waiting for stat sig.
            </Heading>
            <Text className="text-gray-600 pb-10 text-[18px] leading-[1.6]" weight="medium">
              Fuse validates changes by synthesizing early metrics, user feedback, and historical patterns, giving you the rigor of A/B testing with a fraction of the time and sample size.
            </Text>

            <ul className="space-y-[10px]">
              <li className="flex items-center gap-4">
                <Calendar size={24} color="#4778F5" className="flex-shrink-0" aria-hidden="true" />
                <Text size="lg" className="leading-relaxed" weight="medium">
                  Triangulate across quantitative, qualitative, and historical signals
                </Text>
              </li>
              <li className="flex items-center gap-4">
                <CircleQuestionMark size={24} color="#4778F5" className="flex-shrink-0" aria-hidden="true" />
                <Text size="lg" className="leading-relaxed" weight="medium">
                  When signals align, you have confidence to ship
                </Text>
              </li>
              <li className="flex items-center gap-4">
                <MessageSquareDot size={24} color="#4778F5" className="flex-shrink-0" aria-hidden="true" />
                <Text size="lg" className="leading-relaxed" weight="medium">
                  Real-time confidence scoring as evidence accumulates
                </Text>
              </li>
              <li className="flex items-center gap-4">
                <LayoutTemplate size={24} color="#4778F5" className="flex-shrink-0" aria-hidden="true" />
                <Text size="lg" className="leading-relaxed" weight="medium">
                  Integrates with Amplitude, Mixpanel, PostHog, Dovetail, and experimentation tools
                </Text>
              </li>
            </ul>
          </article>

          {/* Feature Image */}

          <figure
            className="h-[104%] rounded-l-xl bg-[url(/gradient-blue-yellow-backgrop.png)] bg-cover bg-center bg-no-repeat pt-6 pb-6 pl-6"
          >
            <div className="h-full bg-white rounded-l-xl pt-4 pl-4 flex">
              <img
                src="/signal-fusion.svg"
                alt="fusion of various signals"
                className="w-full h-auto origin-top-left"
              />
            </div>
          </figure>
        </div>
      </section>

    {/* Additionahl Features Section */}
      <section id="impact-trace" className="mt-32 bg-white">
        <div className="grid grid-cols-[0.9fr_1fr] gap-12 items-center pr-30">
          {/* Feature Image */}
          <figure
            className="rounded-l-none rounded-r-xl h-full bg-[url(/gradient-blue-yellow-backgrop.png)] bg-cover bg-center bg-no-repeat pt-6 pb-6 pr-6"
          >
            <div className="h-full bg-white rounded-r-xl flex">
              <img
                src="/impact-attribution.svg"
                alt="Impact Attribution"
                className="w-full h-auto scale-96 "
              />
            </div>
          </figure>

          <article >
            <Heading
              as="h2"
              className="text-[48px] leading-[1.15] font-semibold mb-5"
            >
              Attribution that accounts for the real world.
            </Heading>
            <Text className="text-gray-600 pb-10 text-[18px] leading-[1.6]" weight="medium">
              Impact Trace isolates the impact of each product change while adjusting for seasonality, concurrent launches, and time-based effects, giving you confident impact attribution, not just correlation.
            </Text>

            <ul className="space-y-[10px]">
              <li className="flex items-center gap-4">
                <Calendar size={24} color="#4778F5" className="flex-shrink-0" aria-hidden="true" />
                <Text size="lg" className="leading-relaxed" weight="medium">
                  Attribution adjusts for seasonality, concurrent work, and time since launch
                </Text>
              </li>
              <li className="flex items-center gap-4">
                <CircleQuestionMark size={24} color="#4778F5" className="flex-shrink-0" aria-hidden="true" />
                <Text size="lg" className="leading-relaxed" weight="medium">
                  Monitor risks, guardrails and tradeoffs as effects accumulate over time
                </Text>
              </li>
              <li className="flex items-center gap-4">
                <MessageSquareDot size={24} color="#4778F5" className="flex-shrink-0" aria-hidden="true" />
                <Text size="lg" className="leading-relaxed" weight="medium">
                  See what data informed each choice, which alternatives were considered, and why features were shipped or killed
                </Text>
              </li>
              <li className="flex items-center gap-4">
                <MessageSquareDot size={24} color="#4778F5" className="flex-shrink-0" aria-hidden="true" />
                <Text size="lg" className="leading-relaxed" weight="medium">
                  See how changes performed across audiences, over time and the connection from product changes to goals and strategic outcomes
                </Text>
              </li>
            </ul>
          </article>
        </div>
      </section>

      {/* knowledge graph section */}
      <section id="knowledge-graph" className="mt-32 bg-white">
        <div className="grid grid-cols-[1fr_0.98fr] gap-12 items-center">
          <article className="pl-30">
            <Heading
              as="h2"
              className="text-[48px] leading-[1.15] font-semibold mb-5"
            >
              Institutional memory that compounds over time.
            </Heading>
            <Text className="text-gray-600 pb-10 text-[18px] leading-[1.6]" weight="medium">
              Knowledge Graph captures the full context of every product decision, what worked, what failed, for whom, and why, creating a compound learning system that makes your organization smarter over time.
            </Text>

            <ul className="space-y-[10px]">
              <li className="flex items-center gap-4">
                <Calendar size={24} color="#4778F5" className="flex-shrink-0" aria-hidden="true" />
                <Text size="lg" className="leading-relaxed" weight="medium">
                  Automatic context capture: Every decision, alternative, and outcome with full reasoning, not just results
                </Text>
              </li>
              <li className="flex items-center gap-4">
                <CircleQuestionMark size={24} color="#4778F5" className="flex-shrink-0" aria-hidden="true" />
                <Text size="lg" className="leading-relaxed" weight="medium">
                  Cross-team intelligence: What growth learns informs retention, what one team discovers helps everyone
                </Text>
              </li>
              <li className="flex items-center gap-4">
                <MessageSquareDot size={24} color="#4778F5" className="flex-shrink-0" aria-hidden="true" />
                <Text size="lg" className="leading-relaxed" weight="medium">
                  Powers future decisions: Historical patterns feed Delta Proposals and validation confidence
                </Text>
              </li>
              <li className="flex items-center gap-4">
                <LayoutTemplate size={24} color="#4778F5" className="flex-shrink-0" aria-hidden="true" />
                <Text size="lg" className="leading-relaxed" weight="medium">
                  Enterprise-grade protection: Self-hosted or managed, your learnings stay under your control
                </Text>
              </li>
            </ul>
          </article>

          {/* Feature Image */}

          <figure
            className="h-[104%] rounded-l-xl bg-[url(/gradient-blue-yellow-backgrop.png)] bg-cover bg-center bg-no-repeat pt-6 pb-6 pl-6"
          >
            <div className="h-full bg-white rounded-l-xl pt-4 pl-4 flex">
              <img
                src="/knowledge-map.svg"
                alt="Knowledge Graph"
                className="w-full h-auto"
              />
            </div>
          </figure>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="mt-62 bg-white px-30">
        <Card
          variant="outlined"
          padding="lg"
          className="rounded-3xl border border-gray-200 bg-pricing-gradient"
        >
          <CardHeader className="flex flex-row items-start justify-between gap-4 mb-6">
            <div className="flex-1">
              <Heading as="h3" weight="bold" className="text-3xl mb-8">
                Custom Pricing
              </Heading>

              <ul className="space-y-[10px]">
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-base font-normal text-primary text-left">Strategy-to-Metrics setup (OKR ingestion, metrics tree)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-base font-normal text-primary text-left">Native integrations (Amplitude/Mixpanel, Optimizely/PostHog, Figma/Linear/GitHub)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-base font-normal text-primary text-left">Executive attribution dashboard + learning bank</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-base font-normal text-primary text-left">Dedicated product partner (weekly working session, clear SLAs)</span>
                </li>
              </ul>
            </div>
            <div className="px-4 py-2 rounded-full text-sm font-medium bg-badge-light">
              <span className="text-gradient-purple-orange">
                Design Partnership
              </span>
            </div>
          </CardHeader>

          <CardFooter className="pt-6 mt-6 border-t-1">
            <Button variant="primary" size="lg" fullWidth asChild>
              <a href="/contact">Book demo</a>
            </Button>
          </CardFooter>
        </Card>
      </section>

      {/* FAQ Section */}
      <section className="mt-62 flex gap-6 px-30">
        <div className="flex flex-col gap-6">
          <Heading as="h2" className="text-[48px]" weight="semibold">
            FAQ
          </Heading>
          <Text size="lg" weight="normal" variant="secondary" className="leading-relaxed ">
            Find everything you need to know about Orchestrate and how we augment product development
          </Text>
        </div>
        <Accordion
          items={[
            {
              title: "What is Orchestrate?",
              content:
                "We connect strategy to product development by defining builds, validating them efficiently, and tracking impact against business goals.",
              defaultOpen: false,
            },
            {
              title: "Do we need to replace our current tools?",
              content:
                "No, Orchestrate is a layer that integrates with your existing analytics, experimentation, and research tools, coordinating them strategically.",
            },
            {
              title: "How does Orchestrate make product decisions?",
              content:
                "We fuse quantitative, qualitative, and historical data to deliver confident, rigorously-backed product decisions more rapidly. Our suggested directions always come with clear rationale.",
            },
            {
              title: "Is my data secure with Orchestrate?",
              content:
                "We integrate with your existing data warehouse and offer self-hosted or hosted options, ensuring your data remains private and secure.",
            },
          ]}
          allowMultiple={true}
        />
      </section>

      <section className="py-20 px-30">
        <Card
          variant="outlined"
          className="rounded-3xl border border-gray-200 bg-[url(/gradient-black-green-background.png)] bg-cover bg-center bg-no-repeat py-20 px-14"
        >
          <CardHeader>
            <CardTitle className="text-[48px] font-bold mb-1 text-white text-center">
              Stop guessing. Start executing
            </CardTitle>
          </CardHeader>

          <CardContent className="mt-6 px-8">
            <Text size="xl" weight="normal" className="text-white text-center opacity-70">
              Join product organizations that turned strategy docs into shipped outcomes.
              Upload your strategy doc and see your first delta proposals today.
            </Text>
          </CardContent>

          <CardFooter className="pt-5 mt-5 border-t-0 flex justify-center">
            <Button variant="secondary" size="md" asChild>
              <a href="/contact">Book demo</a>
            </Button>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
}

