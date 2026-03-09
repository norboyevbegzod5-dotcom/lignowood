"use client";

import { createContext, useContext, ReactNode } from "react";
import { dictionaries, Locale, Dictionary } from "@/lib/dictionaries";

type LanguageContextType = {
  lang: Locale;
  dict: Dictionary;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "ru",
  dict: dictionaries["ru"],
});

export function LanguageProvider({ 
  children, 
  lang 
}: { 
  children: ReactNode; 
  lang: Locale; 
}) {
  return (
    <LanguageContext.Provider value={{ lang, dict: dictionaries[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
