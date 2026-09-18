import {
  SiDocker,
  SiHashnode,
  SiHuggingface,
} from "@icons-pack/react-simple-icons"
import { MailIcon, PackageIcon } from "lucide-react"

import { GitHubIcon, LinkedInIcon } from "@/components/icons"
import type { SocialName } from "@/features/portfolio/data/social-links"

/**
 * Presentation binding for social profiles. Kept separate from the social
 * data so the data layer stays JSX-free. Keyed by `SocialName` so it stays
 * exhaustive with the registry.
 */
export const SOCIAL_ICONS: Record<SocialName, React.JSX.Element> = {
  github: <GitHubIcon />,
  linkedin: <LinkedInIcon />,
  email: <MailIcon />,
  // crates.io has no dedicated brand icon in the simple-icons set; a package
  // glyph reads clearly enough for "crate registry".
  crates: <PackageIcon />,
  hashnode: <SiHashnode />,
  dockerhub: <SiDocker />,
  huggingface: <SiHuggingface />,
}
