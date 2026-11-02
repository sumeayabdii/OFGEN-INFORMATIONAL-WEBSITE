"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { content, type Content, type Lang } from "@/lib/content";

type Ctx = { lang: Lang; t: Content; setLang: (l: Lang) => void };
const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("ofgen-lang");
      if (saved === "en" || saved === "fr") setLangState(saved);
    } catch {
      /* storage unavailable — keep default */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem("ofgen-lang", l);
    } catch {
      /* ignore */
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, t: content[lang], setLang }}>{children}</LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside <LanguageProvider>");
  return ctx;
}

export function LangSwitch({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();
  return (
    <div className={`lang-switch ${className}`} role="group" aria-label="Language">
      <button type="button" className={lang === "fr" ? "is-active" : ""} onClick={() => setLang("fr")} aria-pressed={lang === "fr"}>
        FR
      </button>
      <span aria-hidden="true">|</span>
      <button type="button" className={lang === "en" ? "is-active" : ""} onClick={() => setLang("en")} aria-pressed={lang === "en"}>
        EN
      </button>
    </div>
  );
}
