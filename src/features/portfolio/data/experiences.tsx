import { BrainCircuitIcon, ServerIcon, WrenchIcon } from "lucide-react"

import type { Experience } from "@/features/portfolio/types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "gpunet",
    companyName: "GPUNET",
    companyLogo: "/images/logos/gpunet.jpg",
    companyWebsite: "https://gpu.net",
    companyIcon: <ServerIcon />,
    location: "Bengaluru, India",
    locationType: "On-site",
    positions: [
      {
        id: "1",
        title: "Software Developer (SDE)",
        employmentPeriod: {
          start: "08.2025",
        },
        employmentType: "Full-time",
        icon: <ServerIcon />,
        description: `- Architecting scalable SaaS applications with React and TypeScript, implementing cloud-native solutions on AWS, and designing optimized MySQL schemas and RESTful APIs.
- Established Git workflows and CI/CD pipelines for team collaboration.`,
        skills: ["React", "TypeScript", "AWS", "MySQL", "CI/CD"],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "ibm-rooman",
    companyName: "IBM / Rooman Technologies",
    companyLogo: "/images/logos/ibm.png",
    companyWebsite: "https://www.ibm.com/in-en",
    companyIcon: <WrenchIcon />,
    locationType: "On-site",
    positions: [
      {
        id: "1",
        title: "DevOps Engineer Intern",
        employmentPeriod: {
          start: "08.2024",
          end: "02.2025",
        },
        employmentType: "Internship",
        icon: <WrenchIcon />,
        description: `- Completed an intensive AI-DevOps Engineer training program certified by VTU, gaining hands-on experience with containerization, orchestration, and CI/CD pipelines for production environments.`,
        skills: ["Docker", "Kubernetes", "CI/CD"],
      },
    ],
  },
  {
    id: "pragyan-ai",
    companyName: "Pragyan AI",
    companyIcon: <BrainCircuitIcon />,
    location: "Bengaluru, India",
    positions: [
      {
        id: "1",
        title: "Industry Intern (ML Project)",
        employmentPeriod: {
          start: "10.2023",
          end: "11.2023",
        },
        employmentType: "Internship",
        icon: <BrainCircuitIcon />,
        description: `- Developed a machine learning model for bank deposit term prediction as part of the AIML department's industry internship program at Vijaya Vittala Institute of Technology.`,
        skills: ["Machine Learning", "Python"],
      },
    ],
  },
]
