/**
 * Single source of truth for the site. Everything rendered on the page comes
 * from this module — no CMS, no runtime fetch.
 */

export const site = {
  name: "Muditya Raghav",
  identity: "Backend Developer · Python · Go · FastAPI",
  headline: "Backend engineering. Built with a testing mindset.",
  summary:
    "I build APIs and backend systems in Python and Go. Previously a QA Associate Engineer at Reliance Jio Platforms, I now bring that testing mindset to independent projects in payments, trading, and AI research.",
  availability: "Open to backend & SDE I roles",
  startDate: "Available to join immediately",
  email: "mudityadev@gmail.com",
  phone: "+91 87704 28132",
  phoneHref: "tel:+918770428132",
  resumeUrl: "/assets/MudityaRaghav-Backend-Developer-Resume.pdf",
} as const;

export interface Project {
  name: string;
  description: string;
  stack: string[];
  focus: string;
  engineering: { title: string; detail: string }[];
  image: string;
  imageAlt: string;
  demo: string;
  repo: string;
}

export const projects: Project[] = [
  {
    name: "Kingswork (KingStop)",
    focus: "API design & real-time systems",
    engineering: [
      { title: "API boundaries", detail: "28 domain routers share a versioned /api/v1 surface, with OpenAPI documentation for exploring the backend." },
      { title: "Identity & updates", detail: "JWT bearer authentication and bcrypt password hashing sit alongside WebSocket channels for live updates." },
      { title: "Reproducible setup", detail: "SQLite and deterministic market fixtures let the paper-trading platform run without brokerage credentials or external API keys." },
    ],
    description:
      "A simulated trading platform, from market data to paper portfolios. I built the FastAPI backend with 28 domain routers, JWT authentication, and real-time WebSocket updates.",
    stack: ["Python", "FastAPI", "SQLAlchemy", "WebSockets"],
    image: "/assets/kingswork.png",
    imageAlt: "Kingswork trading platform dashboard showing market data and a paper portfolio",
    demo: "https://kingswork-ruddy.vercel.app",
    repo: "https://github.com/0xMudit/kingswork-trading-platform",
  },
  {
    name: "Clara Network",
    focus: "Transaction integrity & failure handling",
    engineering: [
      { title: "Replay protection", detail: "Idempotent authorization processing handles repeated requests; BIN-based routing selects issuers and failover routes." },
      { title: "Auditable accounting", detail: "An append-only double-entry journal records balanced entries, with reconciliation to identify mismatches and orphaned records." },
      { title: "Outage behavior", detail: "Circuit breakers, half-open probing, and issuer stand-in processing model failure and recovery. This is an educational simulator using synthetic data." },
    ],
    description:
      "What happens after you swipe a card? An educational payment simulator I built in Go, with authorization routing, issuer failover, and a double-entry ledger that keeps transactions consistent.",
    stack: ["Go", "PostgreSQL", "Redis", "Docker"],
    image: "/assets/clara.png",
    imageAlt: "Clara Network simulator interface showing authorization and ledger activity",
    demo: "https://clara-network.vercel.app",
    repo: "https://github.com/0xMudit/clara-card-network",
  },
  {
    name: "Malcom",
    focus: "Streaming, persistence & integrations",
    engineering: [
      { title: "Answer delivery", detail: "Streamed responses combine document context and optional web research, with collected sources and inline citations." },
      { title: "State & identity", detail: "Server-side Supabase sessions and persistent workspaces support saved conversations, folders, and research history." },
      { title: "Integration boundaries", detail: "Stripe webhooks synchronize subscription state. SQLite provides a local storage fallback, and billing stays disabled until configured." },
    ],
    description:
      "An AI research workspace that turns documents into grounded answers. Built with streaming responses, persistent research sessions, authentication, and subscription billing.",
    stack: ["Next.js", "TypeScript", "Supabase", "Stripe"],
    image: "/assets/malcom.png",
    imageAlt: "Malcom research assistant interface with streamed answers and cited sources",
    demo: "https://malcom-lake.vercel.app",
    repo: "https://github.com/0xMudit/malcom-research-assistant",
  },
];

export const highlights = [
  { value: "15 months", label: "QA experience at Jio" },
  { value: "80+", label: "regression cases automated" },
  { value: "Python + Go", label: "backend project focus" },
] as const;

export interface Role {
  company: string;
  role: string;
  period: string;
  bullets: string[];
}

export const experience: Role[] = [
  {
    company: "Reliance Jio Platforms",
    role: "QA Associate Engineer",
    period: "December 2023 – March 2025",
    bullets: [
      "Automated 80+ regression test cases using AI-assisted tooling.",
      "Enhanced REST API validation and identified and tracked 35+ defects.",
      "Integrated automated testing into Jenkins CI/CD pipelines.",
    ],
  },
  {
    company: "Persistent Systems",
    role: "Software Engineer Intern",
    period: "April 2022 – June 2022",
    bullets: [
      "Built Python and Pandas automation processing 10,000+ spreadsheet rows per test.",
      "Reduced execution time by 90% and developed reusable scripts adopted by two teams.",
    ],
  },
];

export const education = {
  degree: "B.Tech, Information Technology",
  school: "Gyan Ganga Institute of Technology and Sciences",
  detail: "CGPA 9.02/10 · 2023",
} as const;

export type ProfileIcon = "github" | "linkedin" | "leetcode" | "mail";

export interface Profile {
  label: string;
  handle: string;
  href: string;
  icon: ProfileIcon;
}

export const profiles: Profile[] = [
  {
    label: "GitHub",
    handle: "github.com/0xMudit",
    href: "https://github.com/0xMudit",
    icon: "github",
  },
  {
    label: "LinkedIn",
    handle: "linkedin.com/in/0xmudit",
    href: "https://linkedin.com/in/0xmudit",
    icon: "linkedin",
  },
  {
    label: "LeetCode",
    handle: "leetcode.com/u/0xMudit",
    href: "https://leetcode.com/u/0xMudit/",
    icon: "leetcode",
  },
  {
    label: "Email",
    handle: site.email,
    href: `mailto:${site.email}`,
    icon: "mail",
  },
];

export const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];
