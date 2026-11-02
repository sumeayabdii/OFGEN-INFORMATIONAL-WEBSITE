"use client";

import Photo from "./Photo";
import { useLang } from "./LanguageProvider";
import { Africa, ArrowRight, BoltCircle, Handshake } from "./Icons";

export default function Hero() {
  const { t } = useLang();
  const icons = [Africa, BoltCircle, Handshake];

  return (
    <section id="home" className="hero">
      <div className="hero-media">
        <Photo src="/images/home.png" alt="" priority />
        <div className="hero-overlay" />
      </div>

      <div className="container hero-content">
        <p className="eyebrow">
          {t.hero.eyebrow.map((w, i) => (
            <span key={w}>
              {i > 0 && <span className="dot" aria-hidden="true">•</span>}
              {w}
            </span>
          ))}
        </p>
        <h1 className="hero-title">{t.hero.title}</h1>
        <p className="hero-text">{t.hero.text}</p>
        <div className="hero-actions">
          <a href="#solutions" className="btn btn-primary">
            {t.hero.primary} <ArrowRight size={16} />
          </a>
          <a href="#contact" className="btn btn-outline">
            {t.hero.secondary}
          </a>
        </div>
      </div>

      <div className="hero-strip">
        <ul className="container">
          {t.hero.strip.map((label, i) => {
            const Icon = icons[i];
            return (
              <li key={i}>
                <Icon size={34} strokeWidth={1.3} />
                <span>{label}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
