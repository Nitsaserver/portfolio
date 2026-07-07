export const siteConfig = {
  name: "Nitsa Mehndiratta",
  title: "AI/ML & Software Engineering Student",
  tagline:
    "Building production-style ML systems, backend automation, and cloud-native applications.",
  location: "Bengaluru, India",
  email: "nitsamehndiratta@gmail.com",
  github: "https://github.com/nitsaserver",
  linkedin: "https://www.linkedin.com/in/nitsamehndiratta/",
  resumeUrl: "/resume.pdf",
};

export const about = {
  summary:
    "AI/ML and Software Engineering student with hands-on experience in anomaly detection, backend systems, MLOps-style automation, and cloud-native development. Built Arena, a production-like Machine Learning system supporting real-time inference, auto-retraining, and microservice orchestration using FastAPI, Docker, and MySQL. Skilled in Python, FastAPI, AWS, GCP, and REST API development.",
};

export const skills = {
  languages: ["Python", "JavaScript", "TypeScript", "Java", "C++"],
  frameworks: [
    "FastAPI",
    "React",
    "Node.js",
    "Docker",
    "Git",
    "Bash",
    "Linux CLI",
  ],
  aiMl: [
    "Generative AI (GenAI)",
    "Retrieval-Augmented Generation (RAG)",
    "Large Language Models (LLMs)",
    "Natural Language Processing (NLP)",
    "Agentic AI",
    "Anomaly Detection",
    "Supervised & Unsupervised Learning",
    "Neural Networks",
    "Inference Pipelines",
    "Auto-Retraining",
  ],
  libraries: [
    "TensorFlow",
    "Scikit-learn",
    "NumPy",
    "Pandas",
    "Matplotlib",
    "LangChain",
  ],
  cloudDevOps: [
    "AWS (S3, EC2, IAM)",
    "Google Cloud Platform (Cloud Run, Cloud Functions)",
  ],
  databases: ["MySQL", "MongoDB", "Firestore", "REST APIs"],
};

export const experience = [
  {
    role: "Backend Automation Intern",
    company: "MendZone",
    period: "April 2025 – July 2025",
    location: "Remote",
    highlights: [
      "Automated backend workflows using Python, MySQL, and Bash on AWS Cloud9.",
      "Built secure S3 upload and retrieval pipelines using pre-signed URLs and IAM.",
      "Debugged and optimized REST APIs using Postman, improving reliability and response performance.",
    ],
  },
  {
    role: "Founder",
    company: "GoForDonateIn",
    period: "2022 – Present",
    location: "Bengaluru",
    highlights: [
      "Built and operated a donation coordination platform; led 7+ drives impacting 1000+ beneficiaries.",
      "Managed end-to-end development, operations, partnerships, and volunteer engagement.",
    ],
  },
];

export const education = {
  degree: "BCA, Bachelor of Computer Applications",
  school: "Christ University, Bengaluru",
};

export const projects = [
  {
    name: "Arena — AI-Powered Cyber Simulation & ML System",
    year: "2025",
    stack: ["FastAPI", "Python", "Docker", "MySQL", "React"],
    description:
      "Production-style ML microservice for real-time anomaly detection, cyber-attack simulation, and autonomous agent behavior.",

      screenshots: [
        {
          src: "/arena1.png",
          alt: "Arena dashboard",
        },
        {
          src: "/arena2.png",
          alt: "Arena rag",
        },
        {
          src: "/arena3.png",
          alt: "Arena rag incident report",
        },
      ],

    highlights: [
      "Designed a real-time inference engine and auto-retraining pipeline that re-learns every 5 minutes.",
      "Implemented event pipelines for scoring, blocking, logging, and mission-state progression.",
      "Integrated a RAG + LLM-based explainability layer using NLP for contextual reasoning on detected events.",
      "Developed a React dashboard to track anomaly trends, attack metrics, and retraining cycles.",
      "Containerized services with Docker for consistent multi-environment deployment.",
    ],

    links: {
      github: "https://github.com/Nitsaserver/arena-ai",
    },
  },

  {
    name: "AI-Powered Personalized Story Generator",
    year: "2025",
    stack: ["React", "Python", "Cloud Run", "Firestore", "Gemini"],
    description:
      "Generative AI platform with feedback-driven agentic behavior and adaptive personalization.",

      screenshots: [
        {
          src: "/story1.png",
          alt: "Story Generator home page",
        },
        
        {
          src: "/story3.png",
          alt: "Generated story",
        },
      ],

    highlights: [
      "Built a generative AI platform with feedback-driven agentic behavior and adaptive personalization.",
      "Developed a secure Python backend deployed on Cloud Run with private access configurations.",
      "Integrated Firestore for user profiles, preference storage, analytics, and generation history.",
    ],

    links: {
      github: "https://github.com/Nitsaserver/storyteller",
    },
  },
];

