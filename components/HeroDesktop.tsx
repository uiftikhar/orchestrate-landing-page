import { Heading, Text, Button } from "@/components/ui";

export function HeroDesktop() {
  return (
    <div className="hidden lg:block px-30">
      <div className="flex items-center justify-between gap-16">
        <div className="space-y-6 flex-1 max-w-2xl">
          <Heading
            as="h1"
            className="text-[64px] leading-[1.1] font-bold tracking-tight"
          >
            Product execution, augmented
          </Heading>
          <Text
            size="xl"
            variant="secondary"
            className="leading-relaxed text-[18px]"
          >
            Orchestrate is your agentic product strategist. It learns from every
            product change, proves what drives impact, and sharpens what you
            build next.
          </Text>
        </div>

        <div className="flex gap-4 items-center">
          <Button variant="primary" size="lg" className="whitespace-nowrap">
            Book a demo
          </Button>
          <Button variant="outline" size="lg" className="whitespace-nowrap">
            Talk to sales
          </Button>
        </div>
      </div>
    </div>
  );
}

