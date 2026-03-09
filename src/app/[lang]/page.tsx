import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { TrustBenefits } from "@/components/TrustBenefits";
import { ProductCatalog } from "@/components/ProductCatalog";
import { Gallery } from "@/components/Gallery";
import { TargetAudience } from "@/components/TargetAudience";
import { HowItWorks } from "@/components/HowItWorks";
import { TelegramCta } from "@/components/TelegramCta";
import { LeadForm } from "@/components/LeadForm";
import { Location } from "@/components/Location";
import { Footer } from "@/components/Footer";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { ContactPopup } from "@/components/ContactPopup";
import { locales } from "@/middleware";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <TrustBenefits />
        <ProductCatalog />
        <Gallery />
        <TargetAudience />
        <HowItWorks />
        <TelegramCta />
        <LeadForm />
        <Location />
      </main>
      <Footer />
      <StickyMobileCta />
      <ContactPopup />
    </>
  );
}
