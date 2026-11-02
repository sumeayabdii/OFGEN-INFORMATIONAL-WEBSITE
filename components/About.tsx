"use client";

import { useState } from "react";
import Photo from "./Photo";
import SectionHeading from "./SectionHeading";
import { useLang } from "./LanguageProvider";
import { Africa, ArrowRight, HandPlant, People } from "./Icons";

export default function About() {
  const { t } = useLang();
  const [more, setMore] = useState(false);
  const icons = [HandPlant, Africa, People];

  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        <div className="about-text">
          <SectionHeading title={t.about.title} />
          <p className="about-subtitle">{t.about.subtitle}</p>
          <p>{t.about.text}</p>
          {more && <p className="about-more">{t.about.more}</p>}
          <button type="button" className="btn btn-primary" onClick={() => setMore((m) => !m)} aria-expanded={more}>
            {more ? t.about.less : t.about.cta} <ArrowRight size={16} className={more ? "rot-180" : ""} />
          </button>
        </div>

        <div className="about-photo">
          <Photo src="/images/team.jpg" alt={t.about.imageAlt} sizes="(max-width: 900px) 100vw, 40vw" />
        </div>

        <ul className="about-highlights">
          {t.about.highlights.map((h, i) => {
            const Icon = icons[i];
            return (
              <li key={i}>
                <Icon size={38} strokeWidth={1.3} className="icon-orange" />
                <p>
                  {h.value && <strong>{h.value}</strong>}
                  {h.label}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
