import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAFBFC]">
      <Header />
      <main className="flex-1">
        <HeroSection />
      </main>
    </div>
  );
}
