"use client";

import { useRef, useState } from "react";
import Photo from "./Photo";
import { LangSwitch, useLang } from "./LanguageProvider";
import { ArrowRight, ChevronDown, LinkedIn, Mail, MapPin, Phone } from "./Icons";
import { site } from "@/lib/site";

/**
 * The form opens the visitor's email app with the message pre-filled
 * (no server needed). To send from the server instead, post the same
 * fields to an API route or a form service in `onSubmit`.
 */
export default function Contact() {
  const { t } = useLang();
  const c = t.contact;
  const nameRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<"" | "sent" | "error">("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      setStatus("error");
      form.reportValidity();
      return;
    }
    const f = new FormData(form);
    const subject = `${f.get("enquiry") || "Enquiry"} — ${f.get("name")}${f.get("company") ? ` (${f.get("company")})` : ""}`;
    const body = `${f.get("message")}\n\n${f.get("name")}\n${f.get("company") || ""}\n${f.get("email")}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("sent");
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-cta dark-section">
        <div className="section-bg">
         <Photo src="/images/grid.jpeg" alt="" sizes="(max-width: 900px) 100vw, 38vw" />
          <div className="overlay overlay-contact" />
        </div>
        <div className="contact-cta-inner">
          <span className="accent-bar" aria-hidden="true" />
          <h2 className="section-title">{c.ctaTitle}</h2>
          <p>{c.ctaText}</p>
          <button type="button" className="btn btn-primary btn-sm" onClick={() => nameRef.current?.focus()}>
            {c.ctaButton} <ArrowRight size={15} />
          </button>
        </div>
      </div>

      <div className="contact-main">
        <form className="contact-form" onSubmit={onSubmit} noValidate>
          <h3>{c.formTitle}</h3>
          <div className="form-grid">
            <label className="field">
              <span>{c.fullName}*</span>
              <input ref={nameRef} name="name" type="text" autoComplete="name" required />
            </label>
            <label className="field">
              <span>{c.company}</span>
              <input name="company" type="text" autoComplete="organization" />
            </label>
            <label className="field">
              <span>{c.email}*</span>
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label className="field">
              <span>{c.enquiry}</span>
              <div className="select-wrap">
                <select name="enquiry" defaultValue="">
                  <option value="">{c.select}</option>
                  {c.enquiryOptions.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
                <ChevronDown size={16} />
              </div>
            </label>
            <label className="field field-full">
              <span>{c.message}*</span>
              <textarea name="message" rows={4} required />
            </label>
          </div>
          <button type="submit" className="btn btn-primary btn-sm">
            {c.send} <ArrowRight size={15} />
          </button>
          {status && (
            <p className={`form-status ${status}`} role="status">
              {status === "sent" ? c.sent : c.required}
            </p>
          )}
        </form>

        <ul className="contact-info">
          <li>
            <MapPin size={20} className="icon-orange" />
            <div>
              <strong>{site.city}</strong>
              <small>{site.address}</small>
            </div>
          </li>
          <li>
            <Mail size={20} className="icon-orange" />
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </li>
          {site.phone && (
            <li>
              <Phone size={20} className="icon-orange" />
              <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
            </li>
          )}
          {site.social.linkedin && (
            <li>
              <LinkedIn size={20} className="icon-orange" />
              <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer">{c.linkedin}</a>
            </li>
          )}
          <li className="contact-lang">
            <LangSwitch className="on-light" />
          </li>
        </ul>
      </div>
    </section>
  );
}

