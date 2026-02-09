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

const INDIAN_LANGS = [
  { code: "hi", label: "हिंदी", flag: "🇮🇳" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "ta", label: "தமிழ்", flag: "🕉️" },
  { code: "bn", label: "বাংলা", flag: "🐅" },
];

export const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { theme, setTheme } = useTheme();
  const [lang, setLang] = useState(INDIAN_LANGS[0]);

  useEffect(() => {
    if (isMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="sticky top-0  z-40 backdrop-blur-xl  py-2 px-4"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Image
            src="/logo-2.png"
            alt="JANM Logo"
            width={50}
            height={50}
            className="border bg-white rounded-xl"
          />

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 font-bold text-sm text-slate-600 dark:text-slate-300">
            <Link
              href="#schemes"
              className="hover:text-orange-600 transition-colors"
            >
              Schemes
            </Link>
            <Link
              href="#how-it-works"
              className="hover:text-green-600 transition-colors"
            >
              How it Works
            </Link>
            <Link
              href="#stories"
              className="hover:text-blue-600 transition-colors"
            >
              Stories
            </Link>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3 z-50">
            <div className="hidden md:flex gap-3">
              <button className="text-xs font-bold border border-slate-200 dark:border-slate-700 px-3 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 flex gap-2 transition-colors">
                <span>{lang.flag}</span> <span>{lang.label}</span>
              </button>
              <ModeToggle />
            </div>

            <SignedOut>
              <SignInButton mode="modal">
                <Button className=" text-xs font-bold px-4 py-2.5 rounded-lg hover:opacity-90 transition-opacity">
                  Login
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>

            <button
              className="md:hidden p-2  rounded-lg text-slate-900 dark:text-white active:scale-95 transition-transform"
              onClick={() => setMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
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
              {["Schemes", "How it Works", "Stories"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-3xl font-black text-slate-900 dark:text-white py-4 border-b border-slate-100 dark:border-slate-800 active:text-orange-500"
                >
                  {item}
                </Link>
              ))}
            </div>

            <div className="mt-auto flex flex-col gap-4">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Settings
              </p>
              <div className="grid grid-cols-2 gap-3">
                {INDIAN_LANGS.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLang(l)}
                    className={`p-3 rounded-xl border-2 font-bold text-sm flex items-center justify-center gap-2 transition-all ${lang.code === l.code ? "border-orange-500 bg-orange-50 dark:bg-orange-900/20 text-orange-700" : "border-slate-100 dark:border-slate-700"}`}
                  >
                    <span>{l.flag}</span> {l.label}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-full p-4 rounded-xl border-2 border-slate-100 dark:border-slate-700 flex items-center justify-center gap-3 font-bold active:scale-95 transition-transform"
              >
                {theme === "dark" ? (
                  <>
                    <Moon /> Dark Mode
                  </>
                ) : (
                  <>
                    <Sun /> Light Mode
                  </>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
