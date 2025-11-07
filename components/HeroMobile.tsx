"use client";

import { Heading, Text, Button, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Accordion } from "@/components/ui";
import { Database, UserSearch, LayoutList, Calendar, CircleQuestionMark, MessageSquareDot, LayoutTemplate, GitMerge, Flame, LineChart, Check } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { getStaggerDelay } from "@/hooks/useStaggerAnimation";

export function HeroMobile() {
  return (
    <main className="block md:hidden space-y-8 py-14">
      <section className="flex flex-col gap-8 mb-15 px-5">
        <article className="flex flex-col gap-5">
          <AnimatedSection delay={getStaggerDelay(0)}>
            <Heading
              as="h1"
              className="text-[40px] leading-[1.1] font-bold tracking-tight"
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
              Orchestrate is your agentic product strategist. It learns from every
              product change, proves what drives impact, and sharpens what you build
              next.
            </Text>
          </AnimatedSection>
        </article>
        <AnimatedSection delay={getStaggerDelay(1)} as="article" className="flex flex-row gap-3">
          <Button variant="primary" size="lg" fullWidth>
            Book a demo
          </Button>
          <Button variant="outline" size="lg" fullWidth>
            Talk to sales
          </Button>
        </AnimatedSection>
      </section>

      <AnimatedSection delay={getStaggerDelay(1.5)} as="section" className="flex flex-col gap-[14px] w-full mb-15">
        <Heading
          as="h6"
          align="center"
          className="text-[18px]"
        >
          Strategic Clarity
        </Heading>
        <div className="bg-gray-500 h-[236px] w-full" />
      </AnimatedSection>

      <section className="px-5 flex flex-col gap-10">
        <AnimatedSection delay={getStaggerDelay(2)}>
          <Heading as="h3" weight="semibold" className="tracking-normal">
            Your team has 100 ideas. We tell you which matter.
          </Heading>
          <Text
            size="base"
            weight="semibold"
            variant="secondary"
            className="leading-relaxed max-w-md"
          >
            The ship-test-learn cycle is slow.
            Orchestrate ranks product changes by strategic impact to prevent waste,
            so you only invest in what's most likely to move your metrics.
          </Text>

          <li className="flex items-center gap-4">
            <Database size={24} color="#4778F5" className="flex-shrink-0" aria-hidden="true" />
            <Text size="base" className="leading-relaxed" weight="medium">
              Ranked by strategic impact and probability of success
            </Text>
          </li>
          <li className="flex items-center gap-4">
            <UserSearch size={24} color="#4778F5" className="flex-shrink-0" aria-hidden="true" />
            <Text size="base" className="leading-relaxed" weight="medium">
              Evidence-based rationale for each recommendation
            </Text>
          </li>
          <li className="flex items-center gap-4">
            <LayoutList size={24} color="#4778F5" className="flex-shrink-0" aria-hidden="true" />
            <Text size="base" className="leading-relaxed" weight="medium">
              Gets smarter with every shipped product change
            </Text>
          </li>
        </AnimatedSection>
      </section>

      <section className="px-5 mb-15">
        <div className="bg-gray-500 h-53 w-full" />
      </section>

      <section className="flex flex-col px-5 gap-10">
        <article className="flex flex-col gap-5">
          <Heading as="h3" weight="semibold" className="tracking-normal">
            LOREM IPSUM
          </Heading>
          <Text
            size="base"
            weight="semibold"
            variant="secondary"
            className="leading-relaxed max-w-md"
          >
            LOREM IPSUM
          </Text>
        </article>
        <ul className="flex flex-col gap-[10px]">
          <li className="flex items-center gap-4">
            <Calendar size={24} color="#4778F5" className="flex-shrink-0" aria-hidden="true" />
            <Text size="base" className="leading-relaxed" weight="medium">
              Task Scheduling
            </Text>
          </li>
          <li className="flex items-center gap-4">
            <CircleQuestionMark size={24} color="#4778F5" className="flex-shrink-0" aria-hidden="true" />
            <Text size="base" className="leading-relaxed" weight="medium">
              Lead assignment
            </Text>
          </li>
          <li className="flex items-center gap-4">
            <MessageSquareDot size={24} color="#4778F5" className="flex-shrink-0" aria-hidden="true" />
            <Text size="base" className="leading-relaxed" weight="medium">
              Triggered Notification
            </Text>
          </li>
          <li className="flex items-center gap-4">
            <LayoutTemplate size={24} color="#4778F5" className="flex-shrink-0" aria-hidden="true" />
            <Text size="base" className="leading-relaxed" weight="medium">
              Pre-built Templates
            </Text>
          </li>
        </ul>
      </section>

      <section className="px-5 my-15">
        <div className="bg-gray-500 h-53 w-full" />
      </section>

      <section className="flex flex-col px-5 gap-10">
        <article className="flex flex-col gap-5">
          <Heading as="h3" weight="semibold" className="tracking-normal">
            LOREM IPSUM
          </Heading>
          <Text
            size="base"
            weight="semibold"
            variant="secondary"
            className="leading-relaxed max-w-md"
          >
            LOREM IPSUM
          </Text>
        </article>
        <article className="flex flex-col gap-[10px]">
          <div className="flex items-center gap-4">
            <Calendar size={24} color="#4778F5" className="flex-shrink-0 mt-0.5" />
            <Text size="base" className="leading-relaxed" weight="medium" >
              Multi-modal fusion
            </Text>
          </div>
          <div className="flex items-center gap-4">
            <CircleQuestionMark size={24} color="#4778F5" className="flex-shrink-0 mt-0.5" />
            <Text size="base" className="leading-relaxed" weight="medium" >
              Early signal detection
            </Text>
          </div>
          <div className="flex items-center gap-4">
            <MessageSquareDot size={24} color="#4778F5" className="flex-shrink-0 mt-0.5" />
            <Text size="base" className="leading-relaxed" weight="medium" >
              Systematic learning capture
            </Text>
          </div>
        </article>
      </section>

      <section className="px-5 my-15">
        <div className="bg-gray-500 h-53 w-full" />
      </section>

      <section className="flex flex-col gap-8 mb-15 px-5">
        <Heading
          as="h1"
          className="text-[40px] leading-[1.1] font-bold tracking-tight"
        >
          Orchestrate your existing product stack
        </Heading>
        <Text
          size="base"
          weight="semibold"
          variant="secondary"
          className="leading-relaxed max-w-md"
        >
          Experience the power of product orchestration
          and take your business to the next level.
        </Text>
      </section>

      <section className="px-5 my-15">
        <div className="bg-gray-500 h-53 w-full" />
      </section>

      <section className="px-5 flex flex-col">
        <article className="flex flex-col gap-3 pb-6">
          <div className="flex items-center gap-3">
            <GitMerge size={24} color="#FF8C00" className="flex-shrink-0" />
            <Heading as="h6" weight="semibold" className="text-base">
              Effortless organization
            </Heading>
          </div>
          <Text variant="secondary" size="base" className="leading-relaxed">
            Centralize all customer data for easy access and better management.
          </Text>
        </article>
        <div className="border-b border-gray-200"></div>

        {/* Feature 2: Boosted productivity */}
        <article className="flex flex-col gap-3 pt-6 pb-6">
          <div className="flex items-center gap-3">
            <Flame size={24} color="#FF8C00" className="flex-shrink-0" />
            <Heading as="h6" weight="semibold" className="text-base">
              Boosted productivity
            </Heading>
          </div>
          <Text variant="secondary" size="base" className="leading-relaxed">
            Automate tasks to save time and focus on what truly matters.
          </Text>
        </article>
        <div className="border-b border-gray-200"></div>

        {/* Feature 3: Data-driven growth */}
        <article className="flex flex-col gap-3 pt-6">
          <div className="flex items-center gap-3">
            <LineChart size={24} color="#FF8C00" className="flex-shrink-0" />
            <Heading as="h6" weight="semibold" className="text-base">
              Data-driven growth
            </Heading>
          </div>
          <Text variant="secondary" size="base" className="leading-relaxed">
            Leverage real-time analytics to make smarter, faster business decisions.
          </Text>
        </article>
      </section>

      <section className="flex flex-col gap-8 mb-15 px-5">
        <Heading
          as="h1"
          className="text-[40px] leading-[1.1] font-bold tracking-tight"
        >
          Simple, transparent pricing plans for every team
        </Heading>
        <Text
          size="base"
          weight="normal"
          variant="secondary"
          className="leading-relaxed max-w-md"
        >
          Choose a plan that fits your business needs and
          start delivering better customer experiences today.
        </Text>
      </section>

      <section className="px-5">
        <Card
          variant="outlined"
          padding="lg"
          className="rounded-3xl border border-gray-200 bg-pricing-gradient"
        >
          <CardHeader className="flex flex-row items-start justify-between gap-4 mb-6">
            <div className="flex-1">
              <CardTitle className="text-lg font-bold mb-1">
                Design Partner
              </CardTitle>
              <CardDescription className="text-sm">
                For complex product portfolios
              </CardDescription>
            </div>
            <div className="px-3 py-1 rounded-full text-xs font-medium bg-badge-light">
              <span className="text-gradient-purple-orange">
                Design Partnership
              </span>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            <div>
              <Heading as="h3" weight="bold" className="text-2xl mb-6">
                Custom Pricing
              </Heading>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <Text size="base">Multi-product orchestration</Text>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <Text size="base">Custom learning models</Text>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <Text size="base">Enhanced email sending</Text>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <Text size="base">Dedicated success manager</Text>
                </li>
              </ul>
            </div>
          </CardContent>

          <CardFooter className="pt-6 mt-6 border-t-1">
            <Button variant="primary" size="lg" fullWidth>
              Get started
            </Button>
          </CardFooter>
        </Card>
      </section>

      <section className="px-5 mt-15 flex flex-col gap-6">
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
                "We bridge the gap between strategic goals and tactical product work by telling you what to build, validating it efficiently through multi-modal synthesis, and tracking impact against business objectives.",
              defaultOpen: false,
            },
            {
              title: "Is this another experimentation tool?",
              content:
                "Lorep ipsum",
            },
            {
              title: "Do we need to replace our current tools?",
              content:
                "No. Orchestrate sits above your existing stack as an intelligence layer. We integrate with your analytics platforms, experimentation tools, and research tools. You keep what you have; we coordinate it strategically.",
            },
            {
              title: "How do you make product decisions?",
              content:
                "We fuse data signals that are weak individually but strong together. By understanding your quantitative and qualitative data and historical patterns, we enable you to reach confident product decisions faster without sacrificing rigor.",
            },
            {
              title: "Is my data secure with Orchestrate?",
              content:
                "We integrate with your existing data warehouse and provide self-hosted or hosted options so your data stays protected and private.",
            },
          ]}
          allowMultiple={true}
        />
      </section>

      <section className="px-5">
        <Card
          variant="outlined"
          padding="lg"
          className="rounded-3xl bg-[url(/gradient-black-green-background.png)] bg-cover bg-center bg-no-repeat"
        >
          <CardHeader className="flex flex-row items-start justify-between gap-4 mb-6">
            <CardTitle className="text-[36px] font-bold mb-1 text-white text-center">
              Stop guessing, Start executing
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
            <Text size="base" weight="normal" className="text-white text-center opacity-70">
              Join product organizations that turned strategy docs into shipped outcomes.
              Upload your strategy doc and see your first delta proposals today.
            </Text>
          </CardContent>

          <CardFooter className="pt-6 mt-6 border-t-0">
            <article className="flex flex-row gap-4">
              <Button variant="secondary" size="md" fullWidth>
                Get started
              </Button>
              <Button variant="primary" size="md" fullWidth>
                Book a demo
              </Button>
            </article>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
}

