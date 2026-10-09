import { cn } from "@/lib/utils"

import { MascotCover } from "./mascot-cover"

/** Cover art above the profile name: a dot-grid backdrop with Lloyd, the site mascot. */
export function ProfileCover({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex aspect-2.5/1 items-center justify-center sm:aspect-3/1",
        "bg-[radial-gradient(var(--line)_1px,transparent_1px)] bg-size-[16px_16px]",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--background)_85%)]"
        aria-hidden
      />

      <MascotCover size={120} />
    </div>
  )
}
