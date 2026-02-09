"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check, Globe, Sparkles, Languages } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Language } from "@/lib/translations";

// --- CONFIG ---
const SUPPORTED_LANGUAGES: {
  code: Language;
  name: string;
  native: string;
  icon: string;
}[] = [
  { code: "en", name: "English", native: "English", icon: "🌐" },
  { code: "hi", name: "Hindi", native: "हिंदी", icon: "🇮🇳" },
  { code: "pa", name: "Punjabi", native: "ਪੰਜਾਬੀ", icon: "🌾" },
  { code: "bn", name: "Bengali", native: "বাংলা", icon: "🐅" },
  { code: "mr", name: "Marathi", native: "मराठी", icon: "🚩" },
  { code: "te", name: "Telugu", native: "తెలుగు", icon: "🦅" },
  { code: "ta", name: "Tamil", native: "தமிழ்", icon: "🛕" },
  { code: "gu", name: "Gujarati", native: "ગુજરાતી", icon: "🦁" },
  { code: "kn", name: "Kannada", native: "ಕನ್ನಡ", icon: "🐘" },
  { code: "ml", name: "Malayalam", native: "മലയാളം", icon: "🌴" },
  { code: "or", name: "Odia", native: "ଓଡ଼ିଆ", icon: "⭕" },
  { code: "ur", name: "Urdu", native: "اردو", icon: "🌙" },
];

const LanguageSelector = () => {
  const { lang, setLang, isLoaded } = useLanguage(); // Get isLoaded
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selected =
    SUPPORTED_LANGUAGES.find((l) => l.code === lang) || SUPPORTED_LANGUAGES[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ⚡ ANTI-FLICKER LOADING STATE
  if (!isLoaded) {
    return (
      <div className="flex items-center gap-2 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
        <div className="w-5 h-5 rounded-full bg-slate-200 dark:bg-slate-700 animate-pulse" />
        <div className="w-12 h-3 rounded bg-slate-200 dark:bg-slate-700 animate-pulse" />
      </div>
    );
  }

  return (
    <div className="relative z-50" ref={dropdownRef}>
      {/* --- TRIGGER BUTTON --- */}
      <motion.button
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`
          relative flex items-center gap-2.5 rounded-xl transition-all duration-300 border
          px-3.5 py-2.5 md:px-3 md:py-2
          
          ${
            isOpen
              ? "bg-white dark:bg-slate-800 border-orange-500/30 ring-4 ring-orange-500/10 shadow-lg shadow-orange-500/5"
              : "bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border-slate-200/50 dark:border-slate-700/50 hover:bg-white dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-md"
          }
        `}
      >
        <div className="relative flex items-center justify-center w-6 h-6">
          <span className="text-xl filter drop-shadow-sm z-10 relative">
            {selected.icon === "🌐" ? (
              <Globe size={18} className="text-blue-600 dark:text-blue-400" />
            ) : (
              selected.icon
            )}
          </span>
          {isOpen && (
            <motion.div
              layoutId="icon-glow"
              className="absolute inset-0 bg-orange-400/20 blur-md rounded-full scale-150"
              transition={{ duration: 0.3 }}
            />
          )}
        </div>

        <div className="flex flex-col items-start leading-none gap-0.5">
          <span className="font-bold text-sm text-slate-900 dark:text-slate-100 tracking-tight">
            {selected.native}
          </span>
        </div>

        <ChevronDown
          size={14}
          className={`ml-1 text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-orange-500" : "group-hover:text-slate-600"}`}
        />
      </motion.button>

      {/* --- DROPDOWN MENU --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 8, scale: 0.96, filter: "blur(4px)" }}
            transition={{
              type: "spring",
              stiffness: 350,
              damping: 25,
              mass: 0.8,
            }}
            className="absolute top-full right-0 mt-3 w-[280px] max-h-[400px] overflow-hidden 
                       bg-white/95 dark:bg-[#0B1121]/95 backdrop-blur-2xl
                       border border-slate-200/80 dark:border-slate-700/80
                       rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)]
                       z-[100] origin-top-right"
          >
            {/* Header */}
            <div className="px-4 py-3.5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/80 dark:bg-slate-900/80">
              <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                <Languages size={12} /> Select Language
              </span>
              <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 px-2 py-0.5 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm">
                {SUPPORTED_LANGUAGES.length}
              </span>
            </div>

            {/* List */}
            <div className="p-2 space-y-1 overflow-y-auto max-h-[300px] scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-700 scrollbar-track-transparent">
              {SUPPORTED_LANGUAGES.map((option) => (
                <motion.button
                  whileHover={{ scale: 1.02, x: 2 }}
                  whileTap={{ scale: 0.98 }}
                  key={option.code}
                  onClick={() => {
                    setLang(option.code);
                    setIsOpen(false);
                  }}
                  className={`
                    w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm transition-all duration-200 group relative overflow-hidden
                    ${
                      lang === option.code
                        ? "bg-gradient-to-r from-orange-50 to-white dark:from-orange-900/20 dark:to-transparent text-orange-700 dark:text-orange-400 font-bold border border-orange-100 dark:border-orange-500/20 shadow-sm"
                        : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/80 border border-transparent"
                    }
                  `}
                >
                  <div className="flex items-center gap-3 z-10">
                    <span className="text-xl filter drop-shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      {option.icon === "🌐" ? (
                        <Globe size={18} className="text-blue-500" />
                      ) : (
                        option.icon
                      )}
                    </span>
                    <div className="flex flex-col items-start text-left">
                      <span className="leading-none tracking-tight">
                        {option.native}
                      </span>
                      <span
                        className={`text-[10px] mt-0.5 font-medium transition-colors ${lang === option.code ? "text-orange-600/70 dark:text-orange-300/70" : "text-slate-400 group-hover:text-slate-500"}`}
                      >
                        {option.name}
                      </span>
                    </div>
                  </div>

                  {lang === option.code && (
                    <motion.div
                      initial={{ scale: 0, rotate: -45 }}
                      animate={{ scale: 1, rotate: 0 }}
                      className="bg-orange-100 dark:bg-orange-500/20 p-1 rounded-full"
                    >
                      <Check
                        size={14}
                        className="text-orange-600 dark:text-orange-400"
                        strokeWidth={3}
                      />
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector;
