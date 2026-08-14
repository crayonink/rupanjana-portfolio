/* ============================================================================
 *  EDIT THIS FILE — and only this file — to change everything on the site.
 *  Anything marked  // TODO  is placeholder text you should replace.
 *  Save the file and the browser refreshes on its own.
 * ==========================================================================*/

export const site = {
  /* ---- Basics ------------------------------------------------------------ */
  name: "Rupanjana Mitra",
  // Shown under your name in the hero. Keep it short.
  role: "Software Engineer", // TODO: e.g. "Data Scientist", "Full-Stack Engineer"
  // Browser tab title + Google search result title.
  tagline: "Software Engineer building data-driven products",  // TODO
  location: "Kolkata, India", // TODO
  // One or two sentences. This is the first thing a recruiter reads.
  intro:
    "I build reliable, well-tested software and turn messy data into things people can actually use.", // TODO

  /* ---- Hero rotating words ----------------------------------------------- */
  // These cycle in the headline. 3–5 words works best.
  rotatingWords: ["scalable systems", "clean data", "useful tools", "better UX"], // TODO

  /* ---- Contact & links --------------------------------------------------- */
  // Leave any value as an empty string "" to hide that link entirely.
  email: "mrupanjana@gmail.com",
  links: {
    github: "https://github.com/your-username",       // TODO
    linkedin: "https://linkedin.com/in/your-profile", // TODO
    twitter: "",                                      // optional
    // Résumé link is hidden until you set this, so the site never ships a
    // dead link. Put your PDF at public/resume.pdf, then set: "/resume.pdf"
    resume: "",
  },

  /* ---- About ------------------------------------------------------------- */
  about: {
    // 2–3 short paragraphs. Write like you talk.
    paragraphs: [
      "I'm a software engineer with a focus on backend systems and data pipelines. I care about code that's boring in the best way — predictable, tested, and easy for the next person to pick up.", // TODO
      "Over the last several years I've worked across the stack: designing APIs, wrangling ETL jobs, and shipping interfaces that make complex data feel simple.", // TODO
      "Outside of work you'll find me reading, cooking, or poking at a side project that will definitely be finished this time.", // TODO
    ],
    // Small stat cards. Keep to 3 — they look best in a row.
    stats: [
      { value: "8+", label: "Years building software" }, // TODO
      { value: "20+", label: "Projects shipped" },       // TODO
      { value: "5", label: "Teams collaborated with" },  // TODO
    ],
  },

  /* ---- Skills ------------------------------------------------------------ */
  // Add or remove whole groups freely.
  skills: [
    {
      group: "Languages",
      items: ["Python", "TypeScript", "SQL", "Java", "Go"], // TODO
    },
    {
      group: "Frameworks & Libraries",
      items: ["React", "Next.js", "Node.js", "FastAPI", "pandas", "PyTorch"], // TODO
    },
    {
      group: "Data & Infrastructure",
      items: ["PostgreSQL", "MongoDB", "Docker", "AWS", "Airflow", "Redis"], // TODO
    },
    {
      group: "Practices",
      items: ["Testing", "CI/CD", "Code review", "System design", "Agile"], // TODO
    },
  ],

  /* ---- Projects ---------------------------------------------------------- */
  // The heart of the site. 3–6 projects is the sweet spot.
  // `featured: true` gives a project a larger card.
  projects: [
    {
      title: "Realtime Analytics Dashboard", // TODO
      blurb:
        "A streaming dashboard that ingests 2M+ events/day and renders live metrics with sub-second latency.", // TODO
      tags: ["TypeScript", "Next.js", "WebSockets", "PostgreSQL"], // TODO
      // Optional: a concrete outcome. Shows impact, not just tech.
      impact: "Cut internal reporting time from 3 hours to instant.", // TODO
      href: "",       // live demo URL — leave "" to hide the button
      repo: "",       // GitHub URL — leave "" to hide the button
      featured: true,
    },
    {
      title: "ETL Pipeline Framework", // TODO
      blurb:
        "A configurable pipeline runner that replaced a pile of cron scripts with declarative, retryable jobs.", // TODO
      tags: ["Python", "Airflow", "Docker", "AWS"], // TODO
      impact: "Reduced pipeline failures by ~80%.", // TODO
      href: "",
      repo: "",
      featured: true,
    },
    {
      title: "Document Search Engine", // TODO
      blurb:
        "Semantic search over a 50k-document corpus using embeddings and a vector index.", // TODO
      tags: ["Python", "FastAPI", "Embeddings"], // TODO
      impact: "",
      href: "",
      repo: "",
      featured: false,
    },
    {
      title: "Open Source Contributions", // TODO
      blurb:
        "Bug fixes and documentation improvements across data tooling in the Python ecosystem.", // TODO
      tags: ["Python", "Open Source"], // TODO
      impact: "",
      href: "",
      repo: "",
      featured: false,
    },
  ],

  /* ---- Experience -------------------------------------------------------- */
  // Most recent first. Delete the whole array to hide this section.
  experience: [
    {
      role: "Senior Software Engineer",     // TODO
      company: "Company Name",              // TODO
      period: "2022 — Present",             // TODO
      points: [
        "Led the redesign of the core data ingestion service, improving throughput 4x.", // TODO
        "Mentored three junior engineers through onboarding and their first production releases.", // TODO
      ],
    },
    {
      role: "Software Engineer",  // TODO
      company: "Previous Company", // TODO
      period: "2019 — 2022",       // TODO
      points: [
        "Built and maintained internal APIs serving 100k+ daily requests.", // TODO
        "Introduced automated testing that took coverage from 30% to 85%.", // TODO
      ],
    },
  ],

  /* ---- Contact section text ---------------------------------------------- */
  contact: {
    heading: "Let's work together",
    body: "I'm open to interesting roles and collaborations. The fastest way to reach me is email — I reply to everything.", // TODO
  },
};

export type Site = typeof site;