export const leadership = [
  {
    role: "Deputy Lead, University Literature Committee",
    description:
      "Coordinated a 20+ member team and delivered large-scale university events.",
  },
  {
    role: "Event Head, FLUX 2025 (National IT Fest)",
    description:
      "Managed the IT Manager event; nominated as the only first-year to lead an event.",
  },
  {
    role: "Technical Team, Samagra (CS Association)",
    description: "Executed technical initiatives for the CS association.",
  },
];

export type PortfolioChunk = {
  id: string;
  title: string;
  content: string;
  keywords: string[];
};

export function buildPortfolioChunks(): PortfolioChunk[] {
  return [
    {
      id: "about",
      title: "About",
      content: `${siteConfig.name} — ${siteConfig.title}. ${about.summary}`,
      keywords: ["about", "summary", "background", "profile", "introduction"],
    },
    {
      id: "skills-languages",
      title: "Technical Skills — Languages",
      content: `Languages: ${skills.languages.join(", ")}.`,
      keywords: ["skills", "languages", "python", "javascript", "programming"],
    },
    {
      id: "skills-frameworks",
      title: "Technical Skills — Frameworks & Tools",
      content: `Frameworks & Tools: ${skills.frameworks.join(", ")}.`,
      keywords: ["frameworks", "fastapi", "react", "docker", "tools"],
    },
    {
      id: "skills-ai",
      title: "Technical Skills — AI / ML",
      content: `AI / Machine Learning: ${skills.aiMl.join(", ")}.`,
      keywords: ["ai", "ml", "machine learning", "rag", "llm", "nlp", "genai"],
    },
    {
      id: "skills-libraries",
      title: "Technical Skills — Libraries",
      content: `Libraries: ${skills.libraries.join(", ")}.`,
      keywords: ["libraries", "tensorflow", "scikit-learn", "langchain"],
    },
    {
      id: "skills-cloud",
      title: "Technical Skills — Cloud & DevOps",
      content: `Cloud & DevOps: ${skills.cloudDevOps.join(", ")}. Databases & APIs: ${skills.databases.join(", ")}.`,
      keywords: ["cloud", "aws", "gcp", "devops", "mysql", "mongodb"],
    },
    ...experience.map((job, index) => ({
      id: `experience-${index}`,
      title: `${job.role} at ${job.company}`,
      content: `${job.role} at ${job.company} (${job.period}, ${job.location}). ${job.highlights.join(" ")}`,
      keywords: [
        "experience",
        "work",
        "intern",
        job.company.toLowerCase(),
        job.role.toLowerCase(),
      ],
    })),
    {
      id: "education",
      title: "Education",
      content: `${education.degree} at ${education.school}}.`,
      keywords: ["education", "degree", "university","bca"],
    },
    ...projects.map((project, index) => ({
      id: `project-${index}`,
      title: project.name,
      content: `${project.name} (${project.year}). Stack: ${project.stack.join(", ")}. ${project.description} ${project.highlights.join(" ")}`,
      keywords: [
        "project",
        project.name.toLowerCase(),
        ...project.stack.map((s) => s.toLowerCase()),
      ],
    })),
    ...leadership.map((item, index) => ({
      id: `leadership-${index}`,
      title: item.role,
      content: `${item.role}. ${item.description}`,
      keywords: ["leadership", "lead", "committee", "event"],
    })),
    {
      id: "contact",
      title: "Contact",
      content: `Location: ${siteConfig.location}. Email: ${siteConfig.email}. GitHub: ${siteConfig.github}. LinkedIn: ${siteConfig.linkedin}.`,
      keywords: ["contact", "email", "linkedin", "github", "reach"],
    },
  ];
}
