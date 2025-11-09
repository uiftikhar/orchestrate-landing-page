"use client";

import { Heading, Text } from "@/components/ui";
import { AnimatedSection } from "./AnimatedSection";
import { getStaggerDelay } from "@/hooks/useStaggerAnimation";

export function LegalDesktop() {
  return (
    <main className="hidden xl:block py-20">
      <div className="max-w-4xl mx-auto px-30">
        {/* Header */}
        <section className="mb-20">
          <AnimatedSection delay={getStaggerDelay(0)}>
            <Heading
              as="h1"
              className="text-6xl leading-[1.1] font-bold tracking-tight text-center mb-6"
            >
              Privacy and Policy
            </Heading>
          </AnimatedSection>
        </section>

        {/* Data Security */}
        <AnimatedSection delay={getStaggerDelay(1)}>
          <section className="mb-16">
            <article className="flex flex-col gap-6">
              <Heading as="h2" className="text-4xl font-semibold">
                Data Security
              </Heading>
              <Text
                size="xl"
                weight="normal"
                variant="secondary"
                className="leading-relaxed"
              >
                We implement robust security measures to protect your data from unauthorized access, alteration, or destruction. However, no system is completely secure, and we cannot guarantee absolute security. We take the security of your personal data seriously and employ a combination of technical, administrative, and physical safeguards to protect it from unauthorized access, alteration, or destruction.
              </Text>
            </article>
          </section>
        </AnimatedSection>

        {/* Third-Party Links */}
        <AnimatedSection delay={getStaggerDelay(2)}>
          <section className="mb-16">
            <article className="flex flex-col gap-6">
              <Heading as="h2" className="text-4xl font-semibold">
                Third-Party Links
              </Heading>
              <Text
                size="xl"
                weight="normal"
                variant="secondary"
                className="leading-relaxed"
              >
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. Our website may include links to external websites or services for your convenience, such as third-party integrations, resources, or advertisements. While we aim to link only to reputable sources, we are not responsible for the content, security, or privacy practices of these third-party sites.
              </Text>
            </article>
          </section>
        </AnimatedSection>

        {/* Changes to This Policy */}
        <AnimatedSection delay={getStaggerDelay(3)}>
          <section className="mb-16">
            <article className="flex flex-col gap-6">
              <Heading as="h2" className="text-4xl font-semibold">
                Changes to This Policy
              </Heading>
              <Text
                size="xl"
                weight="normal"
                variant="secondary"
                className="leading-relaxed"
              >
                We may update this Privacy Policy from time to time. Significant changes will be communicated via email or website notifications.
              </Text>
            </article>
          </section>
        </AnimatedSection>

        {/* Use of Services */}
        <AnimatedSection delay={getStaggerDelay(4)}>
          <section className="mb-16">
            <article className="flex flex-col gap-6">
              <Heading as="h2" className="text-4xl font-semibold">
                Use of Services
              </Heading>
              <Text
                size="xl"
                weight="normal"
                variant="secondary"
                className="leading-relaxed"
              >
                You agree to use our services only for lawful purposes and in accordance with our policies. You may not engage in any activity that could damage, disable, or impair our services, or interfere with any other party's use of the services.
              </Text>
            </article>
          </section>
        </AnimatedSection>

        {/* Payment Terms */}
        <AnimatedSection delay={getStaggerDelay(5)}>
          <section className="mb-16">
            <article className="flex flex-col gap-6">
              <Heading as="h2" className="text-4xl font-semibold">
                Payment Terms
              </Heading>
              <Text
                size="xl"
                weight="normal"
                variant="secondary"
                className="leading-relaxed"
              >
                For certain services, you may be required to pay a fee. Payment terms will be outlined on the relevant page or service agreement. You agree to provide accurate payment information and authorize us to charge the applicable fees.
              </Text>
            </article>
          </section>
        </AnimatedSection>
      </div>
    </main>
  );
}

