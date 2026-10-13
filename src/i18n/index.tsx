import React, { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import en from "./en.json";
import id from "./id.json";

export type Locale = "en" | "id";

export const dictionaries = { en, id } as const;

interface I18nContextType {
  locale: Locale;
  setLocale: (next: Locale) => void;
  toggleLocale: () => void;
  t: (keyPath: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("abigail-portfolio-lang") as Locale | null;
      if (saved === "en" || saved === "id") {
        setLocaleState(saved);
        document.documentElement.lang = saved;
      } else {
        document.documentElement.lang = "en";
      }
    }
  }, []);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    if (typeof window !== "undefined") {
      localStorage.setItem("abigail-portfolio-lang", next);
      document.documentElement.lang = next;
    }
  };

  const toggleLocale = () => {
    const next = locale === "en" ? "id" : "en";
    setLocale(next);
  };

  const t = (keyPath: string): string => {
    const currentDict = dictionaries[locale] as Record<string, any>;
    const fallbackDict = dictionaries.en as Record<string, any>;

    const keys = keyPath.split(".");
    let currVal: any = currentDict;
    let fallbackVal: any = fallbackDict;

    for (const k of keys) {
      currVal = currVal?.[k];
      fallbackVal = fallbackVal?.[k];
    }

    if (typeof currVal === "string") return currVal;
    if (typeof fallbackVal === "string") return fallbackVal;
    return keyPath;
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, toggleLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return ctx;
}
