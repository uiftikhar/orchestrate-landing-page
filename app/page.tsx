"use client";

import { Navigation } from "@/components/Navigation";
import { HeroMobile } from "@/components/HeroMobile";
import { HeroTablet } from "@/components/HeroTablet";
import { HeroDesktop } from "@/components/HeroDesktop";
import { Footer } from "@/components/Footer";

export default function Home() {
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
