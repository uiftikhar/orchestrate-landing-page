import { Text, Heading } from "@/components/ui";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const productLinks = [
    { label: "Product-delta", href: "/#product-delta" },
    { label: "Impact-trace", href: "/#impact-trace" },
    { label: "Fuse-evaluate", href: "/#fuse-evaluate" },
    { label: "Knowledge-graph", href: "/#knowledge-graph" },
  ];

  const companyLinks = [
    { label: "Contact us", href: "/contact" },
    { label: "Legal", href: "/legal" },
  ];

  return (
    <footer className="w-full bg-black text-white">
      <div className="container mx-auto px-5 py-12 md:py-16 lg:py-20">
        {/* Mobile Layout - Logo left, Links right */}
        <div className="md:hidden">
          {/* Main content - 2 columns */}
          <div className="flex items-start flex-row justify-between mb-16">
            {/* Left: Logo */}
            <a href="/" className="flex items-center">
              <img
                src="/logo.svg"
                alt="orchestrate"
                width="120"
                height="27"
                className="h-[27px] w-auto brightness-0 invert"
              />
            </a>

            {/* Right: Links - Vertical stack */}
            <div className="space-y-10 pr-10">
              {/* Product Column */}
              <div>
                <Heading as="h6" weight="semibold" className="text-sm text-white font-medium mb-4 opacity-70">
                  Agentic Tools
                </Heading>
                <ul className="space-y-3">
                  {productLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-white/70 hover:text-white transition-colors text-sm"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company Column */}
              <div>
                <Heading as="h6" weight="semibold" className="text-sm text-white font-medium mb-4 opacity-70">
                  Company
                </Heading>
                <ul className="space-y-3">
                  {companyLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-white/70 hover:text-white transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-6">
            <Text size="sm" className="text-white/50">
              © {currentYear}. Orchestrate.
            </Text>
          </div>
        </div>

        {/* Tablet & Desktop Layout - 3 columns with logo on left */}
        <div className="hidden md:flex md:items-start md:justify-between">
          {/* Left: Logo & Copyright */}
          <div className="flex flex-col justify-between min-h-[180px]">
            <a href="/" className="flex items-center">
              <img
                src="/logo.svg"
                alt="orchestrate"
                width="120"
                height="27"
                className="h-[27px] w-auto brightness-0 invert"
              />
            </a>

            <Text size="sm" className="text-white/50 mt-auto">
              © {currentYear}. Orchestrate.
            </Text>
          </div>

          {/* Right: Link Columns */}
          <div className="flex gap-16 lg:gap-24">
            {/* Product Column */}
            <div>
              <Heading as="h6" weight="semibold" className="text-sm text-white font-medium mb-4 opacity-70">
                Agentic Tools
              </Heading>
              <ul className="space-y-3">
                {productLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <Heading as="h6" weight="semibold" className="text-sm text-white font-medium mb-4 opacity-70">
                Company
              </Heading>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

