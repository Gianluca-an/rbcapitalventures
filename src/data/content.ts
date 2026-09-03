// ---------------------------------------------------------------------------
// RB Capital Ventures, content model (all copy per the client brief)
// Photographic slots carry a `caption` describing the intended subject so the
// placeholder reads correctly and the real image drops straight in.
// ---------------------------------------------------------------------------

export const company = {
  name: "RB Capital Ventures",
  legalName: "RB Capital Ventures",
  email: "info@rbcapitalventures.com",
  linkedin: "https://www.linkedin.com/company/rb-capital-ventures",
  registration: "TC.054296",
  offices: {
    registered: {
      label: "Registered Office",
      lines: ["RB Capital Ventures", "82 Cherokee Road, P.O. Box 908", "Providenciales", "Turks and Caicos Islands"],
      note: "Registration and Financial Services Number: TC.054296",
    },
    us: {
      label: "U.S. Correspondence",
      lines: ["P.O. Box 30", "10421 Stevenson Road", "Stevenson, Maryland 21153", "United States"],
    },
  },
  presence: ["Washington D.C.", "Baltimore, MD", "San Francisco, CA", "Toronto, Canada", "London, UK"],
  year: 2026,
};

export const nav = [
  { label: "About", href: "/about" },
  { label: "Asset Classes", href: "/asset-classes" },
  { label: "Sectors", href: "/sectors" },
  { label: "Investment Criteria", href: "/investment-criteria" },
  { label: "Contact", href: "/contact" },
];

// ---------------------------------------------------------------- Home
export const home = {
  hero: {
    eyebrow: "Private Investment Platform",
    title: ["Private Capital.", "Long-Term Perspective."],
    caption: "Federal architecture, Washington, D.C.",
    body:
      "RB Capital Ventures is a private investment platform and family office partner focused on growth equity, direct investments and select projects in private markets.",
    body2:
      "We partner with established businesses, management teams and project sponsors at important stages of growth, including opportunities approaching pre-IPO, strategic investment and acquisition.",
  },
  pillars: {
    eyebrow: "How We Partner",
    heading: "Three principles behind every investment.",
    items: [
      {
        title: "Growth Equity",
        body: "Backing established and scaling businesses through their next phase of growth.",
      },
      {
        title: "Direct Investment",
        body: "Investing directly into private companies and projects with strong fundamentals and long-term potential.",
      },
      {
        title: "Long-Term Partnerships",
        body: "Working alongside management teams, family offices and institutional investors with genuine alignment and a long-term view.",
      },
    ],
  },
  sectorsTeaser: {
    eyebrow: "Selected Areas of Interest",
    heading: "A broad but selective mandate.",
    body:
      "We invest across sectors where we see lasting opportunities, from infrastructure and energy to healthcare, technology and real assets.",
    caption: "Harbour infrastructure, Baltimore, Maryland",
  },
  aboutTransition: {
    eyebrow: "About RBCV",
    heading: "Independent thinking. Aligned capital.",
    body:
      "A private investment platform working within a broader family office and private capital network, investing for the long term where strong fundamentals, experienced leadership and clear potential come together.",
  },
  contactCta: {
    heading: "Start a conversation.",
    body: "We welcome enquiries from management teams, project sponsors, family offices, institutional investors and strategic partners.",
  },
};

// ---------------------------------------------------------------- About
export const about = {
  hero: {
    eyebrow: "About",
    title: ["Independent Thinking.", "Aligned Capital."],
    caption: "Neoclassical colonnade, Washington, D.C.",
  },
  body: [
    "RB Capital Ventures is a private investment platform working within a broader family office and private capital network. We work alongside management teams, project sponsors, family offices and institutional partners across select private markets.",
    "We invest for the long term, seeking situations where strong fundamentals, experienced leadership and clear potential come together. Our approach combines independent thinking, careful analysis and flexible capital.",
    "We favour lasting relationships and partner selectively with businesses and projects where our capital, experience and network can contribute meaningfully to their growth.",
  ],
  approach: {
    eyebrow: "Our Approach",
    items: [
      { title: "Long-Term Perspective", body: "We seek to build enduring partnerships and create value over time." },
      {
        title: "Selective Investing",
        body: "We pursue a limited number of opportunities where there is strong alignment between capital, management and strategy.",
      },
      {
        title: "Flexible Capital",
        body: "Our structure allows us to consider opportunities across different investment stages and transaction structures.",
      },
    ],
  },
};

