"use client";

import React, {
  createContext,
  useContext,
  useState,
  useLayoutEffect,
} from "react";
import { Language, translations } from "@/data/translations/landingPage";

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
  // ⚡ FIX: Use lazy initialization to read localStorage only once
  // This avoids setState calls in useLayoutEffect
  const [state, setState] = useState<{ lang: Language; isLoaded: boolean }>(
    () => {
      const saved = localStorage.getItem("janm-lang") as Language;
      const targetLang = saved && translations[saved] ? saved : "en";
      return {
        lang: targetLang,
        isLoaded: true,
      };
    },
  );

  useLayoutEffect(() => {
    // No setState needed here since state is initialized on mount
  }, []);

  const setLang = (newLang: Language) => {
    localStorage.setItem("janm-lang", newLang);
    // Update just the language part of the state
    setState((prev) => ({ ...prev, lang: newLang }));
  };

  return (
    <LanguageContext.Provider
      value={{
        lang: state.lang,
        setLang,
        t: translations[state.lang],
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
