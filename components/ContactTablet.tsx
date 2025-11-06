import { Heading, Text, Button, Input, Textarea, Card, CardContent } from "@/components/ui";

export function ContactTablet() {
  return (
    <main className="hidden md:block lg:hidden">
      <section className="px-8 py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <article className="text-center mb-16">
            <Heading
              as="h1"
              className="text-[56px] leading-[1.1] font-bold mb-8 tracking-tight"
            >
              Empowering Teams<br />
              with Smarter<br />
              Solutions
            </Heading>
            <Text
              size="lg"
              className="text-gray-600 max-w-xl mx-auto leading-relaxed"
              weight="medium"
            >
              We're on a mission to redefine how businesses manage relationships, data, and workflows in a connected world.
            </Text>
          </article>

          <div className="grid grid-cols-3 gap-8">
            {/* Contact Form */}
            <Card variant="outlined" padding="lg" className="border border-gray-200">
              <CardContent className="space-y-5">
                <div>
                  <Text size="sm" weight="medium" className="mb-2">Your Name</Text>
                  <Input 
                    placeholder="Jane Smith" 
                    type="text"
                    className="w-full"
                  />
                </div>
                <div>
                  <Text size="sm" weight="medium" className="mb-2">Your Email</Text>
                  <Input 
                    placeholder="jane@framer.com" 
                    type="email"
                    className="w-full"
                  />
                </div>
                <div>
                  <Text size="sm" weight="medium" className="mb-2">Your Message</Text>
                  <Textarea 
                    placeholder="Message..." 
                    className="w-full min-h-[100px]"
                  />
                </div>
                <Button variant="primary" size="md" fullWidth>
                  Submit your message
                </Button>
              </CardContent>
            </Card>

            {/* Address Card */}
            <Card variant="outlined" padding="lg" className="border border-gray-200">
              <CardContent className="space-y-4">
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

            {/* Get in touch Card */}
            <Card variant="outlined" padding="lg" className="border border-gray-200">
              <CardContent className="space-y-4">
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
        </div>
      </section>
    </main>
  );
}

