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

          <div className="grid grid-cols-2 gap-8">
            {/* Left Column: Address + Get in touch Cards */}
            <div className="flex flex-col justify-between gap-8">
              {/* Address Card */}
              <Card padding="md" className="bg-gray-100 border-none flex-1">
                <CardContent className="h-full flex flex-col justify-between">
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
              <Card padding="md" className="bg-gray-100 border-none flex-1">
                <CardContent className="h-full flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <Heading as="h6" weight="semibold" className="text-base">
                      Get in touch
                    </Heading>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-gray-400">
                      <path d="M4 8H12M8 4V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <Text variant="secondary" size="sm" className="leading-relaxed">
                      hello@zentra.example
                    </Text>
                    <Text variant="secondary" size="sm" className="leading-relaxed">
                      +87734817721
                    </Text>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column: Contact Form - NO CARD */}
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
          </div>
        </div>
      </section>
    </main>
  );
}

