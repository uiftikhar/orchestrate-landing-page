"use client";

import { Navigation } from "@/components/Navigation";
import { HeroMobile } from "@/components/HeroMobile";
import { HeroTablet } from "@/components/HeroTablet";
import { HeroDesktop } from "@/components/HeroDesktop";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="w-full bg-gray-50 min-h-[calc(100vh-64px)] lg:min-h-[calc(100vh-80px)] flex">
          <div className="max-w-[1440px] mx-auto w-full">
            <HeroMobile />
            <HeroTablet />
            <HeroDesktop />
          </div>
        </section>
      </main>
    </>
  );
}