export const leadership = {
  eyebrow: "Investment Leadership",
  heading: "Experienced stewardship.",
  body: "A senior team with deep experience across private markets, real assets and cross-border investment.",
  people: [
    {
      name: "Rosalyn Bronstein",
      title: "President",
      bio: "Rosalyn Bronstein is the Managing Director and President of RB Capital Ventures and leads the firm's investment strategy and activities across private markets. She brings more than three decades of investment, management consulting and international business experience, with particular expertise across energy, infrastructure, environmental markets and cross-border investment.",
      linkedin: "https://www.linkedin.com/in/rosalyn-bronstein/",
      email: "",
      photo: "/images/leadership/rosalyn-bronstein.jpg",
    },
    {
      name: "Royan Khayri",
      title: "Senior Vice-President",
      bio: "Roy Khayri is Senior Vice-President at RB Capital Ventures, where he focuses on the origination, evaluation and execution of growth equity and private-market investments. He is a member of the firm's Investment Committee and works across commercial assessment, financial analysis, transaction execution, portfolio oversight and relationships with institutional and JV partners across international markets.",
      linkedin: "https://www.linkedin.com/in/royankhayri/",
      email: "roy@rbcapitalventures.com",
      photo: "/images/leadership/roy-khayri.jpg",
    },
    {
      name: "Kevin Wilson",
      title: "Senior Vice-President",
      bio: "Kevin Wilson serves as Senior Vice-President at RB Capital Ventures, supporting the firm's investment activities through expertise in business structuring, valuation, capital strategy and transaction execution. He brings extensive experience across professional services, private business, real estate, energy and corporate transactions.",
      linkedin: "",
      email: "",
      photo: "/images/leadership/kevin-wilson.jpg",
    },
    {
      name: "Ludmila Pirogova",
      title: "Senior Vice-President",
      bio: "Ludmila Pirogova serves as a Senior Vice-President at RB Capital Ventures, working across investment strategy, capital governance and institutional decision-making. She brings more than two decades of experience across financial services, infrastructure, energy, mining and technology-enabled assets, with particular expertise in investment governance, risk and complex asset environments.",
      linkedin: "",
      email: "",
      photo: "/images/leadership/ludmila-pirogova.jpg",
    },
  ],
};

// ---------------------------------------------------------------- Asset Classes
export const assetClasses = {
  hero: {
    eyebrow: "How We Invest",
    title: ["Asset Classes"],
    caption: "Limestone façade, Federal detail, Washington, D.C.",
  },
  intro:
    "RB Capital Ventures invests selectively across private markets, focusing on opportunities where the right capital and a strong partnership can support the next stage of growth.",
  items: [
    {
      title: "Growth Equity",
      body: "Growth capital for established and scaling businesses seeking to accelerate expansion, strengthen their market position or prepare for their next stage of growth.",
      caption: "Corporate headquarters",
      photo: "/images/asset-classes/growth.jpg",
    },
    {
      title: "Direct Investments",
      body: "Direct investment into private companies and projects where we see strong fundamentals, aligned management and long-term potential.",
      caption: "Manufacturing facility",
      photo: "/images/asset-classes/direct.jpg",
    },
    {
      title: "Pre-IPO & Strategic Growth",
      body: "Select private companies approaching major milestones, including a possible public listing, strategic investment, consolidation or acquisition.",
      caption: "Financial district",
      photo: "/images/asset-classes/preipo.jpg",
    },
    {
      title: "Project & Real Asset Investments",
      body: "Investment into established and development-stage projects where feasibility, commercial fundamentals and a clear route to delivery have been demonstrated.",
      caption: "Infrastructure, dam and data centre",
      photo: "/images/asset-classes/project.jpg",
    },
    {
      title: "Co-Investments & Joint Ventures",
      body: "We selectively invest alongside family offices, institutional partners, operators and other aligned capital partners.",
      caption: "Boardroom",
      photo: "/images/asset-classes/coinvest.jpg",
    },
  ],
};

