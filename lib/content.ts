/**
 * All page copy, in English and French.
 * Edit text here — components read from this file.
 */

const en = {
  nav: {
    home: "Home",
    expertise: "Expertise",
    solutions: "Solutions",
    projects: "Projects",
    about: "About",
    contact: "Contact",
    menu: "Menu",
    close: "Close",
  },
  hero: {
    eyebrow: ["Developer", "EPCF", "Grid & Distributed Energy"],
    title: "Building Africa’s Energy Infrastructure",
    text: "OFGEN Africa develops, finances, and delivers bankable energy and grid infrastructure projects across Sub-Saharan Africa, integrating solar, battery storage, and high-voltage systems.",
    primary: "Explore our projects",
    secondary: "Partner with OFGEN",
    strip: [
      "Across East, West & Southern Africa",
      "Utility & C&I Infrastructure",
      "End-to-end project delivery",
    ],
  },
  about: {
    title: "Who we are",
    subtitle: "Africa’s partner for energy and digital infrastructure",
    text: "Headquartered in Nairobi and operating since 2013, OFGEN Africa develops, finances, builds and operates solar, battery storage, grid and telecom energy projects for businesses, utilities and communities across Sub-Saharan Africa.",
    more: "One accountable team, from feasibility to long-term operation. Our clients include Safaricom, GSK, Swissport, Serena Hotels and Toyota Kenya, and we power mining operations in the DRC.",
    cta: "Learn more about us",
    less: "Show less",
    highlights: [
      { value: "12", label: "Countries across Sub-Saharan Africa" },
      { value: "100+", label: "Projects delivered" },
      { value: "Since 2013", label: "Powering African businesses" },
    ],
    imageAlt: "The OFGEN Africa leadership team",
  },
  expertise: {
    title: "Our Expertise",
    subtitle: "End-to-end energy infrastructure solutions",
    learnMore: "Learn more",
    showLess: "Show less",
    items: [
      {
        title: "Project Development",
        text: "We identify, assess and structure high-impact energy projects.",
        details: ["Site origination and feasibility", "Permitting and offtake structuring", "Technical and commercial due diligence"],
      },
      {
        title: "Infrastructure Financing (EPCF / EaaS)",
        text: "We mobilize capital and structure bankable deals for long-term success.",
        details: ["EPC + Financing (EPCF)", "Energy-as-a-Service (EaaS) models", "Blended and project finance structures"],
      },
      {
        title: "Engineering, Procurement & Construction",
        text: "We deliver quality, on-time and on-budget, from design to commissioning.",
        details: ["Engineering, procurement & construction", "HSE and quality management", "Testing and commissioning"],
      },
      {
        title: "Operations & Asset Management",
        text: "We keep assets performing and value growing over the long term.",
        details: ["Remote monitoring and O&M", "Performance optimisation", "Asset lifecycle management"],
      },
    ],
  },
  // Shown as the "Our Projects" section (components/Solutions.tsx)
  solutions: {
    title: "Our Projects",
    subtitle: "Solar, storage, grid and telecom energy projects delivered across Africa.",
    viewAll: "View all details",
    hideAll: "Hide details",
    explore: "Explore",
    items: [
      {
        key: "solar",
        title: "Solar PV Systems",
        text: "Scalable solar solutions for industrial, telecom, and utility applications.",
        details: ["Ground-mounted and rooftop systems", "Hybrid solar-diesel solutions", "Captive and behind-the-meter power", "Telecom and data infrastructure energy"],
      },
      {
        key: "storage",
        title: "Battery Energy Storage Systems (BESS)",
        text: "Storage solutions focused on reliability, cost optimization, and grid stability.",
        details: ["Grid-scale and distributed storage", "Peak shaving and load optimization", "Diesel displacement", "Renewable firming and backup power"],
      },
      {
        key: "grid",
        title: "Grid Infrastructure",
        text: "High-voltage infrastructure delivery for utilities and large-scale projects.",
        details: ["Transmission and distribution lines", "Primary and secondary substations", "Grid evacuation systems", "Network reinforcement"],
      },
      {
        key: "telecom",
        title: "Telecom Energy",
        text: "Specialized energy delivery models for tower companies and telecom operators.",
        details: ["BTS solarization programs", "Hybrid solar, BESS and diesel systems", "Energy-as-a-Service (EaaS)", "Multi-site rollouts from 100 to 1,000+ sites"],
      },
    ],
  },
  sectors: {
    title: "Sectors & Regions",
    subtitle: "Powering key sectors and communities across Africa.",
    cta: "Explore all sectors",
    items: [
      "Telecom & Digital Infrastructure",
      "Industrial & Mining Energy",
      "Utility & Grid Infrastructure",
      "Commercial & Industrial Customers",
    ],
    footprintTitle: "Our footprint",
    footprintText: "Operating and delivering projects across East, West and Southern Africa.",
    legend: { east: "East Africa", west: "West Africa", south: "Southern Africa" },
    mapLabel: "Map of Africa highlighting East, West and Southern Africa",
  },
  impact: {
    title: "Our Impact",
    subtitle: "Cleaner energy. Stronger economies. A more connected Africa.",
    stats: [
      { unit: "MWp", label: "Renewable energy capacity developed" },
      { unit: "MWh", label: "Battery storage (BESS) deployed" },
      { unit: "Projects", label: "Delivered across Africa" },
      { unit: "Years", label: "Of experience" },
    ],
  },
  testimonials: {
    title: "What Our Partners Say",
    subtitle: "Trusted by partners, investors and communities across Africa.",
    prev: "Previous testimonial",
    next: "Next testimonial",
    items: [
      {
        quote: "Built the rooftop solar plants at GSK, JKIA – Swissport facility, Serena Off grid Lodges, Toyota Nairobi showroom and many others. Commendable work.",
        author: "Nambuya Imbega",
        source: "Google review ★★★★★",
      },
      {
        quote: "A premier renewable energy company.",
        author: "Bethuel Sallah",
        source: "Google review ★★★★★",
      },
    ],
  },
  contact: {
    ctaTitle: "Let’s Build a Sustainable Future",
    ctaText: "Have a project in mind or want to learn more about our solutions? Our team is ready to help.",
    ctaButton: "Get in touch",
    formTitle: "Contact Us",
    fullName: "Full Name",
    company: "Company",
    email: "Email Address",
    enquiry: "Enquiry Type",
    select: "Select an option",
    enquiryOptions: ["Project development", "Partnership", "Investment", "Solutions & services", "Careers", "Other"],
    message: "Message",
    send: "Send Message",
    sent: "Thanks! We'll be in touch soon.",
    required: "Please fill in all required fields.",
    linkedin: "Follow us on LinkedIn",
  },
  footer: { rights: "All rights reserved." },
};

