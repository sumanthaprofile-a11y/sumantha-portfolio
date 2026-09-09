// ============================================================
// PORTFOLIO DATA — Single source of truth.
// Edit this file to update any content across the website.
// ============================================================

export const personal = {
  name: "Sumantha Narayana M",
  firstName: "Sumantha",
  lastName: "Narayana M",
  monogram: "SN",
  role: "Freelance Full Stack Developer",
  tagline: "Full Stack Developer",
  email: "msnarayana2004@gmail.com",
  phone: "+916363844121",
  phoneHref: "tel:+916363844121",
  location: "Puttur, Karnataka, India",
  // Change this path to point to your own photo.
  image: "/images/profile.png",
  imageAlt: "Portrait of Sumantha Narayana M",
  availability: "Available for opportunities",
  heroIntro:
    "Computer Science graduate and Full Stack Developer focused on building modern web applications, automation solutions, and security-focused projects.",
  // Social links — update the URLs below with your real profiles.
  socials: {
    linkedin: "https://linkedin.com/in/sumantha-narayana-m-6b2a05257",
    github: "https://github.com/SumanthaNarayanaM",
  },
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const about = {
  paragraphs: [
    "I'm a Computer Science graduate from Vivekananda College of Engineering & Technology with a strong focus on building reliable, modern web applications. My work spans full stack development, RPA automation, and security focused projects from client platforms deployed in production to tools that simplify day to day processes.",
    "As a freelance full stack developer, I've taken ideas from a blank canvas to live products: designing responsive frontends, building robust backend services, and managing database architecture end to end.",
    "I care about clean code, thoughtful UX, and shipping things that actually work. When I'm not coding, you'll find me on the cricket field or practicing karate.",
  ],
  stats: [
    { value: 4, suffix: "+", label: "Major Projects" },
    { value: 2, suffix: "", label: "Professional Experiences" },
    { value: 60, suffix: "+", label: "Workshop Participants" },
    { value: 7.97, suffix: "", label: "B.E. CGPA", decimals: 2 },
  ],
  focusAreas: [
    "Full Stack Development",
    "Web Applications",
    "Automation",
    "Cybersecurity",
    "Cloud Technologies",
  ],
};

export const experience = [
  {
    company: "Roadstrack.com",
    link: "https://roadstrack.com/",
    role: "Freelance Full Stack Developer",
    period: "Apr 2026 — Present",
    description:
      "Built and deployed a client-based tourism management platform using Next.js, React.js, TypeScript, Prisma ORM, PostgreSQL, and Vercel.",
    technologies: ["Next.js", "React.js", "TypeScript", "Prisma ORM", "PostgreSQL", "Vercel"],
  },
  {
    company: "Prinston Smart Engineers",
    role: "Full Stack Web Intern",
    period: "Feb 2026 — Apr 2026",
    description:
      "Developed responsive full-stack web applications using React.js, Node.js, Express.js, SQL, HTML, CSS, and JavaScript.",
    technologies: ["React.js", "Node.js", "Express.js", "SQL", "HTML", "CSS", "JavaScript"],
  },
];

export const projects = [
  {
    number: "01",
    title: "WhatsApp Automation for Exam Marksheet Distribution",
    date: "Jan 2025 — Feb 2025",
    description:
      "Created and implemented a UiPath bot that automated the sending of exam results to parents via WhatsApp, improving communication efficiency.",
    tags: ["UiPath", "RPA", "Automation", "WhatsApp"],
    highlight: "Automation",
    icon: "bot",
  },
  {
    number: "02",
    title: "Web Vulnerability Scanner",
    date: "Jul 2025 — Sep 2025",
    description:
      "Developed a web application that detects and analyzes web vulnerabilities using both static and dynamic scanning techniques.",
    tags: ["Cybersecurity", "Web Security", "Static Analysis", "Dynamic Analysis"],
    highlight: "Security",
    icon: "shield",
  },
  {
    number: "03",
    title: "Temple Website",
    link: "https://effortless-faun-10914a.netlify.app/",
    date: "Jan 2026",
    description:
      "Developed a responsive temple website using React.js to provide information about temple history and services.",
    tags: ["React.js", "JavaScript", "Web Development", "Vercel"],
    features: ["e-Kanike QR", "Seva List", "Responsive UI", "Vercel"],
    highlight: "Web",
    icon: "landmark",
  },
  {
    number: "04",
    title: "PurseTrack - Personal Finance Tracker",
    link: "https://personal-wallet-tracker-two.vercel.app/login",
    description:
      "A personal finance tracker web application designed to help users manage and monitor their personal finances through a clean and intuitive interface.",
    tags: [],
    highlight: "Personal Finance / Full Stack Web Application",
  },
];

export const skills = {
  programming: {
    label: "Programming",
    items: ["Java", "Python", "C", "C++", "MATLAB"],
  },
  frontend: {
    label: "Frontend",
    items: ["React.js", "Next.js", "HTML", "CSS", "JavaScript"],
  },
  backend: {
    label: "Backend",
    items: ["Node.js", "Express.js", "TypeScript"],
  },
  database: {
    label: "Database",
    items: ["MySQL", "PostgreSQL", "SQL", "Prisma ORM"],
  },
  cloud: {
    label: "Cloud & Deployment",
    items: ["AWS", "Google Cloud", "Vercel"],
  },
  automation: {
    label: "Security & Automation",
    items: ["Web Vulnerability Scanning", "UiPath", "RPA"],
  },
};

export const education = [
  {
    degree: "B.E. in Computer Science",
    institution: "Vivekananda College of Engineering & Technology, Puttur",
    period: "2022 — 2026",
    score: "CGPA 7.97",
    current: true,
  },
  {
    degree: "XII — PCMB",
    institution: "Vivekananda Pre University College, Puttur",
    period: "2022",
    score: "72.66%",
  },
  {
    degree: "X — Karnataka State Board",
    institution: "Vivekananda English Medium School, Tenkila, Puttur",
    period: "2020",
    score: "81.28%",
  },
];

export const certification = {
  organization: "UiPath Academy",
  title: "Automation Explorer Training",
};

export const achievements = [
  {
    title: "Martial Arts",
    text: "Completed Brown I Belt in Karate.",
    icon: "trophy",
  },
  {
    title: "Cricket",
    text: "Represented VCET in zonal-level VTU cricket tournament.",
    icon: "target",
  },
  {
    title: "KSCA League",
    text: "Represented PCA in KSCA Mangalore Divisions Cricket League.",
    icon: "flame",
  },
];

export const workshop = {
  title: "Sharing What I Know",
  text: "Conducted a UiPath RPA workshop for 60+ members, demonstrating WhatsApp automation for bulk exam marksheet distribution.",
  statValue: 60,
  statSuffix: "+",
  statLabel: "Participants",
  topic: "UiPath RPA · WhatsApp Automation",
};

export const contact = {
  heading: "Let's build something together.",
  text: "Have an opportunity, project, or idea? I'd love to hear from you.",
};

export const footer = {
  text: "© 2026 Sumantha Narayana M. All rights reserved.",
};

export const siteMeta = {
  title: "Sumantha Narayana M | Full Stack Developer",
  description:
    "Portfolio of Sumantha Narayana M, a Full Stack Developer specializing in modern web applications, automation, cybersecurity, and cloud technologies.",
};