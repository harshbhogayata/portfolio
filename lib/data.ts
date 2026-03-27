export const meta = {
  name: "Harsh Bhogayata",
  version: "v2.3.1",
  status: "stable",
  location: "India",
  year: "2026",
  tagline: "Security-aware. Full-stack. Ships with intent.",
  email: "work.harsh.bhogayata@gmail.com",
  github: "https://github.com/harshbhogayata",
  linkedin: "https://linkedin.com/in/harshbhogayata",
  medium: "https://medium.com/@harshmbhogayata",
  researchgate: "https://www.researchgate.net/profile/Harsh-Bhogayata",
  role: "Software Engineer",
};

export const changelog = [
  {
    version: "v2.3.1",
    date: "Jan 2026 – Present",
    title: "First Production Deployment",
    breaking: false,
    changes: [
      "Joined Brainybeam Infotech Pvt Ltd — Python Django Intern",
      "Engineering production RESTful APIs with Python and Django",
      "Optimizing database queries and data models for real applications",
      "Patch: shipped PQC research paper + 4-part technical writing series",
    ],
  },
  {
    version: "v2.0.0",
    label: "BREAKING CHANGE",
    date: "2024",
    title: "Full-Stack Transition",
    breaking: true,
    changes: [
      "Enrolled in MCA — Parul University (Software Dev & App Security)",
      "Added: React, Node.js, Express, TypeScript, Django, Docker",
      "Removed: dependency on hardware forensics tools",
      "B.Com foundation retained as a feature — not deprecated",
      "Started shipping real products to production",
    ],
  },
  {
    version: "v1.0.0",
    label: "stable",
    date: "2020 – 2024",
    title: "Security Origins",
    breaking: false,
    changes: [
      "Core modules: digital forensics, OWASP, penetration testing",
      "Bash scripting, Linux/Unix CLI, incident response",
      "Secure-by-default thinking installed as base dependency",
      "B.Com completed — MSU Baroda (Human Resource Management)",
    ],
  },
  {
    version: "v0.1.0",
    label: "initial",
    date: "2020",
    title: "Initial Commit",
    breaking: false,
    changes: [
      "Proof-of-concept: can this person learn to build?",
      "First line of code written",
      "Status: resolved ✓",
    ],
  },
];

export const features = [
  {
    version: "v2.4.0",
    status: "wip",
    title: "TO — TalentOrbit Enterprise",
    description:
      "Full rewrite of TalentOrbit as a cloud-native SaaS. React + Django ASGI backend, Kubernetes infra, Celery task queues, PostHog analytics, Sentry. Built to scale.",
    deps: ["react", "django", "kubernetes", "celery", "postgresql", "docker"],
    link: "https://to-dusky.vercel.app",
    repo: "https://github.com/harshbhogayata/TO",
  },
  {
    version: "v2.3.0",
    status: "stable",
    title: "TalentOrbit",
    description:
      "Job marketplace for seekers, companies, and admins. Application tracking, subscription tiers, Razorpay payments, rate-limited auth, email verification. Deployed on Render.",
    deps: ["python", "django 6", "razorpay", "postgresql", "docker"],
    link: null,
    repo: "https://github.com/harshbhogayata/TalentOrbit",
  },
  {
    version: "v2.2.0",
    status: "stable",
    title: "Vadodara Flood Archive & Relief",
    description:
      "Civic tech. 50+ locations mapped with flood risk zones (2019–2025). Live SOS coordination, shelter locator, crowdsourced reports. Android APK via Capacitor. Works offline.",
    deps: ["leaflet.js", "capacitor", "pwa", "openstreetmap", "vanilla js"],
    link: "https://vadodara-flood-archive-relief.vercel.app",
    repo: "https://github.com/harshbhogayata/vadodara-Flood-Archive-Relief",
  },
  {
    version: "v2.1.1",
    status: "stable",
    title: "The Quantum Disruption — Research Paper",
    description:
      "Survey on Post-Quantum Cryptography. Covers 'Harvest Now, Decrypt Later' threats, NIST standardization of CRYSTALS-Kyber/Dilithium, and the migration challenges for legacy systems. Published on ResearchGate.",
    deps: ["post-quantum cryptography", "nist", "crystals-kyber", "dilithium", "cryptography"],
    link: "https://www.researchgate.net/publication/400146061_The_Quantum_Disruption_A_Chronicle_of_the_Global_Transition_to_a_New_Cryptographic_Era",
    repo: null,
  },
  {
    version: "v2.1.0",
    status: "stable",
    title: "Kalakari Store",
    description:
      "E-commerce platform for Indian handicrafted goods. Dual email notification system (buyer + seller). TypeScript, Docker, CI/CD via GitHub Actions.",
    deps: ["typescript", "node.js", "docker", "github actions", "vercel"],
    link: "https://kalakari-store.vercel.app",
    repo: "https://github.com/harshbhogayata/kalakari-store",
  },
  {
    version: "v2.0.0",
    status: "stable",
    title: "DhamDrishti",
    description:
      "Heritage guide for 24 temples across Vadodara — historical notes, architecture, visiting hours, GPS coordinates. 7 thematic categories. Data sourced from ASI and field visits.",
    deps: ["javascript", "html5", "css3", "vercel"],
    link: "https://dhamdrishti1.vercel.app",
    repo: "https://github.com/harshbhogayata/DhamDrishti",
  },
];

