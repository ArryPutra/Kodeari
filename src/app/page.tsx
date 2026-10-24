import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAFBFC]">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <PricingSection />
        <HowItWorksSection />
      </main>
      <Footer />
    </div>
  );
}
