"use client";

import { Language, translations } from "@/data/translations/landingPage";
import React, { createContext, useContext, useState, useEffect } from "react";
// ⚠️ IMPORTANT: Make sure this path matches where you saved your translations file
// If you saved it in 'lib/translations.ts', change this to "@/lib/translations"


// 1. Define the Shape
type LanguageContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (typeof translations)["en"];
  isLoaded: boolean;
};

// 2. Create Context
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

// 3. Create Provider
export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // Initialize with 'en' (Server Safe)
  const [state, setState] = useState<{ lang: Language; isLoaded: boolean }>({
    lang: "en",
    isLoaded: false,
  });

  useEffect(() => {
    // ⚡ FIX: Wrap in setTimeout to avoid "Synchronous setState" warning
    // This moves the update to the next event loop tick, clearing the error.
    const timer = setTimeout(() => {
      const saved = localStorage.getItem("janm-lang") as Language;

      // If we found a saved language, use it. Otherwise use "en".
      const targetLang = saved && translations[saved] ? saved : "en";

      setState({
        lang: targetLang,
        isLoaded: true,
      });
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  const setLang = (newLang: Language) => {
    localStorage.setItem("janm-lang", newLang);
    setState((prev) => ({ ...prev, lang: newLang }));
  };

  return (
    <LanguageContext.Provider
      value={{
        lang: state.lang,
        setLang,
        t: translations[state.lang] || translations["en"],
        isLoaded: state.isLoaded,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

// 4. Create Hook
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
