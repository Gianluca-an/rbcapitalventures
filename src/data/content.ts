// ---------------------------------------------------------------------------
// RB Capital Ventures — content model
// All copy sourced from the client's existing site (rbcapitalventures.com).
// Kept in one place so the whole site is content-driven and easy to update.
// ---------------------------------------------------------------------------

export const company = {
  name: "RB Capital Ventures",
  legalName: "RB Capital Ventures Ltd.",
  tagline: ["Independent Critical Thinking", "Strategic Partnerships", "Systematic Execution"],
  promise: "Transforming complex opportunities into enduring value.",
  email: "info@rbcapitalventures.com",
  address: {
    line1: "82, Cherokee Road, P.O. Box 908",
    line2: "Providenciales, Turks and Caicos Islands",
  },
  registration: "TC.054296",
  year: 2026,
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Approach", href: "#approach" },
  { label: "Criteria", href: "#criteria" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

// Headline metrics derived from the portfolio + criteria. Framed as project /
// transaction value, not deployed capital or AUM.
export const stats = [
  { value: "$690M+", label: "Aggregate project value across active mandates" },
  { value: "15", label: "Mandates worldwide" },
  { value: "12", label: "Sectors of focus" },
  { value: "4", label: "Continents" },
];

export const pillars = [
  {
    title: "Independent Critical Thinking",
    body: "We apply rigorous, unbiased analysis to every opportunity, challenging conventional wisdom and uncovering value where others see complexity.",
  },
  {
    title: "Strategic Business Analysis",
    body: "Our deep sector expertise and analytical frameworks enable us to identify sustainable competitive advantages and long-term value creation pathways.",
  },
  {
    title: "Systematic Execution",
    body: "Disciplined processes and proven methodologies ensure consistent delivery from due diligence through value realization and exit.",
  },
];

export const about = {
  eyebrow: "About the firm",
  heading: "A global investment and project-financing partner.",
  body: "RB Capital Ventures Ltd. is a global investment and project-financing firm dedicated to building lasting partnerships through trust, transparency, and inclusiveness. We believe in the power of independent critical thinking, strategic analysis, and systematic execution to transform complex opportunities across diverse sectors into sustainable value.",
  values: [
    {
      title: "Excellence",
      body: "We maintain the highest standards in every aspect of our work, from initial analysis to final execution.",
    },
    {
      title: "Alignment",
      body: "Our success is measured by the success of our partners. We align interests to create win-win outcomes.",
    },
    {
      title: "Flexible Capital",
      body: "We provide tailored financing solutions that adapt to the unique needs of each opportunity and partner.",
    },
  ],
};

export const criteria = {
  eyebrow: "Investment criteria",
  heading: "Where we engage.",
  groups: [
    {
      title: "Company Size",
      items: ["Revenue: $10M – $500M+", "EBITDA: $2M – $100M+", "Enterprise Value: $15M – $750M+"],
    },
    {
      title: "Transaction Types",
      items: ["Growth Equity", "Buyouts & Recapitalizations", "Project Finance", "Strategic Partnerships"],
    },
    {
      title: "Investment Size & Structures",
      items: [
        "Check Size: $5M – $150M+",
        "Equity, Mezzanine, Structured Debt",
        "Flexible hold periods (3–10 years)",
        "Minority and control positions",
      ],
    },
    {
      title: "Company Characteristics",
      items: [
        "Proven business models",
        "Strong management teams",
        "Sustainable competitive advantages",
        "Clear value creation pathways",
      ],
    },
  ],
};

export const sectors = [
  "MedTech",
  "BioTech",
  "Renewable Energy",
  "Oil & Gas",
  "Real Estate",
  "Hospitality",
  "Cleantech",
  "Manufacturing",
  "Infrastructure",
  "Technology",
  "AI/Cloud",
  "Derivatives",
];

export type Project = {
  amount: string;
  title: string;
  location: string;
  region: "Americas" | "Europe" | "Caribbean" | "Asia" | "Global";
  sector: string;
  body: string;
};

export const portfolio: Project[] = [
  {
    amount: "$130M",
    title: "Hydrogen Field and Pipeline",
    location: "Texas, US",
    region: "Americas",
    sector: "Renewable Energy",
    body: "Green hydrogen production and distribution infrastructure.",
  },
  {
    amount: "$110M",
    title: "Renewable Diesel and Naphtha Plant",
    location: "Louisiana, US",
    region: "Americas",
    sector: "Cleantech",
    body: "State-of-the-art renewable fuel production facility.",
  },
  {
    amount: "$100M",
    title: "Water Bottling, Data Center & Pyrolytic Gasification Plant",
    location: "Hawaii, US",
    region: "Americas",
    sector: "Infrastructure",
    body: "Tire remuneration to energy plant with integrated facilities.",
  },
  {
    amount: "$75M",
    title: "Renewable Materials — Hemp Fibre",
    location: "Alberta, Canada",
    region: "Americas",
    sector: "Manufacturing",
    body: "Automotive-grade hemp fiber manufacturing for sustainable materials.",
  },
  {
    amount: "$72M",
    title: "Hospitality Real Estate Developer",
    location: "California, US",
    region: "Americas",
    sector: "Real Estate",
    body: "JV equity investment; collective projects valued at $630M.",
  },
  {
    amount: "$50M",
    title: "Pyrolytic Gasification — Municipal Waste to Energy Plant",
    location: "Hawaii, US",
    region: "Americas",
    sector: "Renewable Energy",
    body: "Collective projects totaling $510M in advanced waste conversion technology.",
  },
  {
    amount: "$50M",
    title: "Magnesium Alloy Manufacturer",
    location: "Munich, Germany | Hyderabad, India",
    region: "Global",
    sector: "Manufacturing",
    body: "Automotive-grade magnesium alloy production facilities.",
  },
  {
    amount: "$29.4M",
    title: "Hospitality Real Estate Developer",
    location: "St Kitts & Nevis",
    region: "Caribbean",
    sector: "Hospitality",
    body: "Caribbean hospitality development and resort infrastructure.",
  },
  {
    amount: "$25M",
    title: "Convention Centre — Real Estate Redevelopment",
    location: "Texas, US",
    region: "Americas",
    sector: "Real Estate",
    body: "Large-scale commercial real estate transformation project.",
  },
  {
    amount: "$15M",
    title: "Residential Condominiums, Tech Tower",
    location: "Toronto, Canada",
    region: "Americas",
    sector: "Real Estate",
    body: "Mixed-use development in Toronto's innovation corridor.",
  },
  {
    amount: "$15M",
    title: "Wireless EV Charging Manufacturer",
    location: "London, UK",
    region: "Europe",
    sector: "Technology",
    body: "Next-generation electric vehicle charging infrastructure.",
  },
  {
    amount: "$5M",
    title: "AI Data Cloud & Respiratory Device",
    location: "Boston, US",
    region: "Americas",
    sector: "AI/Cloud",
    body: "Healthcare technology and cloud computing innovation.",
  },
  {
    amount: "$5M",
    title: "Hot Chocolate & Dispenser Manufacturer",
    location: "Paris, France | Beirut, Lebanon",
    region: "Global",
    sector: "Manufacturing",
    body: "International food and beverage equipment manufacturing.",
  },
  {
    amount: "$5M",
    title: "Organ Transportation",
    location: "London, UK",
    region: "Europe",
    sector: "MedTech",
    body: "Medical logistics and organ transport technology solutions.",
  },
  {
    amount: "$3M",
    title: "Investment Platform",
    location: "Washington DC, US",
    region: "Americas",
    sector: "Technology",
    body: "Digital investment management and portfolio platform.",
  },
];

export const contact = {
  eyebrow: "Contact",
  heading: "Begin a conversation.",
  body: "We welcome the opportunity to discuss potential partnerships and investment opportunities. Reach out to our team to begin a conversation.",
};