export type Content = typeof en;

const fr: Content = {
  nav: {
    home: "Accueil",
    expertise: "Expertise",
    solutions: "Solutions",
    projects: "Projets",
    about: "À propos",
    contact: "Contact",
    menu: "Menu",
    close: "Fermer",
  },
  hero: {
    eyebrow: ["Développeur", "EPCF", "Énergie réseau & décentralisée"],
    title: "Bâtir les infrastructures énergétiques de l’Afrique",
    text: "OFGEN Africa développe, finance et livre des projets bancables d’infrastructures énergétiques et de réseaux en Afrique subsaharienne, en intégrant le solaire, le stockage par batteries et les systèmes haute tension.",
    primary: "Découvrir nos projets",
    secondary: "Devenir partenaire",
    strip: [
      "En Afrique de l’Est, de l’Ouest et australe",
      "Infrastructures utilitaires & C&I",
      "Livraison de projets de bout en bout",
    ],
  },
  about: {
    title: "Qui sommes-nous",
    subtitle: "Le partenaire de l’Afrique pour les infrastructures énergétiques et numériques",
    text: "Basée à Nairobi et active depuis 2013, OFGEN Africa développe, finance, construit et exploite des projets solaires, de stockage par batteries, de réseaux et d’énergie pour les télécoms, au service des entreprises, des services publics et des communautés en Afrique subsaharienne.",
    more: "Une seule équipe responsable, de la faisabilité à l’exploitation. Parmi nos clients : Safaricom, GSK, Swissport, Serena Hotels et Toyota Kenya. Nous alimentons aussi des sites miniers en RDC.",
    cta: "En savoir plus sur nous",
    less: "Voir moins",
    highlights: [
      { value: "12", label: "Pays en Afrique subsaharienne" },
      { value: "100+", label: "Projets réalisés" },
      { value: "Depuis 2013", label: "Au service des entreprises africaines" },
    ],
    imageAlt: "L’équipe dirigeante d’OFGEN Africa",
  },
  expertise: {
    title: "Notre expertise",
    subtitle: "Des solutions d’infrastructures énergétiques de bout en bout",
    learnMore: "En savoir plus",
    showLess: "Voir moins",
    items: [
      {
        title: "Développement de projets",
        text: "Nous identifions, évaluons et structurons des projets énergétiques à fort impact.",
        details: ["Origination et faisabilité", "Permis et structuration de l’achat d’énergie", "Due diligence technique et commerciale"],
      },
      {
        title: "Financement d’infrastructures (EPCF / EaaS)",
        text: "Nous mobilisons des capitaux et structurons des opérations bancables durables.",
        details: ["EPC + financement (EPCF)", "Modèles Energy-as-a-Service (EaaS)", "Financements mixtes et de projet"],
      },
      {
        title: "Ingénierie, approvisionnement & construction",
        text: "Nous livrons avec qualité, dans les délais et le budget, de la conception à la mise en service.",
        details: ["Ingénierie, approvisionnement et construction", "Gestion HSE et qualité", "Essais et mise en service"],
      },
      {
        title: "Exploitation & gestion d’actifs",
        text: "Nous maintenons la performance des actifs et leur valeur sur le long terme.",
        details: ["Supervision à distance et O&M", "Optimisation des performances", "Gestion du cycle de vie des actifs"],
      },
    ],
  },
  solutions: {
    title: "Nos projets",
    subtitle: "Des projets solaires, de stockage, de réseau et d’énergie télécoms réalisés à travers l’Afrique.",
    viewAll: "Voir tous les détails",
    hideAll: "Masquer les détails",
    explore: "Découvrir",
    items: [
      {
        key: "solar",
        title: "Systèmes solaires PV",
        text: "Des solutions solaires évolutives pour l’industrie, les télécoms et les services publics.",
        details: ["Centrales au sol et en toiture", "Solutions hybrides solaire-diesel", "Production captive et derrière le compteur", "Énergie pour télécoms et data centers"],
      },
      {
        key: "storage",
        title: "Stockage par batteries (BESS)",
        text: "Des solutions de stockage axées sur la fiabilité, l’optimisation des coûts et la stabilité du réseau.",
        details: ["Stockage centralisé et distribué", "Écrêtement des pointes et optimisation", "Réduction du diesel", "Lissage des renouvelables et secours"],
      },
      {
        key: "grid",
        title: "Infrastructures réseau",
        text: "Des infrastructures haute tension pour les services publics et les grands projets.",
        details: ["Lignes de transport et de distribution", "Postes primaires et secondaires", "Systèmes d’évacuation", "Renforcement des réseaux"],
      },
      {
        key: "telecom",
        title: "Énergie télécoms",
        text: "Des modèles énergétiques dédiés aux towercos et aux opérateurs télécoms.",
        details: ["Programmes de solarisation BTS", "Systèmes hybrides solaire, BESS et diesel", "Energy-as-a-Service (EaaS)", "Déploiements de 100 à plus de 1 000 sites"],
      },
    ],
  },
  sectors: {
    title: "Secteurs & régions",
    subtitle: "Au service des secteurs clés et des communautés à travers l’Afrique.",
    cta: "Tous les secteurs",
    items: [
      "Télécoms & infrastructures numériques",
      "Énergie industrielle & minière",
      "Réseaux & services publics",
      "Clients commerciaux & industriels",
    ],
    footprintTitle: "Notre présence",
    footprintText: "Nous développons et livrons des projets en Afrique de l’Est, de l’Ouest et australe.",
    legend: { east: "Afrique de l’Est", west: "Afrique de l’Ouest", south: "Afrique australe" },
    mapLabel: "Carte de l’Afrique montrant l’Afrique de l’Est, de l’Ouest et australe",
  },
  impact: {
    title: "Notre impact",
    subtitle: "Une énergie plus propre. Des économies plus fortes. Une Afrique plus connectée.",
    stats: [
      { unit: "MWc", label: "Capacité renouvelable développée" },
      { unit: "MWh", label: "Stockage par batteries déployé" },
      { unit: "Projets", label: "Livrés à travers l’Afrique" },
      { unit: "Ans", label: "D’expérience" },
    ],
  },
  testimonials: {
    title: "Ce que disent nos partenaires",
    subtitle: "La confiance de partenaires, d’investisseurs et de communautés à travers l’Afrique.",
    prev: "Témoignage précédent",
    next: "Témoignage suivant",
    items: [
      {
        quote: "Built the rooftop solar plants at GSK, JKIA – Swissport facility, Serena Off grid Lodges, Toyota Nairobi showroom and many others. Commendable work.",
        author: "Nambuya Imbega",
        source: "Avis Google ★★★★★",
      },
      {
        quote: "A premier renewable energy company.",
        author: "Bethuel Sallah",
        source: "Avis Google ★★★★★",
      },
    ],
  },
  contact: {
    ctaTitle: "Construisons un avenir durable",
    ctaText: "Vous avez un projet ou souhaitez en savoir plus sur nos solutions ? Notre équipe est prête à vous aider.",
    ctaButton: "Nous contacter",
    formTitle: "Contactez-nous",
    fullName: "Nom complet",
    company: "Entreprise",
    email: "Adresse e-mail",
    enquiry: "Type de demande",
    select: "Choisir une option",
    enquiryOptions: ["Développement de projet", "Partenariat", "Investissement", "Solutions & services", "Carrières", "Autre"],
    message: "Message",
    send: "Envoyer",
    sent: "Merci ! Nous vous recontacterons très vite.",
    required: "Veuillez remplir tous les champs obligatoires.",
    linkedin: "Suivez-nous sur LinkedIn",
  },
  footer: { rights: "Tous droits réservés." },
};

export const content = { en, fr };
export type Lang = keyof typeof content;