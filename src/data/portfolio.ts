export const highlights = [
  { date: "Now", event: "Open to remote software engineering roles — backend, full-stack, and infrastructure; immediate joiner" },
  { date: "2025", event: "Shipped Clara Network — a Mastercard/Visa-style payment switch in Go with ISO 8583 authorization, double-entry ledger, and ISO 20022 settlement" },
  { date: "Mar 2025", event: "Reliance Jio — automated 80+ LLM-driven test cases (+40% coverage) and improved API stability by 25%" },
  { date: "Mar 2023", event: "Published REST-to-gRPC payment systems research (ResearchGate)" },
  { date: "Jul 2022", event: "Published AI-based low-light activity detection research" },
  { date: "May 2023", event: "Graduated B.Tech with CGPA 9.02/10" },
];

export interface Project {
  title: string;
  tag: string;
  desc: string;
  tech: string[];
  metrics: string[];
  image: string;
  live: string;
  repo: string;
}

export const projects: Project[] = [
  {
    title: "Clara Network",
    tag: "Payments Infrastructure",
    desc: "A Mastercard/Visa-style card payment network built end-to-end in Go. I designed the ISO 8583 switch, BIN-based authorization routing with failover and stand-in processing, and an append-only double-entry ledger with reconciliation — then layered the issuing stack (EMV ARQC verification, token vault, wallet provisioning), acquiring stack (merchant boarding, MATCH/OFAC screening), a disputes engine, HSM key management, and 24/7 ISO 20022 instant settlement on top.",
    tech: ["Go", "ISO 8583", "ISO 20022", "PostgreSQL", "Redis", "Docker", "HSM", "EMV"],
    metrics: ["Full switch + ledger", "Issuing + acquiring stacks", "HSM key management", "24/7 instant settlement"],
    image: "/assets/clara.png",
    live: "https://github.com/0xMudit/clara-card-network",
    repo: "https://github.com/0xMudit/clara-card-network",
  },
  {
    title: "Malcom",
    tag: "Full-Stack AI Product",
    desc: "A full-stack AI research platform with streamed LLM responses, document context retrieval, web research with cited sources, and Markdown/math rendering. I owned the product and the platform — saved chats, secure sessions, and Stripe-backed subscriptions on a Next.js/Supabase stack.",
    tech: ["Next.js", "TypeScript", "Supabase", "SQLite", "Stripe", "LLM Streaming", "RAG"],
    metrics: ["Stripe-billed SaaS", "Streamed LLM responses", "Cited web research"],
    image: "/assets/malcom.png",
    live: "https://malcom-lake.vercel.app",
    repo: "https://github.com/0xMudit/malcom-research-assistant",
  },
  {
    title: "Kingswork",
    tag: "Real-Time Backend",
    desc: "A full-stack trading intelligence platform with market dashboards, stock analysis, paper portfolios, backtesting, and AI-assisted research. Built a multi-domain FastAPI backend with JWT auth, WebSockets, and SQLAlchemy models feeding a React client.",
    tech: ["FastAPI", "React", "WebSockets", "SQLAlchemy", "JWT"],
    metrics: ["Multi-domain backend", "JWT auth + WebSockets", "Backtesting + alerts"],
    image: "/assets/kingswork.png",
    live: "https://kingswork-ruddy.vercel.app",
    repo: "https://github.com/0xMudit/kingswork-trading-platform",
  },
  {
    title: "Jini",
    tag: "Local-First Document Intelligence",
    desc: "A local-first RAG workspace that turns PDFs, spreadsheets, invoices, and tax records into searchable, cited answers. Multi-format ingestion, ranked retrieval, structured extraction, plus upload validation, rate limiting, defensive headers, and secure cookies. Retrieval works with no API key, so the default workflow stays private and self-contained — Groq synthesis is an optional upgrade, not a hard dependency.",
    tech: ["React", "TypeScript", "Express", "SQLite", "Docker", "RAG"],
    metrics: ["30 unit tests", "Cited answers", "Runs with zero API keys", "Dockerized"],
    image: "/assets/jini.png",
    live: "https://jini-document-intelligence.vercel.app",
    repo: "https://github.com/0xMudit/jini-document-intelligence",
  },
];

