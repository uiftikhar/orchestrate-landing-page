import { Heading, Text, Button, Accordion, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui";
import { getStaggerDelay } from "@/hooks/useStaggerAnimation";
import { Database, UserSearch, LayoutList, Calendar, CircleQuestionMark, MessageSquareDot, LayoutTemplate, GitMerge, Flame, LineChart, Check } from "lucide-react";
import { useState } from "react";
import { AnimatedSection } from "./AnimatedSection";


const tabs = [
  { label: "Strategic clarity", id: 0 },
  { label: "Smart recommendations", id: 1 },
  { label: "Impact attribution", id: 2 },
];


export function HeroDesktop() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <main className="hidden lg:block">
      <section className="pt-20">
        <div className="">
          <article className="text-center mb-16 px-30">
          <AnimatedSection delay={getStaggerDelay(0)}>
            <Heading
              as="h1"
              className="text-[56px] leading-[1.1] font-bold mb-8 tracking-tight max-w-[540px]"
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
                Orchestrate is your agentic product strategist. It learns from every product change, proves what drives impact, and sharpens what you build next.
              </Text>
              <div className="flex gap-3 whitespace-nowrap">
                <Button variant="primary" size="lg" className="px-6 text-sm font-medium">
                  Book a demo
                </Button>
                <Button variant="outline" size="lg" className="px-6 text-sm font-medium">
                  Talk to sales
                </Button>
              </div>
            </div>
            </AnimatedSection>
          </article>

          {/* Tabs */}
          <div className="mt-20 px-30" role="tablist" aria-label="Dashboard views">
            <AnimatedSection delay={getStaggerDelay(1)}> 
            <div className="flex justify-center gap-12">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  role="tab"
                  onClick={() => setActiveTab(tab.id)}
                  aria-selected={activeTab === tab.id}
                  aria-controls={`tabpanel-${tab.id}`}
                  className={`pb-4 px-1 text-[15px] font-medium transition-all relative ${activeTab === tab.id
                    ? "text-gray-900"
                    : "text-gray-500 hover:text-gray-700 border-transparent"
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            </AnimatedSection>
          </div>

          {/* Dashboard Mockup */}
          <AnimatedSection delay={getStaggerDelay(1.5)}>  
          <figure
            className="bg-gradient-to-br from-purple-100 to-pink-100 p-8"
            role="tabpanel"
            id={`tabpanel-${activeTab}`}
            aria-labelledby={`tab-${activeTab}`}
          >
            <div className="bg-gray-100 rounded-lg h-[400px] flex items-center justify-center">
              <Text className="text-gray-400">Dashboard Mockup - {tabs[activeTab].label}</Text>
            </div>
          </figure>
          </AnimatedSection>
        </div>
      </section>

      {/* Features Section */}
      <section className="pt-32 bg-white overflow-hidden">
        <div className="flex gap-16 items-center">
          {/* Dashboard Table Image */}
          <figure
            className="rounded-l-none rounded-r-xl flex-shrink-0 w-[1106px] h-[594px] -ml-[640px] bg-[url(/gradient-blue-yellow-backgrop.png)] bg-cover bg-center bg-no-repeat"
          >
            <div className="rounded-lg p-4 h-full">
              <div className="rounded-lg h-full flex items-center justify-center">
                <Text className="text-gray-400">Dashboard Table View</Text>
              </div>
            </div>
          </figure>
          <article className="pr-32 flex-1 ">
            <Heading
              as="h2"
              className="text-[48px] leading-[1.15] font-bold mb-8"
            >
              Your team has 100 ideas. We tell you which matter.
            </Heading>
            <Text className="text-gray-600 mb-10 text-[18px] leading-[1.6]" weight="medium">
              The ship-fast-learn cycle is slow. Orchestrate ranks product changes by strategic impact to prevent waste, so you only invest in what's most likely to move your metrics.
            </Text>

            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <Database size={24} color="#4778F5" className="flex-shrink-0" aria-hidden="true" />
                <Text size="lg" className="leading-relaxed" weight="medium">
                  Ranked by strategic impact and probability of success
                </Text>
              </li>
              <li className="flex items-center gap-4">
                <UserSearch size={24} color="#4778F5" className="flex-shrink-0" aria-hidden="true" />
                <Text size="lg" className="leading-relaxed" weight="medium">
                  Evidence-based rationale for each recommendation
                </Text>
              </li>
              <li className="flex items-center gap-4">
                <LayoutList size={24} color="#4778F5" className="flex-shrink-0" aria-hidden="true" />
                <Text size="lg" className="leading-relaxed" weight="medium">
                  Gets smarter with every shipped product change
                </Text>
              </li>
            </ul>
          </article>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="pt-32 bg-white overflow-hidden">
        <div className="flex gap-16 items-center">
          <article className="pl-32 flex-1">
            <Heading
              as="h2"
              className="text-[48px] leading-[1.15] font-bold mb-8"
            >
              LOREM IPSUM
            </Heading>
            <Text className="text-gray-600 mb-10 text-[18px] leading-[1.6]" weight="medium">
              LOREM IPSUM
            </Text>

            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <Calendar size={24} color="#4778F5" className="flex-shrink-0" aria-hidden="true" />
                <Text size="lg" className="leading-relaxed" weight="medium">
                  Task Scheduling
                </Text>
              </li>
              <li className="flex items-center gap-4">
                <CircleQuestionMark size={24} color="#4778F5" className="flex-shrink-0" aria-hidden="true" />
                <Text size="lg" className="leading-relaxed" weight="medium">
                  Lead assignment
                </Text>
              </li>
              <li className="flex items-center gap-4">
                <MessageSquareDot size={24} color="#4778F5" className="flex-shrink-0" aria-hidden="true" />
                <Text size="lg" className="leading-relaxed" weight="medium">
                  Triggered Notification
                </Text>
              </li>
              <li className="flex items-center gap-4">
                <LayoutTemplate size={24} color="#4778F5" className="flex-shrink-0" aria-hidden="true" />
                <Text size="lg" className="leading-relaxed" weight="medium">
                  Pre-built Templates
                </Text>
              </li>
            </ul>
          </article>

          {/* Feature Image */}
          <figure
            className="rounded-r-none rounded-l-xl flex-shrink-0 w-[1106px] h-[594px] -mr-[740px] bg-[url(/gradient-blue-yellow-backgrop.png)] bg-cover bg-center bg-no-repeat"
          >
            <div className="rounded-lg p-4 h-full">
              <div className="rounded-lg h-full flex items-center justify-center">
                <Text className="text-gray-400">Feature Image</Text>
              </div>
            </div>
          </figure>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="pt-32 bg-white overflow-hidden">
        <div className="flex gap-16 items-center">
          {/* Feature Image */}
          <figure
            className="rounded-l-none rounded-r-xl flex-shrink-0 w-[1106px] h-[594px] -ml-[640px] bg-[url(/gradient-blue-yellow-backgrop.png)] bg-cover bg-center bg-no-repeat"
          >
            <div className="rounded-lg p-4 h-full">
              <div className="rounded-lg h-full flex items-center justify-center">
                <Text className="text-gray-400">Feature Image</Text>
              </div>
            </div>
          </figure>

          <article className="pr-32 flex-1">
            <Heading
              as="h2"
              className="text-[48px] leading-[1.15] font-bold mb-8"
            >
              LOREM IPSUM
            </Heading>
            <Text className="text-gray-600 mb-10 text-[18px] leading-[1.6]" weight="medium">
              LOREM IPSUM
            </Text>

            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <Calendar size={24} color="#4778F5" className="flex-shrink-0" aria-hidden="true" />
                <Text size="lg" className="leading-relaxed" weight="medium">
                  Multi-modal fusion
                </Text>
              </li>
              <li className="flex items-center gap-4">
                <CircleQuestionMark size={24} color="#4778F5" className="flex-shrink-0" aria-hidden="true" />
                <Text size="lg" className="leading-relaxed" weight="medium">
                  Early signal detection
                </Text>
              </li>
              <li className="flex items-center gap-4">
                <MessageSquareDot size={24} color="#4778F5" className="flex-shrink-0" aria-hidden="true" />
                <Text size="lg" className="leading-relaxed" weight="medium">
                  Systematic learning capture
                </Text>
              </li>
            </ul>
          </article>
        </div>
      </section>

      {/* Features with Orange Icons */}
      <section className="pt-20 px-30">
        <div>
          <article className="mb-12 max-w-[600px]">
            <Heading as="h2" className="text-[48px] leading-[1.2] mb-6" weight="semibold">
              Orchestrate your existing product stack
            </Heading>
            <Text className="text-gray-600 leading-relaxed max-w-xl" size="xl">
              Experience the power of product orchestration and take your business to the next level.
            </Text>
          </article>

          {/* 	746 × 420 px */}
          {/* Feature Image */}
          <figure
            className="rounded-xl pt-8 px-8 relative overflow-hidden aspect-[1200/594] bg-[url(/gradient-yellow-purple-background.png)] bg-cover bg-center bg-no-repeat"
          >
            <div className="rounded-lg h-full flex items-center justify-center">
              <Text className="text-gray-400">Feature Image</Text>
            </div>
          </figure>

           <div className="grid grid-cols-3 gap-6 mt-6">
             <article className="flex flex-col gap-3 p-10">
               <GitMerge size={24} color="#FF8C00" aria-hidden="true" />
               <Heading as="h3" className="text-2xl font-semibold mt-8">
                 Effortless organization
               </Heading>
               <Text variant="secondary" size="base" className="leading-relaxed">
                 Centralize all customer data for easy access and better management.
               </Text>
             </article>

             <article className="flex flex-col gap-3 p-10">
               <Flame size={24} color="#FF8C00" aria-hidden="true" />
               <Heading as="h3" className="text-2xl font-semibold mt-8">
                 Boosted productivity
               </Heading>
               <Text variant="secondary" size="base" className="leading-relaxed">
                 Automate tasks to save time and focus on what truly matters.
               </Text>
             </article>

             <article className="flex flex-col gap-3 p-10">
               <LineChart size={24} color="#FF8C00" aria-hidden="true" />
               <Heading as="h3" className="text-2xl font-semibold mt-8">
                 Data-driven<br /> growth
               </Heading>
               <Text variant="secondary" size="base" className="leading-relaxed">
                 Leverage real-time analytics to make smarter, faster business decisions.
               </Text>
             </article>
           </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pt-20 bg-white px-30">
          <article className="mb-12">
            <Heading as="h2" className="text-[48px] leading-[1.2] font-bold mb-6">
              Simple, transparent pricing <br /> plans for every team
            </Heading>
            <Text className="text-gray-600 text-xl leading-relaxed max-w-xl">
              Choose a plan that fits your business needs and start delivering better customer experiences today.
            </Text>
          </article>

          <Card
            variant="outlined"
            padding="lg"
            className="rounded-3xl border border-gray-200 bg-pricing-gradient"
          >
            <CardHeader className="flex flex-row items-start justify-between gap-4 mb-6">
              <div className="flex-1">
                <CardTitle className="text-2xl font-bold mb-2">
                  Design Partner
                </CardTitle>
                <CardDescription className="text-base">
                  For complex product portfolios
                </CardDescription>
              </div>
              <div className="px-4 py-2 rounded-full text-sm font-medium bg-badge-light">
                <span className="text-gradient-purple-orange">
                  Design Partnership
                </span>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <div>
                <Heading as="h3" weight="bold" className="text-3xl mb-8">
                  Custom Pricing
                </Heading>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <Text size="base">Multi-product orchestration</Text>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <Text size="base">Custom learning models</Text>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <Text size="base">Enhanced email sending</Text>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
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

      {/* FAQ Section */}
      <section className="pt-20 flex gap-6 px-30">
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

          <CardFooter className="pt-5 mt-5 border-t-0">
            <article className="flex flex-row gap-4 justify-center">
              <Button variant="secondary" size="md">
                Get started
              </Button>
              <Button variant="primary" size="md">
                Book a demo
              </Button>
            </article>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
}

