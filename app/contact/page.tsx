"use client";

import { Navigation } from "@/components/Navigation";
import { ContactMobile } from "@/components/ContactMobile";
import { ContactTablet } from "@/components/ContactTablet";
import { ContactDesktop } from "@/components/ContactDesktop";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <ContactMobile />
      <ContactTablet />
      <ContactDesktop />
      <Footer />
    </>
  );
}

