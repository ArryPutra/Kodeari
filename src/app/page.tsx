import { Header } from "@/components/layout/header";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAFBFC]">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
      </main>
    </div>
  );
}
