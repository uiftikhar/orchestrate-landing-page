import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { LegalMobile } from "@/components/LegalMobile";
import { LegalTablet } from "@/components/LegalTablet";
import { LegalDesktop } from "@/components/LegalDesktop";

export default function LegalPage() {
  return (
    <>
      <Navigation />
      <LegalMobile />
      <LegalTablet />
      <LegalDesktop />
      <Footer />
    </>
  );
}

