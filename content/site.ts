/* ============================================================================
 *  EDIT THIS FILE — and only this file — to change everything on the site.
 *  Content follows the résumé at resume/resume.html — keep the two in step.
 *  Save the file and the browser refreshes on its own.
 * ==========================================================================*/

export const site = {
  /* ---- Basics ------------------------------------------------------------ */
  name: "Rupanjana Mitra",
  role: "Cofounder at Kokum Labs",
  tagline:
    "Cofounder at Kokum Labs, building payments infrastructure: merchant onboarding without the document back-and-forth, and payment rails for AI agents",
  location: "Panjim, India",
  intro:
    "I build backend systems that hold up in production: pricing engines, approval flows, payment reconciliation. I am cofounder at Kokum Labs, a fintech firm.",

  /* ---- Hero rotating words ----------------------------------------------- */
  rotatingWords: [
    "software that holds up",
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
      "I am a backend engineer. Most of what I have built lives out of sight: pricing engines, approval flows, payment reconciliation. It is the machinery underneath a business, where being wrong is expensive and being unpredictable is worse.",
      "My favourite kind of work is taking something error-prone and manual and making it deterministic. At Encon I replaced spreadsheet-driven costing with real systems, and watched offer turnaround drop by 70% and manual errors by 75%. I own the whole lifecycle: architecture, deployment, monitoring, and the 2am pages.",
      "In August 2026, I left Encon to cofound Kokum Labs. We are working on two problems in payments. The first is merchant onboarding, where an agent removes the document back-and-forth in merchant verification. The second is agent pay, the payment infrastructure AI agents need to transact.",
      "Between 2018 and 2025 I built and ran a tourism business: a portfolio of Airbnb properties and a walking tour agency. Years of hosting people is the reason I build the way I do now: sustainably, honestly, and with a lot of care for the humans on the other side of the system.",
      "Away from the terminal I read, box, play football, and wishlist Airbnbs. Right now I am reading Vijaya Maria.",
    ],
    // Small stat cards. Keep to 3 — they look best in a row.
    stats: [
      { value: "70%", label: "Faster offer turnaround" },
      { value: "75%", label: "Fewer manual errors" },
      { value: "2014", label: "Google Summer of Code" },
    ],
  },

  /* ---- What I'm building ------------------------------------------------- */
  // The headline act — Kokum Labs, the company she cofounded in Aug 2026.
  // Only the two workstreams below are confirmed; don't add products or
  // client-services copy that hasn't been stated.
  venture: {
    eyebrow: "what I do now",
    kicker: "kokum labs",
    product: "Kokum Labs",
    headline: "Payments infrastructure, for humans and for agents",
    pitch:
      "I cofounded Kokum Labs because I want to go deep into fintech.",
    body: "The first is merchant onboarding: getting verified by a payment gateway still means a document back-and-forth that stalls for weeks. We are building an agent that handles it. The second is agent pay. AI agents can now decide to buy something, but there are no rails for them to actually transact on. We are building those.",
    // The one-line positioning shorthand. Set to "" to hide it.
    compare: "",
    // Button label and destination. Leave href "" until the site is live and
    // the button hides itself.
    ctaLabel: "Get in touch",
    href: "",
    features: [
      {
        title: "Merchant onboarding",
        body: "An agent that removes the document back-and-forth in merchant verification for payment gateways.",
      },
      {
        title: "Agent pay",
        body: "Payment infrastructure that lets AI agents transact.",
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
      reply: "Well, that is enough.",
      source: "", // e.g. "Interstellar (2014)" — left blank until confirmed
      note: "my favourite line",
    },

    // The hats themselves. `detail` is optional.
    hats: [
      { label: "Airbnb host", detail: "500+ reviews, Airbnb + Google", color: "bg-crayon-pink" },
      { label: "Fitness coach", detail: "", color: "bg-crayon-yellow" },
      { label: "Software engineer", detail: "", color: "bg-crayon-sky" },
    ],

    // A thing she likes knowing. Set `text` to "" to hide the card.
    fact: {
      label: "a thing I like knowing",
      text: "Arabs who settled along the Konkan coast married local women, and their descendants became the Navayathis, a community of traders, and very good sailors.",
    },

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
      items: ["Java", "Python", "C++", "SQL", "JavaScript"],
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
  // are the ones with users and numbers attached, so they lead. GSoC is not
  // here on purpose — it is an Experience entry, the way the résumé has it.
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
        "Tracks requests for quotation through the whole commercial pipeline, from intake and costing through to approval and response, so nothing stalls silently and everyone can see where a quote actually is.",
      tags: ["Python", "FastAPI", "PostgreSQL"],
      impact: "Running in production at Encon.",
      href: "",
      repo: "",
      year: "2026",
      featured: true,
    },
    {
      title: "KDE Sheets UI features",
      blurb:
        "User-facing UI features for KDE Sheets, the spreadsheet application in the KDE suite. Built during Google Summer of Code, with feature design and code review by the upstream maintainers.",
      tags: ["C++", "Qt"],
      impact: "",
      href: "",
      repo: "",
      year: "2014",
      featured: false,
    },
    {
      // TODO(Rupanjana): send me the stack, the year and a link and I will
      // fill in `tags`, `year` and `href`. Left thin on purpose rather than
      // guessed at.
      title: "OneBusAway web application",
      blurb:
        "A web application for OneBusAway, the open-source real-time transit information system.",
      tags: [],
      impact: "",
      href: "",
      repo: "",
      year: "",
      featured: false,
    },
  ],

  /* ---- Experience -------------------------------------------------------- */
  // Most recent first. Delete the whole array to hide this section.
  experience: [
    {
      role: "Cofounder",
      company: "Kokum Labs",
      place: "Panjim, Goa, India (remote)",
      period: "Aug 2026 to Present",
      points: [
        "Solving the merchant onboarding problem for payment gateways: building an agent that removes the document back-and-forth in merchant verification.",
        "Solving agent pay: payment infrastructure for AI agents to transact.",
      ],
    },
    {
      role: "Senior Software Engineer, Backend & Systems",
      company: "Encon Thermal Engineering Pvt. Ltd.",
      place: "Panjim, India",
      period: "Jan 2026 to Aug 2026",
      points: [
        "Designed and deployed the Offer Generator and RFQ Tracker, replacing spreadsheet-driven costing and offer workflows.",
        "Reduced offer turnaround time by 70% and manual errors by 75%.",
        "Owned system architecture, deployment, monitoring, and operational support.",
        "Worked closely with business stakeholders to translate pricing and commercial requirements into system design.",
      ],
    },
    {
      // TODO(Rupanjana): if the tourism business has a registered name, send it
      // and it replaces the description in `company` on both the site and the
      // résumé.
      role: "Founder, Tourism & Hospitality",
      company: "Airbnb portfolio & walking tour agency",
      place: "Shantiniketan, India",
      period: "Aug 2018 to Dec 2025",
      points: [
        "Founded and ran a tourism business: a portfolio of Airbnb properties and a walking tour agency.",
        "Hosted guests across multiple listings, earning 500+ reviews across Airbnb and Google.",
        "Built and led the walking tour side end to end: itineraries, bookings, and guiding.",
        "Featured in The Economic Times for resilience.",
      ],
    },
    {
      role: "Software Engineer",
      company: "BillDesk",
      place: "Mumbai, India",
      period: "Jan 2016 to Jul 2018",
      // Closes the May-2015-to-Jan-2016 gap, which otherwise reads as unexplained.
      note: "Offer in hand on graduating; the joining date at BillDesk was January 2016.",
      points: [
        "Developed Java and Spring backend services for internal payment systems.",
        "Optimised PostgreSQL schemas for transactional correctness and reporting.",
      ],
    },
    {
      role: "Google Summer of Code Intern, KDE Sheets",
      company: "KDE",
      place: "Remote",
      period: "May 2014 to Sep 2014",
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
    period: "Aug 2011 to May 2015",
  },

  /* ---- Contact section text ---------------------------------------------- */
  contact: {
    heading: "Tell me what you are building",
    body: "If you are building in payments, or working on agents that need to pay for things, I would like to hear about it. I answer within two business days. Email me, or get on a Google Meet with me.",
  },
};

export type Site = typeof site;