export const dependencies = {
  runtime: [
    { name: "javascript (es6+)", level: "★" },
    { name: "typescript",        level: "★" },
    { name: "python",            level: "★" },
    { name: "bash / shell",      level: "◐" },
  ],
  frontend: [
    { name: "react.js",          level: "★" },
    { name: "next.js",           level: "★" },
    { name: "tailwind css",      level: "★" },
    { name: "responsive design", level: "★" },
  ],
  backend: [
    { name: "node.js / express", level: "★" },
    { name: "django 6",          level: "★" },
    { name: "restful apis",      level: "★" },
    { name: "postgresql",        level: "◐" },
  ],
  infra: [
    { name: "docker",            level: "★" },
    { name: "vercel / render",   level: "★" },
    { name: "github actions",    level: "◐" },
    { name: "kubernetes",        level: "○" },
  ],
  security: [
    { name: "owasp / asvs",      level: "★" },
    { name: "digital forensics", level: "★" },
    { name: "penetration testing",level: "◐" },
    { name: "secure coding",     level: "★" },
  ],
};

// ★ production-ready  ◐ actively growing  ○ familiar

export const knownIssues = [
  { fixed: false, text: "Database optimization at scale — limited prod exposure (patching, ETA Q3 2026)" },
  { fixed: false, text: "System design for distributed systems — reading architecture docs, building toward it" },
  { fixed: false, text: "Tendency to over-engineer v1 of anything" },
  { fixed: true,  text: "Imposter syndrome — resolved in v1.2.0" },
  { fixed: true,  text: "Shipping without security review — fixed in v2.0.0" },
];

export const writing = [
  {
    title: "Beyond Defense: The Geopolitics and Future of Quantum Security",
    excerpt: "How the race for quantum safety will reshape privacy, sovereignty, and the internet itself.",
    date: "Jan 2026",
    tags: ["cybersecurity", "infosec", "future"],
    link: "https://medium.com/@harshmbhogayata/beyond-defense-the-geopolitics-and-future-of-quantum-security-52833d5d297e",
  },
  {
    title: "The Great Migration: How to Move the World to Quantum Safety",
    excerpt: "We have the new algorithms. Now comes the hard part: replacing the engine of the digital economy while it's still running.",
    date: "Jan 2026",
    tags: ["infosec", "leadership", "cryptography"],
    link: "https://medium.com/@harshmbhogayata/the-great-migration-how-to-move-the-world-to-quantum-safety-4f9375b7510f",
  },
  {
    title: "The Architects of Trust: Meet the Algorithms Replacing RSA",
    excerpt: "Inside the global 'crypto-bake-off' that decided the future of internet security.",
    date: "Jan 2026",
    tags: ["post-quantum-cryptography", "nist", "cybersecurity"],
    link: "https://medium.com/@harshmbhogayata/the-architects-of-trust-meet-the-algorithms-replacing-rsa-2a76075d6059",
  },
  {
    title: "The Quantum Threat isn't Future Science Fiction — It's Happening Right Now",
    excerpt: "Why 'Harvest Now, Decrypt Later' means your data is already at risk, even without a quantum computer.",
    date: "Jan 2026",
    tags: ["quantum-computing", "cybersecurity", "data-privacy"],
    link: "https://medium.com/@harshmbhogayata/the-quantum-threat-isnt-future-science-fiction-it-s-happening-right-now-eb9cdd48df0f",
  },
];
