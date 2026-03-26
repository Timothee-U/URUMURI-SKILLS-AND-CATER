import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import MissionSection from "@/components/landing/MissionSection";
import ProgramsSection from "@/components/landing/ProgramsSection";
import ImpactSection from "@/components/landing/ImpactSection";
import GetInvolvedSection from "@/components/landing/GetInvolvedSection";
import Footer from "@/components/landing/Footer";

/**
 * Landing page — public, no auth required.
 * Each section id corresponds to a Navbar anchor link.
 * The `scroll-mt-navbar` utility (defined in index.css) adds
 * top offset so the fixed navbar doesn't obscure section headings.
 */
const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <section id="mission" className="scroll-mt-navbar">
          <MissionSection />
        </section>
        <section id="programs" className="scroll-mt-navbar">
          <ProgramsSection />
        </section>
        <section id="impact" className="scroll-mt-navbar">
          <ImpactSection />
        </section>
        <section id="involved" className="scroll-mt-navbar">
          <GetInvolvedSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
