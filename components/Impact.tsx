"use client";

import Photo from "./Photo";
import { useLang } from "./LanguageProvider";
import { Coins, Leaf, People, Seedling } from "./Icons";
import { site } from "@/lib/site";

export default function Impact() {
  const { t } = useLang();
  const icons = [Seedling, Coins, People, Leaf];
  const impact = site.impact;
  const values = [impact.mw, impact.capital, impact.communities, impact.years];

  return (
    <section id="impact" className="impact dark-section">
      <div className="section-bg">
        <Photo src="/images/impact-bg.jpg" alt="" />
        <div className="overlay overlay-impact" />
      </div>
      <div className="container impact-grid">
        <div>
          <span className="accent-bar" aria-hidden="true" />
          <h2 className="section-title">{t.impact.title}</h2>
          <p className="section-subtitle">{t.impact.subtitle}</p>
        </div>
        <ul className="impact-stats">
          {t.impact.stats.map((s, i) => {
            const Icon = icons[i];
            const value = values[i];
            return (
              <li key={i}>
                <Icon size={36} strokeWidth={1.3} className="icon-orange" />
                <strong>
                  {value ? `${value}+ ` : ""}
                  {s.unit}
                </strong>
                <span>{s.label}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}