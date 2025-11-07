"use client";

import { Heading, Text, Button, Input, Textarea, CardContent, Card } from "@/components/ui";
import { useContactForm } from "@/hooks/useContactForm";

export function ContactMobile() {
  const { formData, errors, isSubmitting, submitStatus, handleChange, handleSubmit } = useContactForm();

  return (
    <main className="block md:hidden py-14">
      <section className="px-5 mb-12">
        <article className="flex flex-col gap-6">
          <Heading
            as="h1"
            className="text-4xl leading-[1.2] font-semibold tracking-tight text-center"
          >
            Empowering Teams with Smarter Solutions
          </Heading>
          <Text
            size="base"
            weight="normal"
            variant="secondary"
            className="leading-relaxed text-center"
          >
            We're on a mission to redefine how businesses manage relationships, data, and workflows in a connected world.
          </Text>
        </article>
      </section>

      {/* Contact Form */}
      <section className="px-5 mb-12">
        <form onSubmit={handleSubmit} className="space-y-4 p-5">
          <div>
            <Text size="sm" weight="medium" className="mb-2">Your Name</Text>
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
            <Text size="sm" weight="medium" className="mb-2">Your Email</Text>
            <Input
              placeholder="jane@framer.com"
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
            <Text size="sm" weight="medium" className="mb-2">Your Message</Text>
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
            size="lg" 
            fullWidth 
            className="mt-2"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Submit your message"}
          </Button>
        </form>
      </section>

      {/* Address */}
      <section className="px-5 mb-6">
        <Card padding="md" className="bg-gray-100 border-none">
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <Heading as="h6" weight="semibold" className="text-lg">
                Address
              </Heading>
            </div>
            <Text variant="secondary" size="base" weight="medium" className="leading-relaxed">
              32-38 Leman St, London E1 8EW
            </Text>
          </CardContent>
        </Card>
      </section>

      {/* Get in touch */}
      <section className="px-5">
        <Card padding="md" className="bg-gray-100 border-none">
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <Heading as="h6" weight="semibold" className="text-lg">
                Get in touch
              </Heading>
              {/* <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-gray-400">
                <path d="M4 8H12M8 4V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg> */}
            </div>
            <Text variant="secondary" size="base" weight="medium" className="leading-relaxed pb-2">
              hello@orchestrate.management
            </Text>
            <Text variant="secondary" size="base" weight="medium" className="leading-relaxed">
              +447805170828
            </Text>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}

