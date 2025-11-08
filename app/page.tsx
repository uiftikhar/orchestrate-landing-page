"use client";

import { Navigation } from "@/components/Navigation";
import { HeroMobile } from "@/components/HeroMobile";
import { HeroTablet } from "@/components/HeroTablet";
import { HeroDesktop } from "@/components/HeroDesktop";
import { Footer } from "@/components/Footer";
import { useScrollToAnchor } from "@/hooks/useScrollToAnchor";

export default function Home() {
  useScrollToAnchor();

  return (
    <>
      <Navigation />
      <main>
        <HeroMobile />
        <HeroTablet />
        <HeroDesktop />
      </main>
      <Footer />
    </>
  );
}