export interface Job {
  period: string;
  role: string;
  company: string;
  bullets: string[];
}

export const experience: Job[] = [
  {
    period: "Apr 2025 — Present",
    role: "Software Engineer (Independent)",
    company: "Personal Engineering Practice, Jabalpur",
    bullets: [
      "Designed, built, and operate three end-to-end production systems — Clara Network (payments), Malcom (AI research), and Kingswork (trading intelligence) — owning architecture, backend, deployment, and operations.",
      "Architected services in Go, Python, and TypeScript with REST and WebSocket interfaces; containerized with Docker and deployed to AWS EC2 on Linux with CI/CD.",
      "Made cross-domain engineering calls across financial correctness (ISO 8583/20022), AI/LLM integration, and real-time data — turning ambiguous product ideas into shipped, maintainable systems.",
    ],
  },
  {
    period: "Dec 2023 — Mar 2025",
    role: "QA Associate Engineer",
    company: "Reliance Jio Platforms, Hyderabad",
    bullets: [
      "Automated 80+ test cases with LLM-driven Automator AI, expanding coverage by 40% across a large-scale platform.",
      "Hardened REST API suites, fixing 35+ critical bugs and improving system stability by 25%.",
      "Integrated CI/CD pipelines with Jenkins, accelerating release cadence by 20%.",
    ],
  },
  {
    period: "Apr 2022 — Jun 2022",
    role: "Software Engineer Intern",
    company: "Persistent Systems, Remote",
    bullets: [
      "Built a Python/Pandas validation engine processing 10,000+ rows per run, cutting test time by 90%.",
      "Developed cross-functional scripts adopted by 2 internal teams, eliminating redundant manual work.",
    ],
  },
  {
    period: "Apr 2021 — Jul 2021",
    role: "Cyber Security Intern",
    company: "Cisco Network, Remote",
    bullets: [
      "Penetration-tested 3+ live web platforms with Burp Suite and Nmap, surfacing 5+ critical vulnerabilities.",
      "Submitted 3 verified reports to PayPal's Bug Bounty Program via HackerOne.",
    ],
  },
];

export interface SkillGroup {
  cat: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  { cat: "Languages", items: ["Python", "TypeScript", "JavaScript", "Go", "SQL", "C++ (familiar)"] },
  { cat: "Frameworks & Tools", items: ["React", "Next.js", "Express", "FastAPI", "Selenium", "Cypress", "Playwright", "Postman", "Jenkins", "Git"] },
  { cat: "Data & Infrastructure", items: ["PostgreSQL", "SQLite", "MongoDB", "Supabase", "Docker", "Linux", "AWS EC2", "REST APIs", "WebSockets", "CI/CD"] },
  { cat: "Domain & Systems", items: ["ISO 8583", "ISO 20022", "Double-Entry Ledger", "HSM / EMV", "JWT Auth", "Stripe Billing"] },
  { cat: "Security", items: ["Burp Suite", "Nmap", "Wireshark", "DVWA", "Juice Shop"] },
];

export const research = [
  {
    title: "AI-based Low-Light Activity Detection",
    date: "July 2022",
    url: "https://www.irejournals.com/irejournals/article/view/2204",
  },
  {
    title: "REST-to-gRPC Payment Systems Research",
    date: "ResearchGate, March 2023",
    url: "https://www.researchgate.net/publication/370059173",
  },
];

export const resumeUrl = "/assets/MudityaRaghav-Software-Engineer-Resume.pdf";
export const email = "mudityadev@gmail.com";
export const socials = {
  github: "https://github.com/0xMudit",
  twitter: "https://twitter.com/0xMudit",
  linkedin: "https://www.linkedin.com/in/0xmudit/",
  huggingface: "https://huggingface.co/0xMudit",
};
