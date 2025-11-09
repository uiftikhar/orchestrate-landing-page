"use client";

import { Heading, Text, Button, Input, Textarea, Card, CardContent } from "@/components/ui";
import { useContactForm } from "@/hooks/useContactForm";
import { getStaggerDelay } from "@/hooks/useStaggerAnimation";
import { AnimatedSection } from "./AnimatedSection";

export function ContactTablet() {
  const { formData, errors, isSubmitting, submitStatus, handleChange, handleSubmit } = useContactForm();

  return (
    <main className="hidden md:block xl:hidden">
      <section className="px-8 py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <article className="text-center mb-16">
            <AnimatedSection delay={getStaggerDelay(0)}>
              <Heading
                as="h1"
                className="text-[56px] leading-[1.1] font-bold mb-8 tracking-tight"
              >
                Turn Your Product Strategy Into Results
              </Heading>
            </AnimatedSection>
            <AnimatedSection delay={getStaggerDelay(1)}>
              <Text
                size="lg"
                className="text-gray-600 max-w-xl mx-auto leading-relaxed"
                weight="medium"
              >
                We empower product leaders with the technology to close the gap between ambitious goals and successful execution. With Orchestrate you'll move from wondering if you're building the right product changes to knowing you are.

              </Text>
            </AnimatedSection>
          </article>

          <AnimatedSection delay={getStaggerDelay(2)}>
            <div className="grid grid-cols-2 gap-8">
              {/* Left Column: Address + Get in touch Cards */}
              <div className="flex flex-col justify-between gap-8">
                {/* Address Card */}
                <Card padding="md" className="bg-gray-100 border-none flex-1">
                  <CardContent className="h-full flex flex-col justify-between">
                    <Heading as="h6" weight="semibold" className="text-base">
                      Address
                    </Heading>
                    <Text variant="secondary" size="sm" className="leading-relaxed">
                      32-38 Leman St, London E1 8EW
                    </Text>
                  </CardContent>
                </Card>

                {/* Get in touch Card */}
                <Card padding="md" className="bg-gray-100 border-none flex-1">
                  <CardContent className="h-full flex flex-col justify-between">
                    <Heading as="h6" weight="semibold" className="text-base">
                      Get in touch
                    </Heading>

                    <div className="space-y-2">
                      <Text variant="secondary" size="sm" className="leading-relaxed">
                        hello@orchestrate.management
                      </Text>
                      <Text variant="secondary" size="sm" className="leading-relaxed">
                        +447805170828
                      </Text>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column: Contact Form - NO CARD */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Text size="sm" weight="semibold" className="text-gray-900">Your Name</Text>
                  <Input
                    placeholder="Jane Smith"
                    type="text"
                    className="w-full mt-[10px]"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <Text size="xs" className="text-red-600 mt-1">{errors.name}</Text>
                  )}
                </div>
                <div>
                  <Text size="sm" weight="semibold" className="text-gray-900">Your Email</Text>
                  <Input
                    placeholder="jane@orchestrate.management"
                    type="email"
                    className="w-full mt-[10px]"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <Text size="xs" className="text-red-600 mt-1">{errors.email}</Text>
                  )}
                </div>
                <div>
                  <Text size="sm" weight="semibold" className="text-gray-900">Your Message</Text>
                  <Textarea
                    placeholder="Message..."
                    className="w-full min-h-[120px] mt-[10px]"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    disabled={isSubmitting}
                  />
                  {errors.message && (
                    <Text size="xs" className="text-red-600 mt-1">{errors.message}</Text>
                  )}
                </div>

                {submitStatus.type && (
                  <div className={`p-3 rounded ${submitStatus.type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
                    <Text size="sm">{submitStatus.message}</Text>
                  </div>
                )}

                <Button
                  variant="primary"
                  size="md"
                  fullWidth
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Submit your message"}
                </Button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}

