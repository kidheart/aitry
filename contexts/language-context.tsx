"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "zh";

interface LangCtx {
  lang: Lang;
  toggle: () => void;
}

const LanguageContext = createContext<LangCtx>({
  lang: "en",
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const toggle = () => setLang((l) => (l === "en" ? "zh" : "en"));
  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
