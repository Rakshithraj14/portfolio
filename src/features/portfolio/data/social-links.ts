import type { SocialProfile } from "@/features/portfolio/types/social-links"

/**
 * Keyed registry of social profiles — the single source of truth. Icons are
 * bound separately in `social-link-icons.tsx` (keyed by the same `SocialName`),
 * so adding a profile here forces the icon map to stay in sync at compile time.
 */
export const SOCIAL = {
  github: {
    title: "GitHub",
    handle: "Rakshithraj14",
    href: "https://github.com/Rakshithraj14",
    sameAs: true,
  },
  linkedin: {
    title: "LinkedIn",
    handle: "rakshith-raj-m",
    href: "https://linkedin.com/in/rakshith-raj-m-48344b2aa",
    sameAs: true,
  },
  email: {
    title: "Email",
    handle: "rakshithraj14112001@gmail.com",
    href: "mailto:rakshithraj14112001@gmail.com",
  },
  crates: {
    title: "crates.io",
    handle: "Rakshithraj14",
    href: "https://crates.io/users/Rakshithraj14",
    sameAs: true,
  },
  hashnode: {
    title: "Hashnode",
    handle: "rakshithraj",
    href: "https://hashnode.com/@rakshithraj",
    sameAs: true,
  },
  dockerhub: {
    title: "Docker Hub",
    handle: "rakshithraj",
    href: "https://hub.docker.com/u/rakshithraj",
    sameAs: true,
  },
  huggingface: {
    title: "Hugging Face",
    handle: "Asura-14",
    href: "https://huggingface.co/Asura-14",
    sameAs: true,
  },
} satisfies Record<string, SocialProfile>

export type SocialName = keyof typeof SOCIAL

export type SocialLink = SocialProfile & { name: SocialName }

export const SOCIAL_LINKS: SocialLink[] = (
  Object.entries(SOCIAL) as [SocialName, SocialProfile][]
).map(([name, profile]) => ({ name, ...profile }))
