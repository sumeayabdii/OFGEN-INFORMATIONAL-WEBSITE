"use client";

import { useEffect, useState } from "react";
import { LangSwitch, useLang } from "./LanguageProvider";
import { Close, Menu } from "./Icons";

const links = [
  { id: "home", key: "home" },
  { id: "about", key: "about" },
  { id: "expertise", key: "expertise" },
  { id: "projects", key: "projects" },
  { id: "contact", key: "contact" },
] as const;

/** Sections without their own nav link highlight the closest one. */
const navFor: Record<string, string> = {
  home: "home",
  about: "about",
  expertise: "expertise",
  projects: "projects",
  impact: "projects",
  testimonials: "projects",
  contact: "contact",
  team: "about",
  clients: "projects",
};

export default function Header() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = Object.keys(navFor)
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(navFor[e.target.id] ?? "home");
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""} ${open ? "menu-open" : ""}`}>
      <div className="header-inner">
        <nav className="main-nav" aria-label="Main">
          <ul>
            {links.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className={active === l.id ? "is-active" : ""} aria-current={active === l.id ? "true" : undefined}>
                  {t.nav[l.key]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <LangSwitch className="header-lang" />
        <span className="header-divider" aria-hidden="true" />

        <a href="#home" className="logo-box" aria-label="OFGEN Africa — home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo.png" alt="OFGEN — energy simplified" width={1332} height={570} />
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? t.nav.close : t.nav.menu}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <Close size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <div id="mobile-menu" className="mobile-menu" hidden={!open}>
        <ul>
          {links.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className={active === l.id ? "is-active" : ""} onClick={() => setOpen(false)}>
                {t.nav[l.key]}
              </a>
            </li>
          ))}
        </ul>
        <LangSwitch />
      </div>
    </header>
  );
}
