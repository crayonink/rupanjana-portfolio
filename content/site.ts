/* ============================================================================
 *  EDIT THIS FILE — and only this file — to change everything on the site.
 *  Content is drawn from Rupanjana's résumé (ResumeRupaDesigned.pdf).
 *  Save the file and the browser refreshes on its own.
 * ==========================================================================*/

export const site = {
  /* ---- Basics ------------------------------------------------------------ */
  name: "Rupanjana Mitra",
  role: "Founder & Backend Engineer",
  tagline:
    "Founder of Kokum Labs, building Kokum Wire — supply chain intelligence for semiconductor procurement",
  location: "Panjim, India",
  intro:
    "I build backend systems that standardise messy manufacturing workflows. Right now that's Kokum Wire, which tells chip buyers what just changed in their supply chain — with dates and sources — and what to do about it.",

  /* ---- Hero rotating words ----------------------------------------------- */
  rotatingWords: [
    "supply chain intelligence",
    "pricing engines",
    "systems with real users",
    "things that ship",
  ],

  /* ---- Contact & links --------------------------------------------------- */
  // Leave any value as an empty string "" to hide that link entirely.
  email: "mrupanjana@gmail.com",
  // Deliberately blank: a public page gets scraped, so the number stays off it.
  // Put it back here and the Contact section picks it up automatically.
  phone: "",
  links: {
    github: "https://github.com/crayonink",
    linkedin: "https://linkedin.com/in/mrupanjana",
    twitter: "",
    // Booking link. The trailing hyphen in the pasted URL 404s; this one resolves.
    calendly: "https://calendly.com/rupa-kokumlabs/let-s-hang",
    // Put your PDF at public/resume.pdf, then set this to "/resume.pdf"
    resume: "",
  },

  /* ---- About ------------------------------------------------------------- */
  about: {
    paragraphs: [
      "I'm a backend engineer. Most of what I've built lives out of sight: pricing engines, approval flows, payment reconciliation — the machinery underneath a business, where being wrong is expensive and being unpredictable is worse.",
      "My favourite kind of work is taking something error-prone and manual and making it deterministic. At Encon I replaced spreadsheet-driven costing with real systems, and watched offer turnaround drop by 70% and manual errors by 75%. I own the whole lifecycle — architecture, deployment, monitoring, and the 2am pages.",
      // This paragraph is optional — delete it if you'd rather not say it here.
      // Your résumé names the break openly, so the site does too.
      "I took a long break between 2018 and 2025 for my mental health. I'm not shy about it: it's the reason I build the way I do now — sustainably, honestly, and with a lot of care for the humans on the other side of the system.",
      "I have worn multiple hats — from being a fairly successful Airbnb host with 200+ reviews, to being a fitness coach, a Math tutor, riding for Uber, working as a tour guide, waiting tables in a high-end restaurant, and selling food on the street.",
      "I took up these jobs during my career break so I wouldn't have to depend on my parents' money, though they have been supportive of all my decisions. I get impatient if I'm not doing enough with my time. I like to try new things and see where they go. I can be very pragmatic without losing the bigger vision at its core.",
      "Away from the terminal I read, box, play football, and wishlist Airbnbs. Right now I'm reading Vijaya Maria.",
    ],
    // Small stat cards. Keep to 3 — they look best in a row.
    stats: [
      { value: "70%", label: "Faster offer turnaround" },
      { value: "75%", label: "Fewer manual errors" },
      { value: "2014", label: "Google Summer of Code" },
    ],
  },

  /* ---- What I'm building ------------------------------------------------- */
  // The headline act. Copy is drawn from wire.kokumlabs.in — check the wording
  // still matches the product before you send this to anyone who matters.
  venture: {
    eyebrow: "what I'm building right now",
    company: "Kokum Labs",
    product: "Kokum Wire",
    headline: "Supply Chain Intelligence for Semiconductor Procurement",
    pitch:
      "Kokum Wire watches the chip supply chain and tells you — with dates and sources — what just changed and what to do about it.",
    body: "It reads the signals that move semiconductor supply before they show up in a price: earnings calls, export data, equipment orders, hiring trends, government filings. Then it condenses them into something a buyer can act on. Every verdict is dated and sourced.",
    // The one-line positioning shorthand. Set to "" to hide it.
    compare: "Think Prewave, but more niche.",
    href: "https://wire.kokumlabs.in",
    features: [
      {
        title: "Ask the ledger",
        body: "Query what changed in the supply chain, in plain language.",
      },
      {
        title: "Synthesis desk",
        body: "Cross-reference scattered signals into a single read.",
      },
      {
        title: "Decision desk",
        body: "Weigh buy timing against inventory, allocation and pricing.",
      },
      {
        title: "Chip origin map",
        body: "See where parts are actually made, and which suppliers are under stress.",
      },
    ],
  },

  /* ---- Who I am ---------------------------------------------------------- */
  // The personal section. Everything here is yours to rewrite — it's the one
  // part of the site that isn't sourced from the résumé.
  // Rendered inside the About section — the two used to be separate sections
  // ("About me" and "Who I am") doing the same job under different labels.
  personal: {
    // TODO(Rupanjana): confirm the exact wording and tell me where it's from,
    // and I'll add the attribution underneath.
    quote: {
      line: "What we did was to survive.",
      reply: "Well — that's enough.",
      source: "", // e.g. "Interstellar (2014)" — left blank until confirmed
      note: "my favourite line",
    },

    // The hats themselves. `detail` is optional.
    hats: [
      { label: "Airbnb host", detail: "200+ reviews", color: "bg-crayon-pink" },
      { label: "Fitness coach", detail: "", color: "bg-crayon-yellow" },
      { label: "Math tutor", detail: "", color: "bg-crayon-sky" },
      { label: "Uber bike rider", detail: "", color: "bg-crayon-green" },
      { label: "Tour guide", detail: "", color: "bg-crayon-yellow" },
      { label: "Waiter", detail: "high-end restaurant", color: "bg-crayon-pink" },
      { label: "Street food seller", detail: "", color: "bg-crayon-sky" },
    ],

    // TODO(Rupanjana): send me the article link and I'll make this clickable.
    press: {
      outlet: "The Economic Times",
      what: "featured for resilience",
      href: "",
    },
  },

  /* ---- Skills ------------------------------------------------------------ */
  skills: [
    {
      group: "Languages",
      items: ["Python", "Java", "SQL", "JavaScript", "C++"],
    },
    {
      group: "Frameworks",
      items: ["FastAPI", "Spring Boot", "Spring Security"],
    },
    {
      group: "Systems",
      items: ["Distributed Systems", "Concurrency", "Fault Tolerance"],
    },
    {
      group: "Tools",
      items: ["PostgreSQL", "Redis", "Docker", "Git", "GCP"],
    },
  ],

  /* ---- Projects ---------------------------------------------------------- */
  // `featured: true` gives a project a larger card.
  // Shipped-and-in-use first, then the ones built to learn. The Encon systems
  // are the ones with users and numbers attached, so they lead.
  // TODO(Rupanjana): check the two Encon descriptions match what they really do.
  projects: [
    {
      title: "Offer Generator",
      blurb:
        "Replaced spreadsheet-driven costing and offer creation at Encon with a real backend service. Pricing rules live in the system instead of in a workbook someone forgot to update, and every offer goes through the same validated path.",
      tags: ["Python", "FastAPI", "PostgreSQL"],
      impact:
        "Cut offer turnaround by 70% and manual errors by 75%. In daily use by the commercial team.",
      href: "",
      repo: "",
      year: "2026",
      featured: true,
    },
    {
      title: "RFQ Tracker",
      blurb:
        "Tracks requests for quotation through the whole commercial pipeline — intake, costing, approval, response — so nothing stalls silently and everyone can see where a quote actually is.",
      tags: ["Python", "FastAPI", "PostgreSQL"],
      impact: "Running in production at Encon.",
      href: "",
      repo: "",
      year: "2026",
      featured: true,
    },
    {
      title: "Pricing & Workflow Engine",
      blurb:
        "A rule-based pricing and multi-step approval engine, built to get the data modelling right: configurable rules, validation layers, and deterministic processing so a wrong number can't get through.",
      tags: ["Java", "Spring Boot", "PostgreSQL"],
      impact: "",
      href: "",
      repo: "",
      year: "2026",
      featured: false,
    },
    {
      title: "Payment Processing & Reconciliation Service",
      blurb:
        "Payment flows end to end — order creation, initiation, status tracking. Idempotent APIs so retries never double-charge, and asynchronous reconciliation that pulls system and payment state back together after failure.",
      tags: ["Java", "Spring Boot", "PostgreSQL"],
      impact: "",
      href: "",
      repo: "",
      year: "2026",
      featured: false,
    },
    {
      title: "KDE Sheets — Google Summer of Code",
      blurb:
        "Built user-facing UI features for KDE Sheets as a Google Summer of Code intern, working with open-source maintainers across the world on feature design and code review.",
      tags: ["C++", "KDE", "Open Source"],
      impact: "",
      href: "",
      repo: "",
      year: "2014",
      featured: false,
    },
  ],

  /* ---- Experience -------------------------------------------------------- */
  // Most recent first. Delete the whole array to hide this section.
  experience: [
    {
      role: "Senior Software Engineer — Backend & Systems",
      company: "Encon Thermal Engineering Pvt. Ltd.",
      place: "Panjim, India",
      period: "Jan 2026 — Present",
      points: [
        "Designed and deployed backend systems replacing spreadsheet-driven costing and offer workflows.",
        "Reduced offer turnaround time by 70% and manual errors by 75%.",
        "Owned system architecture, deployment, monitoring, and operational support.",
        "Worked closely with business stakeholders to translate pricing and commercial requirements into system design.",
      ],
    },
    {
      role: "Career Break — Mental Health & Well-Being",
      company: "",
      place: "",
      period: "Aug 2018 — Dec 2025",
      points: [
        "Took a structured break to prioritise mental health and long-term sustainability.",
        "Stayed self-supporting throughout: Airbnb host with 200+ reviews, fitness coach, Math tutor, Uber bike rider, tour guide, waiter, and street food seller.",
        "Featured in The Economic Times for resilience.",
      ],
    },
    {
      role: "Software Engineer",
      company: "BillDesk",
      place: "Mumbai, India",
      period: "Jan 2016 — Jul 2018",
      // Closes the May-2015-to-Jan-2016 gap, which otherwise reads as unexplained.
      note: "Offer in hand on graduating; BillDesk's joining date was January 2016.",
      points: [
        "Developed Java and Spring backend services for internal payment systems.",
        "Optimised PostgreSQL schemas for transactional correctness and reporting.",
      ],
    },
    {
      role: "Google Summer of Code Intern — KDE Sheets",
      company: "KDE",
      place: "Remote",
      period: "May 2014 — Sep 2014",
      points: [
        "Implemented user-facing UI features for KDE Sheets as part of Google Summer of Code.",
        "Collaborated with global open-source maintainers on feature design and code reviews.",
      ],
    },
  ],

  /* ---- Education --------------------------------------------------------- */
  education: {
    school: "National Institute of Technology Durgapur, India",
    degree: "B.Tech in Computer Science and Engineering",
    period: "Aug 2011 — May 2015",
  },

  /* ---- Contact section text ---------------------------------------------- */
  contact: {
    heading: "Come talk to me about chips",
    body: "I'm building Kokum Wire. If you buy semiconductors, invest in the people who do, or just want to argue about supply chain data — I'd like to hear from you. Email me, or let's get on a Google Meet.",
  },
};

export type Site = typeof site;
