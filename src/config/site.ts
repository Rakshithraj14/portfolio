import type { Route } from "next"

import type { NavItem } from "@/types/nav"
import { SOCIAL } from "@/features/portfolio/data/social-links"
import { USER } from "@/features/portfolio/data/user"

export const GITHUB_USERNAME = SOCIAL.github.handle
export const SOURCE_CODE_GITHUB_REPO = `${GITHUB_USERNAME}/portfolio`
export const SOURCE_CODE_GITHUB_URL = `https://github.com/${SOURCE_CODE_GITHUB_REPO}`

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.NEXT_PUBLIC_APP_URL || "https://example.com",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
}

export const LICENSE = {
  name: "MIT License",
  url: `${SOURCE_CODE_GITHUB_URL}/blob/main/LICENSE`,
}

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}

export const MAIN_NAV: NavItem<Route>[] = [
  {
    title: "Experience",
    href: "/#experience",
  },
  {
    title: "Projects",
    href: "/#projects",
  },
  {
    title: "Blog",
    href: "/#blog",
  },
]

export const MOBILE_NAV: NavItem<Route>[] = [
  {
    title: "Home",
    href: "/",
  },
  ...MAIN_NAV,
]

export const UTM_PARAMS = {
  utm_source: "portfolio",
}
