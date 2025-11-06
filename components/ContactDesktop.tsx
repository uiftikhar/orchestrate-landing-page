import { Heading, Text, Button, Input, Textarea, Card, CardContent } from "@/components/ui";

export function ContactDesktop() {
  return (
    <main className="hidden lg:block px-30">
      <section className="py-32">
        <article className="mb-16 max-w-[600px]">
          <Heading
            as="h1"
            className="text-[64px] leading-[1.1] font-bold mb-8 tracking-tight"
          >
            Empowering Teams with Smarter Solutions
          </Heading>
          <Text
            size="xl"
            className="text-gray-600 leading-relaxed"
            weight="medium"
          >
            We're on a mission to redefine how businesses manage relationships, data, and workflows in a connected world.
          </Text>
        </article>

        <div className="grid grid-cols-3 gap-8">
          {/* Address Card */}
          <Card padding="md" className="bg-gray-100 border-none">
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <Heading as="h6" weight="semibold" className="text-base">
                  Address
                </Heading>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-gray-400">
                  <path d="M4 8H12M8 4V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <Text variant="secondary" size="sm" className="leading-relaxed">
                Netherlands, Amstredam, Bakerstreet 221, 120034
              </Text>
            </CardContent>
          </Card>

          {/* Contact Form - NO CARD */}
          <div className="space-y-5">
            <div>
              <Text size="sm" weight="semibold" className="text-gray-900">Your Name</Text>
              <Input 
                placeholder="Jane Smith" 
                type="text"
                className="w-full mt-[10px]"
              />
            </div>
            <div>
              <Text size="sm" weight="semibold" className="text-gray-900">Your Email</Text>
              <Input 
                placeholder="jane@framer.com" 
                type="email"
                className="w-full mt-[10px]"
              />
            </div>
            <div>
              <Text size="sm" weight="semibold" className="text-gray-900">Your Message</Text>
              <Textarea 
                placeholder="Message..." 
                className="w-full min-h-[120px] mt-[10px]"
              />
            </div>
            <Button variant="primary" size="md" fullWidth>
              Submit your message
            </Button>
          </div>

          {/* Get in touch Card */}
          <Card padding="md" className="bg-gray-100 border-none">
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <Heading as="h6" weight="semibold" className="text-base">
                  Get in touch
                </Heading>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-gray-400">
                  <path d="M4 8H12M8 4V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <Text variant="secondary" size="sm" className="leading-relaxed">
                hello@zentra.example
              </Text>
              <Text variant="secondary" size="sm" className="leading-relaxed">
                +87734817721
              </Text>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}

