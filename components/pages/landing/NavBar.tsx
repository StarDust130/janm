"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "@/components/ui/ModeToggle";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import LanguageSelector from "@/components/ui/LanguageSelector";
import { useLanguage } from "@/context/LanguageContext"; // 👈 IMPORT

export const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { theme, setTheme } = useTheme();
  const { t } = useLanguage(); // 👈 USE HOOK

  // ... (Scroll logic remains same) ...

  const MENU_ITEMS = [
    { label: t.nav.schemes, href: "#schemes" },
    { label: t.nav.howItWorks, href: "#how-it-works" },
    { label: t.nav.stories, href: "#stories" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="sticky top-0 z-40 backdrop-blur-xl py-2 px-4"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Image
            src="/logo-2.png"
            alt="JANM Logo"
            width={50}
            height={50}
            className="border bg-white rounded-xl"
          />

          {/* Desktop Nav - Using Translated Items */}
          <div className="hidden md:flex items-center gap-8 font-bold text-sm text-slate-600 dark:text-slate-300">
            {MENU_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-orange-600 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3 z-50">
            <div className="hidden md:flex gap-3">
              <LanguageSelector />
              <ModeToggle />
            </div>
            <div className="md:hidden flex gap-3">
              <LanguageSelector />
            </div>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <button
              className="md:hidden p-2 rounded-lg text-slate-900 dark:text-white"
              onClick={() => setMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-primary-foreground pt-24 px-6 pb-6 flex flex-col gap-6 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-2">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                Menu
              </p>
              {MENU_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-3xl font-black text-slate-900 dark:text-white py-4 border-b border-slate-100 dark:border-slate-800"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mt-auto flex flex-col gap-4">
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">
                Settings
              </p>
              <SignedOut>
                <SignInButton mode="modal">
                  <Button
                    onClick={() => setMenuOpen(false)}
                    className="w-full text-md font-bold py-3"
                  >
                    {t.nav.login}
                  </Button>
                </SignInButton>
              </SignedOut>
              <Button
                variant={"outline"}
                onClick={() => {
                  setTheme(theme === "dark" ? "light" : "dark");
                  setMenuOpen(false);
                }}
                className="w-full py-3 rounded-lg border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center gap-2 font-semibold"
              >
                {theme === "dark" ? (
                  <>
                    <Sun size={18} /> {t.nav.lightMode}
                  </>
                ) : (
                  <>
                    <Moon size={18} /> {t.nav.darkMode}
                  </>
                )}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
