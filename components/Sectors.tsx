"use client";

import SectionHeading from "./SectionHeading";
import { useLang } from "./LanguageProvider";
import { ArrowRight, Buildings, Factory, Pylon, Tower } from "./Icons";

export default function Sectors() {
  const { t } = useLang();
  const icons = [Tower, Factory, Pylon, Buildings];
  const legend = [
    { key: "east", label: t.sectors.legend.east },
    { key: "west", label: t.sectors.legend.west },
    { key: "south", label: t.sectors.legend.south },
  ];

  return (
    <section id="sectors" className="section sectors">
      <div className="container sectors-grid">
        <div className="sectors-intro">
          <SectionHeading title={t.sectors.title} subtitle={t.sectors.subtitle} />
          <a href="#projects" className="btn btn-primary btn-sm">
            {t.sectors.cta} <ArrowRight size={15} />
          </a>
        </div>

        <ul className="sector-cards">
          {t.sectors.items.map((label, i) => {
            const Icon = icons[i];
            return (
              <li key={i} className="sector-card">
                <Icon size={40} strokeWidth={1.3} className="icon-orange" />
                <span>{label}</span>
              </li>
            );
          })}
        </ul>

        <div className="footprint">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/africa-map.png" alt={t.sectors.mapLabel} width={464} height={504} className="africa-map" />
          <div className="footprint-text">
            <h3>{t.sectors.footprintTitle}</h3>
            <p>{t.sectors.footprintText}</p>
            <ul className="legend">
              {legend.map((l) => (
                <li key={l.key}>
                  <span className={`swatch swatch-${l.key}`} aria-hidden="true" />
                  {l.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
