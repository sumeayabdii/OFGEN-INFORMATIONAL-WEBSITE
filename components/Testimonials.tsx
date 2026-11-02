"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { useLang } from "./LanguageProvider";
import { ChevronLeft, ChevronRight, Quote } from "./Icons";

export default function Testimonials() {
  const { t } = useLang();
  const items = t.testimonials.items;
  const [i, setI] = useState(0);
  const current = items[i % items.length];
  const many = items.length > 1;

  return (
    <section id="testimonials" className="section testimonials">
      <div className="container testimonials-grid">
        <SectionHeading title={t.testimonials.title} subtitle={t.testimonials.subtitle} />
        <figure className="quote-card" aria-live="polite">
          <Quote className="icon-orange quote-mark" />
          <blockquote>{current.quote}</blockquote>
          <figcaption>— {current.author}</figcaption>
          <div className="quote-nav">
            <button type="button" className="circle-btn light" aria-label={t.testimonials.prev} disabled={!many} onClick={() => setI((v) => (v - 1 + items.length) % items.length)}>
              <ChevronLeft size={16} />
            </button>
            <button type="button" className="circle-btn light" aria-label={t.testimonials.next} disabled={!many} onClick={() => setI((v) => (v + 1) % items.length)}>
              <ChevronRight size={16} />
            </button>
          </div>
        </figure>
      </div>
    </section>
  );
}
