"use client";

import { Navbar } from "@/components/pages/landing/NavBar";
import { HeroSection } from "@/components/pages/landing/HeroSection";
import { SchemesSection } from "@/components/pages/landing/SchemesSection";
import { HowItWorksSection } from "@/components/pages/landing/HowItWorksSection";
import { StoriesSection } from "@/components/pages/landing/StoriesSection";
import { Footer } from "@/components/pages//landing/Footer";
import StatsStrip from "@/components/pages/landing/StatsStrip";

export default function LandingPage() {
  return (
    <div className="min-h-screen  font-sans">
      <Navbar />
      <HeroSection />

      {/* Stats Strip */}
    <StatsStrip />

      <SchemesSection />
      <HowItWorksSection />
      <StoriesSection />
      <Footer />
    </div>
  );
}
