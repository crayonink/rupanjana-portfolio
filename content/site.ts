/* ============================================================================
 *  EDIT THIS FILE — and only this file — to change everything on the site.
 *  Content is drawn from Rupanjana's résumé (ResumeRupaDesigned.pdf).
 *  Save the file and the browser refreshes on its own.
 * ==========================================================================*/

export const site = {
  /* ---- Basics ------------------------------------------------------------ */
  name: "Rupanjana Mitra",
  role: "Backend & Systems Engineer",
  tagline:
    "Backend & systems engineer who replaces fragile spreadsheets with systems that hold up",
  location: "Panjim, India",
  intro:
    "I build backend systems for business-critical commercial workflows — the pricing, approval and payment paths a company cannot afford to get wrong. I care about correctness, and about the person who has to run this at 2am.",

  /* ---- Hero rotating words ----------------------------------------------- */
  rotatingWords: [
    "pricing engines",
    "payment flows",
    "fewer manual errors",
    "systems that hold up",
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
      "Away from the terminal I'm the one with the crayons. The drawings scattered around this site are the good stuff — made by small people who have not yet been told what colour a sky has to be.",
    ],
    // Small stat cards. Keep to 3 — they look best in a row.
    stats: [
      { value: "70%", label: "Faster offer turnaround" },
      { value: "75%", label: "Fewer manual errors" },
      { value: "2014", label: "Google Summer of Code" },
    ],
  },

  /* ---- Skills ------------------------------------------------------------ */
  skills: [
    {
      group: "Languages",
      items: ["Java", "Python", "C++", "SQL", "JavaScript"],
    },
    {
      group: "Frameworks",
      items: ["Spring Boot", "Spring Security"],
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
  projects: [
    {
      title: "Pricing & Workflow Engine",
      blurb:
        "A backend system that replaced manual pricing workflows with rule-based computation and validation. Configurable pricing rules, multi-step approval flows, and data models designed so that a wrong number simply cannot get through.",
      tags: ["Java", "Spring Boot", "PostgreSQL"],
      impact:
        "Correctness enforced by validation layers and deterministic processing, exercised against simulated real-world usage.",
      href: "",
      repo: "",
      year: "2026",
      featured: true,
    },
    {
      title: "Payment Processing & Reconciliation Service",
      blurb:
        "A service modelling real payment flows end to end — order creation, payment initiation, status tracking. Idempotent APIs so retries never double-charge, and asynchronous reconciliation that pulls system and payment state back together.",
      tags: ["Java", "Spring Boot", "PostgreSQL"],
      impact:
        "Failure scenarios modelled explicitly, with retry-driven eventual consistency.",
      href: "",
      repo: "",
      year: "2026",
      featured: true,
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
      ],
    },
    {
      role: "Software Engineer",
      company: "BillDesk",
      place: "Mumbai, India",
      period: "Jan 2016 — Jul 2018",
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
    heading: "Let's build something that holds up",
    body: "I'm open to backend and systems roles, and to collaborations where correctness actually matters. Email is the fastest way to reach me — I reply to everything.",
  },
};

export type Site = typeof site;
