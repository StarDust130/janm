import { ModeToggle } from "@/components/ui/ModeToggle";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import HeroSection from "@/components/landing/HeroSection";
import SchemesSection from "@/components/landing/SchemesSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 h-16 w-full border-b bg-background/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-8 h-full flex items-center justify-between">
          <h1 className="font-extrabold tracking-tight text-lg">
            JANM <span className="text-orange-500">IN</span>
          </h1>

          <div className="flex items-center gap-4">
            <ModeToggle />

            <SignedOut>
              <SignInButton />
              <SignUpButton>
                <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm h-10 px-5 hover:opacity-90 transition">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>

            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </header>

      {/* LANDING CONTENT */}
      <main>
        <HeroSection />
        <SchemesSection />
        <HowItWorksSection />
      </main>

      <Footer />
    </div>
  );
}
