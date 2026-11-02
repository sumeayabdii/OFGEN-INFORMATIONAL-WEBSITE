"use client";

import { useLang } from "./LanguageProvider";
import { LinkedIn, XLogo, YouTube } from "./Icons";
import { site } from "@/lib/site";

export default function Footer() {
  const { t } = useLang();
  const links = ["home", "about", "expertise", "projects", "contact"] as const;
  const socials = [
    { href: site.social.linkedin, label: "LinkedIn", Icon: LinkedIn },
    { href: site.social.x, label: "X", Icon: XLogo },
  ].filter((s) => s.href);

  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <a href="#home" className="footer-logo" aria-label="OFGEN Africa — back to top">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo-light.png" alt="OFGEN — energy simplified" width={1332} height={570} />
        </a>
        <nav aria-label="Footer">
          <ul className="footer-nav">
            {links.map((id) => (
              <li key={id}>
                <a href={`#${id}`}>{t.nav[id]}</a>
              </li>
            ))}
          </ul>
        </nav>
        <ul className="footer-social">
          {socials.map(({ href, label, Icon }) => (
            <li key={label}>
              <a href={href} aria-label={label} target="_blank" rel="noopener noreferrer">
                <Icon />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} {site.name}. {t.footer.rights}</p>
      </div>
    </footer>
  );
}
