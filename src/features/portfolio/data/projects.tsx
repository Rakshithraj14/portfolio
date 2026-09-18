import type { Project, ProjectCategory } from "../types/projects"

/** Filter chips shown above the project list, in display order. */
export const PROJECT_CATEGORIES: { id: ProjectCategory; label: string }[] = [
  { id: "ai", label: "AI/ML" },
  { id: "web", label: "Web Apps" },
  { id: "tool", label: "Tools" },
  { id: "web3", label: "Web3" },
]

const SHIPLOG = "https://rakshithraj14.github.io/shiplog/blog"

export const PROJECTS: Project[] = [
  {
    id: "supportforge",
    title: "SupportForge",
    period: { start: "2026" },
    link: `${SHIPLOG}/supportforge/`,
    status: "Completed",
    categories: ["ai", "tool"],
    skills: [
      "Python",
      "FastAPI",
      "LangGraph",
      "Ollama",
      "Qdrant",
      "PostgreSQL",
    ],
    description:
      "RAG-powered Telegram support bot with LangGraph orchestration over locally-hosted LLMs (Ollama), Qdrant vector search, and full observability via Prometheus/Grafana and Langfuse.",
    isExpanded: true,
  },
  {
    id: "credit-card-fraud-detection",
    title: "Credit Card Fraud Detection",
    period: { start: "2026" },
    link: `${SHIPLOG}/credit-card-fraud-mlops/`,
    status: "Completed",
    categories: ["ai"],
    skills: ["Python", "Scikit-learn", "MLflow", "DVC", "FastAPI"],
    description:
      "End-to-end MLOps pipeline for fraud detection on a severely imbalanced dataset, with MLflow/DVC experiment tracking and a Dockerized FastAPI inference API.",
  },
  {
    id: "container-lab",
    title: "container-lab",
    period: { start: "2026" },
    link: `${SHIPLOG}/container-lab/`,
    status: "Completed",
    categories: ["tool"],
    skills: ["Python", "FastAPI", "SQLAlchemy", "Docker", "Alpine Linux"],
    description:
      "Optimized two-stage Docker build for a FastAPI + SQLAlchemy service, cutting the production image to roughly 121MB with non-root execution and a built-in health check.",
  },
  {
    id: "neural-ids",
    title: "Neural IDS",
    period: { start: "2025" },
    link: `${SHIPLOG}/neural-ids/`,
    status: "Completed",
    categories: ["ai"],
    skills: ["Python", "TensorFlow", "CNN-LSTM"],
    description:
      "CNN-LSTM based intrusion detection system for identifying DDoS attacks.",
  },
  {
    id: "previewforge",
    title: "PreviewForge",
    period: { start: "2026" },
    link: `${SHIPLOG}/previewforge/`,
    status: "Live",
    categories: ["web", "tool"],
    skills: ["React", "TypeScript"],
    description:
      "A meta tag editor and social preview generator for web pages.",
  },
  {
    id: "bangalorerenthub",
    title: "BangaloreRentHub",
    period: { start: "2025" },
    link: `${SHIPLOG}/bangalorerenthub-ui/`,
    status: "Completed",
    categories: ["web"],
    skills: ["React", "TypeScript"],
    description: "A rental property search app focused on Bengaluru listings.",
  },
  {
    id: "twilightsouls",
    title: "TwilightSouls",
    period: { start: "2025" },
    link: `${SHIPLOG}/twilightsouls/`,
    status: "Completed",
    categories: ["web"],
    skills: ["React", "TypeScript"],
    description: "A moon-phase-based romance app.",
  },
  {
    id: "telegram-expense-tracker",
    title: "Telegram Expense Tracker",
    period: { start: "2026" },
    link: `${SHIPLOG}/expense-bot/`,
    status: "Completed",
    categories: ["tool"],
    skills: ["Python", "FastAPI"],
    description: "A bot for tracking personal expenses directly from Telegram.",
  },
  {
    id: "betteroauth",
    title: "BetterOAuth",
    period: { start: "2026" },
    link: `${SHIPLOG}/betteroauth-ui/`,
    status: "Completed",
    categories: ["tool", "web"],
    skills: ["OAuth", "Drizzle ORM"],
    description:
      "OAuth authentication implementations with Drizzle ORM integration.",
  },
  {
    id: "decentralized-todo-dapp",
    title: "Decentralized Todo DApp",
    period: { start: "2025" },
    link: `${SHIPLOG}/blockchain-todo-app/`,
    status: "Completed",
    categories: ["web3"],
    skills: ["Ethereum", "Solidity", "MetaMask"],
    description:
      "An Ethereum-based todo app with Sign-In with Ethereum (SIWE) authentication.",
  },
  {
    id: "analytics-dashboard",
    title: "Analytics Dashboard",
    period: { start: "2025" },
    link: `${SHIPLOG}/data-analysis-dashboard/`,
    status: "Completed",
    categories: ["tool", "web"],
    skills: ["React", "Data Visualization"],
    description: "An interactive dashboard for exploring and visualizing data.",
  },
]
