"use client";

import { Navbar } from "@/components/pages/landing/NavBar";
import { HeroSection } from "@/components/pages/landing/HeroSection";
import { SchemesSection } from "@/components/pages/landing/SchemesSection";
import { HowItWorksSection } from "@/components/pages/landing/HowItWorksSection";
import { StoriesSection } from "@/components/pages/landing/StoriesSection";
import { Footer } from "@/components/pages//landing/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen  font-sans">
      <Navbar />
      <HeroSection />

      {/* Stats Strip */}
      <div className="border-y border-slate-100 dark:border-slate-800  py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-around gap-8 text-center">
          {[
            { val: "1.2 Cr+", label: "Citizens" },
            { val: "₹500 Cr", label: "Money Unlocked" },
            { val: "12", label: "Languages" },
          ].map((s, i) => (
            <div key={i}>
              <p className="text-3xl font-black text-slate-900 dark:text-white">
                {s.val}
              </p>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <SchemesSection />
      <HowItWorksSection />
      <StoriesSection />
      <Footer />
    </div>
  );
}
