import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Rakshith",
  lastName: "Raj M",
  displayName: "Rakshith Raj M",
  username: "Rakshithraj14",
  gender: "male",
  pronouns: "he/him",
  bio: "MLOps and AI Engineer with hands-on experience building end-to-end ML and LLM systems — from model training and experiment tracking (MLflow, DVC) to production deployment (Docker, FastAPI, CI/CD) and observability (Prometheus, Grafana, Langfuse). Skilled in Retrieval-Augmented Generation, vector search, and local LLM inference, backed by a full-stack foundation in React, Node.js, TypeScript, and AWS.",
  flipSentences: [
    "MLOps & AI Engineer.",
    "Building end-to-end ML/LLM systems.",
    "Also known as Asura.",
    "Full-stack foundation in React & TypeScript.",
  ],
  address: "Bengaluru, Karnataka, India",
  emailB64: "cmFrc2hpdGhyYWoxNDExMjAwMUBnbWFpbC5jb20=", // base64 encoded
  website: "https://example.com", // TODO: replace with a real domain once one is registered
  jobTitle: "MLOps & AI Engineer",
  jobs: [
    {
      title: "Software Developer (SDE)",
      company: "GPUNET",
      website: "https://www.gpu.net/",
      experienceId: "gpunet",
    },
    {
      title: "DevOps Engineer Intern",
      company: "IBM / Rooman Technologies",
      website: "https://www.ibm.com/in-en",
      experienceId: "ibm-rooman",
    },
  ],
  about: `- I'm Rakshith Raj M — an MLOps and AI Engineer building end-to-end ML/LLM systems, from model training to production deployment.
- Currently a Software Developer (SDE) at GPUNET, working on scalable SaaS applications with React, TypeScript, and AWS.
- Previously a DevOps Engineer Intern at IBM / Rooman Technologies, completing an AI-DevOps training program certified by VTU.
- Builder of RAG pipelines, MLOps systems, and full-stack apps — see [Projects](#projects) below, or read more on my [blog](https://rakshithraj14.github.io/shiplog/).
`,
  avatar: "/images/avatar.jpg",
  // No static OG image shipped — generated dynamically via `/og/simple`.
  ogImage:
    "/og/simple?title=Rakshith%20Raj%20M&description=MLOps%20%26%20AI%20Engineer",
  resumeUrl: "/Rakshith_Resume.pdf",
  timeZone: "Asia/Kolkata",
  keywords: [
    "rakshith raj",
    "rakshithraj14",
    "mlops engineer",
    "ai engineer",
    "full stack developer",
    "bengaluru",
  ],
  dateCreated: "2026-09-18", // YYYY-MM-DD
}