// ---------------------------------------------------------------- Sectors
export const sectors = {
  hero: {
    eyebrow: "Sectors",
    title: ["Areas of Interest"],
    caption: "Chesapeake harbour, industrial heritage, Baltimore, MD",
  },
  intro:
    "RB Capital Ventures invests across a broad but selective range of sectors where we see lasting opportunities.",
  items: [
    {
      title: "Infrastructure, Commodities & Energy",
      body: "Including conventional energy (oil & gas), infrastructure-led opportunities and the sale and purchase of precious metals.",
      caption: "Energy & infrastructure",
      photo: "/images/sectors/infra.jpg",
    },
    {
      title: "Renewable Energy & Clean Technology",
      body: "Energy transition, clean technology and commercially proven renewable platforms.",
      caption: "Renewable energy",
      photo: "/images/sectors/renewable.jpg",
    },
    {
      title: "Healthcare & Life Sciences",
      body: "Healthcare, MedTech and biotechnology companies with clear routes to market.",
      caption: "Life sciences",
      photo: "/images/sectors/healthcare.jpg",
    },
    {
      title: "Industrial & Manufacturing",
      body: "Industrial businesses, data centres, manufacturing platforms and enabling infrastructure.",
      caption: "Industrial & manufacturing",
      photo: "/images/sectors/industrial.jpg",
    },
    {
      title: "Technology, AI & Digital Infrastructure",
      body: "Technology, artificial intelligence, cloud and digital-infrastructure projects.",
      caption: "Digital infrastructure",
      photo: "/images/sectors/technology.jpg",
    },
    {
      title: "Real Estate & Hospitality",
      body: "Select real estate, hospitality and mixed-use opportunities with strong underlying fundamentals.",
      caption: "Real estate & hospitality",
      photo: "/images/sectors/realestate.jpg",
    },
  ],
  note:
    "We consider opportunities outside these sectors where there is a compelling strategic rationale and strong alignment with our investment approach.",
};

// ---------------------------------------------------------------- Investment Criteria
export const criteria = {
  hero: {
    eyebrow: "Investment Criteria",
    title: ["What Makes an", "Opportunity Relevant"],
    caption: "Federal symmetry, Washington, D.C.",
  },
  intro:
    "We focus on businesses and projects with proven fundamentals and a clear path to their next stage of growth.",
  items: [
    {
      title: "Stage",
      body: "Growth-stage and established private companies, alongside projects that have progressed beyond initial concept or feasibility.",
    },
    {
      title: "Growth Equity",
      body: "Businesses seeking capital to expand operations, enter new markets, pursue growth or strengthen their position ahead of a future transaction.",
    },
    {
      title: "Pre-IPO & Pre-M&A",
      body: "We are particularly interested in select companies approaching important turning points, including preparation for a public listing, institutional investment, consolidation or acquisition.",
    },
    {
      title: "Projects",
      body: "Projects with demonstrated feasibility, credible sponsors, identifiable demand and a clear route to delivery.",
    },
    {
      title: "Management",
      body: "Experienced and committed leadership teams with meaningful alignment and a demonstrated ability to execute.",
    },
  ],
  geography: {
    title: "Geography",
    body: "United States, Canada, Caribbean, United Kingdom, Europe, GCC and select international markets.",
    regions: ["United States", "Canada", "Caribbean", "United Kingdom", "Europe", "GCC", "Select international markets"],
  },
  structures: {
    title: "Investment Structures",
    body: "Direct investment, growth equity, co-investment, joint venture and other appropriately structured private-market opportunities.",
    note: "Investment terms vary according to the opportunity, its structure and strategic fit.",
  },
};

// ---------------------------------------------------------------- Contact
export const contact = {
  hero: {
    eyebrow: "Contact",
    title: ["Start a Conversation"],
  },
  body:
    "RB Capital Ventures welcomes enquiries from management teams, project sponsors, family offices, institutional investors and strategic partners.",
  body2:
    "For investment opportunities, please provide a concise overview together with relevant investment materials.",
  form: {
    heading: "Submit an Opportunity",
    fields: {
      name: "Name",
      company: "Company / Organisation",
      phone: "Phone",
      email: "Email",
      overview: "Opportunity Overview",
      upload: "Investment Materials / Pitch Deck",
    },
    submit: "Submit",
    note: "Materials are handled in confidence.",
  },
};
