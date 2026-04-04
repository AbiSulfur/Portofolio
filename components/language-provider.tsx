"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { dictionaries, Language } from '@/lib/dictionaries';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (section: keyof typeof dictionaries.en, key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    // Check if we have a saved preference
    const saved = localStorage.getItem('abigail-portfolio-lang') as Language;
    if (saved && (saved === 'en' || saved === 'id')) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('abigail-portfolio-lang', lang);
  };

  const t = (section: keyof typeof dictionaries.en, key: string): string => {
    // Basic nested object retrieval
    const dict = dictionaries[language][section] as any;
    if (dict && typeof dict[key] === 'string') {
      return dict[key];
    }
    // Fallback to English
    const fallbackDict = dictionaries['en'][section] as any;
    return fallbackDict?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
