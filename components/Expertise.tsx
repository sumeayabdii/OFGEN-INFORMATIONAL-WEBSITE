"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { useLang } from "./LanguageProvider";
import { ArrowRight, Coins, Gear, HardHat, SolarSun } from "./Icons";

export default function Expertise() {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(null);
  const icons = [SolarSun, Coins, HardHat, Gear];

  return (
    <section id="expertise" className="section expertise">
      <div className="container">
        <SectionHeading title={t.expertise.title} subtitle={t.expertise.subtitle} />
        <div className="card-grid-4">
          {t.expertise.items.map((item, i) => {
            const Icon = icons[i];
            const isOpen = open === i;
            return (
              <article key={i} className={`expertise-card ${isOpen ? "is-open" : ""}`}>
                <Icon size={44} strokeWidth={1.3} className="icon-orange" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <ul className="detail-list" hidden={!isOpen}>
                  {item.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
                <button type="button" className="text-link" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : i)}>
                  {isOpen ? t.expertise.showLess : t.expertise.learnMore} <ArrowRight size={14} className={isOpen ? "rot-180" : ""} />
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
