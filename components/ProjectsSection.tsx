"use client";

import { useState } from "react";
import Photo from "./Photo";
import SectionHeading from "./SectionHeading";
import { useLang } from "./LanguageProvider";
import { ArrowRight } from "./Icons";

/** One photo per project card. Change the filenames to match your files in public/images/ */
const photos: Record<string, string> = {
  solar: "/images/solar1.jpeg",
  storage: "/images/battery-solution.png",
  grid: "/images/grid.jpeg",
  telecom: "/images/telecom.jpeg",
};

export default function Projects() {
  const { t } = useLang();
  const p = t.solutions; // project cards use the "solutions" text in lib/content.ts
  const [openAll, setOpenAll] = useState(false);
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="projects" className="section solutions dark-section">
      <div className="section-bg">
        <Photo src="/images/solution-background.jpeg" alt="" />
        <div className="overlay overlay-solutions" />
      </div>
      <div className="container">
        <div className="section-head-row">
          <SectionHeading title={p.title} subtitle={p.subtitle} light />
          <button
            type="button"
            className="text-link on-dark"
            onClick={() => { setOpenAll((v) => !v); setOpen(null); }}
            aria-pressed={openAll}
          >
            {openAll ? p.hideAll : p.viewAll} <ArrowRight size={14} />
          </button>
        </div>

        <div className="card-grid-4 solution-grid">
          {p.items.map((s) => {
            const isOpen = openAll || open === s.key;
            return (
              <article key={s.key} className={`solution-card ${isOpen ? "is-open" : ""}`}>
                <Photo
                  src={photos[s.key] ?? photos.solar}
                  alt={s.title}
                  sizes="(max-width: 600px) 100vw, (max-width: 1100px) 50vw, 25vw"
                />
                <div className="solution-shade" />
                <div className="solution-body">
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <ul className="detail-list on-dark" hidden={!isOpen}>
                    {s.details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                  <div className="solution-foot">
                    <span className="mini-label">{p.explore}</span>
                    <button
                      type="button"
                      className="circle-btn"
                      aria-expanded={isOpen}
                      aria-label={`${p.explore}: ${s.title}`}
                      onClick={() => {
                        setOpenAll(false);
                        setOpen(open === s.key ? null : s.key);
                      }}
                    >
                      <ArrowRight size={14} className={isOpen ? "rot-90" : ""} />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}