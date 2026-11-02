/**
 * Site-wide settings. Edit these values to update contact details,
 * social links and impact numbers everywhere on the page.
 */
export const site = {
  name: "OFGEN Africa",
  email: "talk2us@ofgen.africa",
  // TODO: replace with the real phone number (leave "" to hide the row).
  phone: "+254 712 287 088",
  city: "Nairobi, Kenya",
  address: "No 7 Diani Close, Kilimani",
  social: {
    // TODO: paste your real profile URLs. Leave "" to hide an icon.
    linkedin: "https://www.linkedin.com/company/ofgen/home/",
    x: "https://x.com/Ofgenkenya",
  },
  /** Impact figures from the company profile. Leave a value "" to hide its number. */
  impact: {
    mw: "50",
    capital: "30",
    communities: "100",
    years: "10",
  },
};

/** Section ids used for one-page navigation. */
export const sectionIds = {
  home: "home",
  about: "about",
  team: "team",
  expertise: "expertise",
  solutions: "solutions",
  sectors: "sectors",
  projects: "projects",
  clients: "clients",
  impact: "impact",
  testimonials: "testimonials",
  contact: "contact",
} as const;