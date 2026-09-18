import Link from "next/link"
import { FileTextIcon } from "lucide-react"

import { MAIN_NAV } from "@/config/site"
import { Button } from "@/components/base/ui/button"
import { Separator } from "@/components/base/ui/separator"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/base/ui/tooltip"
import { MusicToggle } from "@/components/music-toggle"
import { NavDesktop } from "@/components/nav-desktop"
import { SiteMark } from "@/components/site-mark"
import { ThemeToggle } from "@/components/theme-toggle"
import { USER } from "@/features/portfolio/data/user"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 max-w-screen overflow-x-clip bg-background px-2">
      <div className="screen-line-top screen-line-bottom mx-auto flex h-(--header-height) items-center gap-2 border-x screen-line-bottom-border screen-line-top-border pr-2 pl-4 after:z-1 sm:gap-4 md:max-w-3xl">
        <Link href="/" aria-label="Home">
          <SiteMark className="h-6 shrink-0" />
        </Link>

        <div className="flex-1" />

        <NavDesktop items={MAIN_NAV} />

        <div className="flex items-center">
          <Separator
            orientation="vertical"
            className="mr-2 max-sm:hidden data-vertical:h-5 data-vertical:self-center"
          />
          <Tooltip>
            <TooltipTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon-sm"
                  className="text-muted-foreground"
                  nativeButton={false}
                  render={
                    <a
                      href={USER.resumeUrl}
                      target="_blank"
                      rel="noopener"
                      aria-label="Resume"
                    >
                      <FileTextIcon />
                    </a>
                  }
                />
              }
            />
            <TooltipContent>Resume</TooltipContent>
          </Tooltip>
          <Separator
            orientation="vertical"
            className="mx-2 data-vertical:h-5 data-vertical:self-center"
          />
          <MusicToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
