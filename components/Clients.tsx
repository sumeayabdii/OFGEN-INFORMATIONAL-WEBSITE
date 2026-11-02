"use client";

import SectionHeading from "./SectionHeading";
import { clients } from "@/lib/clients";
import { useLang } from "./LanguageProvider";

export default function Clients() {
  const { lang } = useLang();
  const row = (hidden: boolean) =>
    clients.map((c) => (
      <li key={c.name + hidden} className="client-logo" aria-hidden={hidden || undefined}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={c.logo} alt={hidden ? "" : c.name} loading="eager" decoding="async" width={360} height={150} />
      </li>
    ));
  return (
    <section id="clients" className="section clients">
      <div className="container">
        <SectionHeading
          title={lang === "fr" ? "Ils nous font confiance" : "Trusted by leading organisations"}
          subtitle={lang === "fr" ? "Fiers de travailler avec des organisations qui font avancer l’Afrique." : "Proud to partner with organisations driving progress across Africa."}
        />
      </div>
      <div className="client-marquee">
        <ul className="client-track">{row(false)}{row(true)}</ul>
      </div>
    </section>
  );
}