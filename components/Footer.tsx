import { Text, Heading } from "@/components/ui";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const productLinks = [
    { label: "Integrations", href: "#integrations" },
    { label: "No-Code database", href: "#database" },
    { label: "Workflow builder", href: "#workflow" },
    { label: "Custom AI Agent", href: "#ai-agent" },
  ];

  const companyLinks = [
    { label: "About", href: "#about" },
    { label: "Contact us", href: "#contact" },
    { label: "Legal", href: "#legal" },
  ];

  return (
    <footer className="w-full bg-black text-white">
      <div className="container mx-auto px-5 py-12 md:py-16 lg:py-20">
        {/* Mobile Layout - Logo left, Links right */}
        <div className="md:hidden">
          {/* Main content - 2 columns */}
          <div className="flex items-start flex-row justify-between mb-16">
            {/* Left: Logo */}
            <div className="flex items-center gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12L12 17L22 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <Text size="lg" weight="semibold" className="text-white">
                orchestrate
              </Text>
            </div>

            {/* Right: Links - Vertical stack */}
            <div className="space-y-10 pr-10">
              {/* Product Column */}
              <div>
                <Heading as="h6" weight="semibold" className="text-white mb-4">
                  Product
                </Heading>
                <ul className="space-y-3">
                  {productLinks.map((link) => (
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

              {/* Company Column */}
              <div>
                <Heading as="h6" weight="semibold" className="text-white mb-4">
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
            <div className="flex items-center gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12L12 17L22 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <Text size="lg" weight="semibold" className="text-white">
                orchestrate
              </Text>
            </div>

            <Text size="sm" className="text-white/50 mt-auto">
              © {currentYear}. Orchestrate.
            </Text>
          </div>

          {/* Right: Link Columns */}
          <div className="flex gap-16 lg:gap-24">
            {/* Product Column */}
            <div>
              <Heading as="h6" weight="semibold" className="text-white mb-4">
                Product
              </Heading>
              <ul className="space-y-3">
                {productLinks.map((link) => (
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

            {/* Company Column */}
            <div>
              <Heading as="h6" weight="semibold" className="text-white mb-4">
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

