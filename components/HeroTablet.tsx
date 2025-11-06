import { Heading, Text, Button } from "@/components/ui";

export function HeroTablet() {
  return (
    <div className="hidden md:block lg:hidden px-8">
      <div className="flex items-center justify-between gap-12">
        <div className="space-y-6 flex-1">
          <Heading
            as="h1"
            className="text-[56px] leading-[1.1] font-bold tracking-tight"
          >
            Product execution, augmented
          </Heading>
          <Text
            size="xl"
            variant="secondary"
            className="leading-relaxed max-w-xl"
          >
            Orchestrate is your agentic product strategist. It learns from every
            product change, proves what drives impact, and sharpens what you
            build next.
          </Text>
        </div>

        <div className="flex flex-col gap-3 min-w-[200px]">
          <Button variant="primary" size="lg">
            Book a demo
          </Button>
          <Button variant="outline" size="lg">
            Talk to sales
          </Button>
        </div>
      </div>
    </div>
  );
}

