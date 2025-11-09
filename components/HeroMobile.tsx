"use client";

import { useEffect, useState, useRef } from "react";
import { Heading, Text, Button, Card, CardHeader, CardTitle, CardContent, CardFooter, Accordion } from "@/components/ui";
import { Database, UserSearch, LayoutList, Calendar, CircleQuestionMark, MessageSquareDot, LayoutTemplate, GitMerge, Flame, LineChart, Check } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { getStaggerDelay } from "@/hooks/useStaggerAnimation";

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
    alt: "Dashboard view showcasing strategic clarity",
  },
  {
    id: 1,
    src: "/with-orchestrate.svg",
    alt: "Dashboard view highlighting smart recommendations",
  },
  {
    id: 2,
    src: "/orchestrate-vs-non-orchestrate.svg",
    alt: "Dashboard comparison illustrating impact attribution",
  },
] as const;

export function HeroMobile() {
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

  // Auto-rotate tabs with cleanup on unmount
  useEffect(() => {
    rotateIntervalRef.current = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
      setProgressKey((prev) => prev + 1);
    }, ROTATION_INTERVAL_MS);

    return () => {
      if (rotateIntervalRef.current) {
        clearInterval(rotateIntervalRef.current);
        rotateIntervalRef.current = null;
      }
    };
  }, []);

  const activeImage = tabImages.find((image) => image.id === imageTab) ?? tabImages[0];

  return (
    <main className="block md:hidden space-y-8 mt-15">
      <section className="flex flex-col gap-8 mb-15 px-5">
        <article className="flex flex-col gap-5">
          <AnimatedSection delay={getStaggerDelay(0)}>
            <Heading
              as="h1"
              className="text-[36px] leading-[1.1] font-semibold tracking-tight"
            >
              Product execution, augmented
            </Heading>
          </AnimatedSection>
          <AnimatedSection delay={getStaggerDelay(0.5)}>
            <Text
              size="base"
              weight="semibold"
              variant="secondary"
              className="leading-relaxed max-w-md"
            >
              Orchestrate connects your strategic goals to the product changes that actually move them. It learns from every product change, proves what drives impact, and tells you what to build next
            </Text>
          </AnimatedSection>
        </article>
        <AnimatedSection delay={getStaggerDelay(1)} as="article" className="flex flex-row gap-3">
          <Button variant="primary" size="md" fullWidth asChild>
            <a href="/contact">Book demo</a>
          </Button>
        </AnimatedSection>
      </section>

      <AnimatedSection
        delay={getStaggerDelay(1.5)}
        as="section"
        className="flex flex-col w-full mb-15"
      >
        <Heading as="h6" align="center" className="text-[18px] font-medium mb-5">
          {tabs[activeTab].label}
        </Heading>

        {/* Progress Bar */}
        <div className="h-1 rounded-full overflow-hidden mx-3">
          <div
            key={progressKey}
            className="h-full mx-5 bg-gradient-to-r from-[#f3e7d9] to-[#e9cbaf] rounded-full animate-progress "
          />
        </div>

        <figure
          className="bg-[url(/gradient-blue-yellow-backgrop.png)] bg-cover bg-center p-4 w-full"
          role="tabpanel"
          id={`hero-mobile-tabpanel-${activeTab}`}
          aria-labelledby={`hero-mobile-heading`}
        >
          <div
            className={`w-full h-[236px] transition-opacity duration-[400ms] ease-[cubic-bezier(0.44,0,0.56,1)] ${isImageVisible ? "opacity-100" : "opacity-0"
              }`}
          >
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </figure>
      </AnimatedSection>

      <section id="product-delta" className="px-5 flex flex-col gap-10 mb-15">
        <AnimatedSection delay={getStaggerDelay(2)}>
          <Heading as="h3" weight="semibold" className="tracking-normal mb-5">
            Your team has 100 ideas. We tell you which matter.
          </Heading>
          <Text
            size="base"
            weight="medium"
            variant="secondary"
            className="leading-relaxed max-w-md pb-10"
          >
            Orchestrate analyzes your strategy, historical data, and current signals to propose ranked product changes, so you only invest in what's most likely to move your metrics.
          </Text>

          <li className="flex items-center gap-4 mb-[10px]">
            <Database size={24} color="#4778F5" className="flex-shrink-0" aria-hidden="true" />
            <Text size="base" className="leading-relaxed" weight="medium">
              Ranked by strategic impact × probability of success
            </Text>
          </li>
          <li className="flex items-center gap-4 mb-[10px]">
            <UserSearch size={24} color="#4778F5" className="flex-shrink-0" aria-hidden="true" />
            <Text size="base" className="leading-relaxed" weight="medium">
              Multi-modal evidence for each proposal (quant + qual + historical)
            </Text>
          </li>
          <li className="flex items-center gap-4 mb-[10px]">
            <LayoutList size={24} color="#4778F5" className="flex-shrink-0" aria-hidden="true" />
            <Text size="base" className="leading-relaxed" weight="medium">
              Export deltas directly into Figma, Cursor, Claude Code, or build your own way
            </Text>
          </li>
          <li className="flex items-center gap-4">
            <LayoutList size={24} color="#4778F5" className="flex-shrink-0" aria-hidden="true" />
            <Text size="base" className="leading-relaxed" weight="medium">
              Learns from every shipped change, proposals get smarter over time
            </Text>
          </li>
        </AnimatedSection>
      </section>

      <section className="px-5 mb-15">
        <figure
          className="rounded-xl h-[210px] bg-[url(/gradient-blue-yellow-backgrop.png)] bg-cover bg-center bg-no-repeat p-3"
        >
          <div className="h-full bg-white rounded-xl flex p-2">
            <img
              src="/strategy-tree.svg"
              alt="Strategy Tree"
              className="w-full h-auto"
            />
          </div>

        </figure>
      </section>

      <section id="fuse-evaluate" className="flex flex-col px-5 gap-10 mb-15">
        <article className="flex flex-col gap-5">
          <Heading as="h3" weight="semibold" className="tracking-normal">
            Confidence without waiting for stat sig.
          </Heading>
          <Text
            size="base"
            weight="semibold"
            variant="secondary"
            className="leading-relaxed max-w-md"
          >
            Fuse validates changes by synthesizing early metrics, user feedback, and historical patterns, giving you the rigor of A/B testing with a fraction of the time and sample size.

          </Text>
        </article>
        <ul className="flex flex-col gap-[10px]">
          <li className="flex items-center gap-4">
            <Calendar size={24} color="#4778F5" className="flex-shrink-0" aria-hidden="true" />
            <Text size="base" className="leading-relaxed" weight="medium">
              Triangulate across quantitative, qualitative, and historical signals
            </Text>
          </li>
          <li className="flex items-center gap-4">
            <CircleQuestionMark size={24} color="#4778F5" className="flex-shrink-0" aria-hidden="true" />
            <Text size="base" className="leading-relaxed" weight="medium">
              When signals align, you have confidence to ship
            </Text>
          </li>
          <li className="flex items-center gap-4">
            <MessageSquareDot size={24} color="#4778F5" className="flex-shrink-0" aria-hidden="true" />
            <Text size="base" className="leading-relaxed" weight="medium">
              Real-time confidence scoring as evidence accumulates
            </Text>
          </li>
          <li className="flex items-center gap-4">
            <LayoutTemplate size={24} color="#4778F5" className="flex-shrink-0" aria-hidden="true" />
            <Text size="base" className="leading-relaxed" weight="medium">
              Integrates with Amplitude, Mixpanel, PostHog, Dovetail, and experimentation tools
            </Text>
          </li>
        </ul>
      </section>

      <section className="px-5 mb-15">
        <figure
          className="rounded-xl h-[210px] bg-[url(/gradient-blue-yellow-backgrop.png)] bg-cover bg-center bg-no-repeat p-3"
        >
          <div className="h-full bg-white rounded-xl flex p-2">
            <img
              src="/signal-fusion.svg"
              alt="fusion of various signals"
              className="w-full h-auto"
            />
          </div>
        </figure>
      </section>

      <section id="impact-trace" className="flex flex-col px-5 gap-10 mb-15">
        <article className="flex flex-col gap-5">
          <Heading as="h3" weight="semibold" className="tracking-normal">
            Attribution that accounts for the real world.
          </Heading>
          <Text
            size="base"
            weight="semibold"
            variant="secondary"
            className="leading-relaxed max-w-md"
          >
            Impact Trace isolates the impact of each product change while adjusting for seasonality, concurrent launches, and time-based effects, giving you confident impact attribution, not just correlation.
          </Text>
        </article>
        <ul className="flex flex-col gap-[10px]">
          <li className="flex items-center gap-4">
            <Calendar size={24} color="#4778F5" className="flex-shrink-0 mt-0.5" />
            <Text size="base" className="leading-relaxed" weight="medium" >
              Attribution adjusts for seasonality, concurrent work, and time since launch
            </Text>
          </li>
          <li className="flex items-center gap-4">
            <CircleQuestionMark size={24} color="#4778F5" className="flex-shrink-0 mt-0.5" />
            <Text size="base" className="leading-relaxed" weight="medium" >
              Monitor risks, guardrails and tradeoffs as effects accumulate over time
            </Text>
          </li>
          <li className="flex items-center gap-4">
            <MessageSquareDot size={24} color="#4778F5" className="flex-shrink-0 mt-0.5" />
            <Text size="base" className="leading-relaxed" weight="medium" >
              See what data informed each choice, which alternatives were considered, and why features were shipped or killed
            </Text>
          </li>
          <li className="flex items-center gap-4">
            <MessageSquareDot size={24} color="#4778F5" className="flex-shrink-0 mt-0.5" />
            <Text size="base" className="leading-relaxed" weight="medium" >
              See how changes performed across audiences, over time and the connection from product changes to goals and strategic outcomes

            </Text>
          </li>
        </ul>
      </section>

      <section className="px-5 mb-15">
        <figure
          className="rounded-xl h-[210px] bg-[url(/gradient-blue-yellow-backgrop.png)] bg-cover bg-center bg-no-repeat p-3"
        >
          <div className="h-full bg-white rounded-xl flex p-2">
            <img
              src="/impact-attribution.svg"
              alt="Impact Attribution"
              className="w-full h-auto"
            />
          </div>
        </figure>
      </section>

      {/* check gap! */}
      <section id="knowledge-graph" className="flex flex-col gap-10 mb-15 px-5">
        <article className="flex flex-col gap-5">
          <Heading as="h3" weight="semibold" className="tracking-normal">
            Institutional memory that compounds over time.
          </Heading>
          <Text
            size="base"
            weight="semibold"
            variant="secondary"
            className="leading-relaxed max-w-md"
          >
            Knowledge Graph captures the full context of every product decision, what worked, what failed, for whom, and why, creating a compound learning system that makes your organization smarter over time.
          </Text>
        </article>
        <ul className="flex flex-col gap-[10px]">
          <li className="flex items-center gap-4">
            <Calendar size={24} color="#4778F5" className="flex-shrink-0 mt-0.5" />
            <Text size="base" className="leading-relaxed" weight="medium" >
              Automatic context capture: Every decision, alternative, and outcome with full reasoning, not just results
            </Text>
          </li>
          <li className="flex items-center gap-4">
            <CircleQuestionMark size={24} color="#4778F5" className="flex-shrink-0 mt-0.5" />
            <Text size="base" className="leading-relaxed" weight="medium" >
              Cross-team intelligence: What growth learns informs retention, what one team discovers helps everyone
            </Text>
          </li>
          <li className="flex items-center gap-4">
            <MessageSquareDot size={24} color="#4778F5" className="flex-shrink-0 mt-0.5" />
            <Text size="base" className="leading-relaxed" weight="medium" >
              Powers future decisions: Historical patterns feed Delta Proposals and validation confidence
            </Text>
          </li>
          <li className="flex items-center gap-4">
            <MessageSquareDot size={24} color="#4778F5" className="flex-shrink-0 mt-0.5" />
            <Text size="base" className="leading-relaxed" weight="medium" >
              Enterprise-grade protection: Self-hosted or managed, your learnings stay under your control
            </Text>
          </li>
        </ul>
      </section>

      <section className="px-5 mb-15">
        <figure
          className="rounded-xl h-[210px] bg-[url(/gradient-blue-yellow-backgrop.png)] bg-cover bg-center bg-no-repeat p-3"
        >
          <div className="h-full bg-white rounded-xl flex p-2">
            <img
              src="/knowledge-map.svg"
              alt="Knowledge Graph"
              className="w-full h-auto"
            />
          </div>
        </figure>
      </section>

      <section className="px-5 mb-15">
        <Card
          variant="outlined"
          className="rounded-3xl border border-gray-200 bg-pricing-gradient p-5"
        >
          <CardHeader className="flex flex-col items-start  gap-4 mb-6">
            <div className="flex-1 flex justify-between w-full mb-6">
              <Heading as="h3" className="text-[24px] font-semibold">
                Custom Pricing
              </Heading>

              <div className="flex items-center px-3 py-1 rounded-full text-xs font-medium bg-badge-light">
                <span className="text-gradient-purple-orange">
                  Design Partnership
                </span>
              </div>
            </div>

            <ul className="space-y-4">
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
          </CardHeader>

          <CardFooter className="pt-6 mt-6 border-t-1">
            <Button variant="primary" size="lg" fullWidth asChild>
              <a href="/contact">Book demo</a>
            </Button>
          </CardFooter>
        </Card>
      </section>

      <section className="px-5 flex flex-col gap-6 mb-15">
        <Heading as="h2" className="text-3xl ">
          FAQ
        </Heading>
        <Text size="base" weight="normal" variant="secondary" className="leading-relaxed ">
          Find everything you need to know about Orchestrate and how we augment product development
        </Text>
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

      <section className="px-5 mb-15">
        <Card
          variant="outlined"
          className="rounded-3xl bg-[url(/gradient-black-green-background.png)] bg-cover bg-center bg-no-repeat p-5"
        >
          <CardHeader className="mb-8">
            <CardTitle className="text-[36px] font-bold text-white text-center">
              Stop guessing, Start executing
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
            <Text size="base" weight="normal" className="text-white text-center opacity-70">
              Join product organizations that turned strategy docs into shipped outcomes.
              Upload your strategy doc and see your first delta proposals today.
            </Text>
          </CardContent>

          <CardFooter className="mt-12 mb-2 p-0 border-t-0">
            <Button variant="secondary" size="md" fullWidth asChild>
              <a href="/contact">Book demo</a>
            </Button>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
}

