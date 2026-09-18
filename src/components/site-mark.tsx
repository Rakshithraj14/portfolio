import { cn } from "@/lib/utils"

/**
 * Site mark placeholder — a simple monogram. Swap this out once a real
 * mark/mascot is decided.
 */
export function SiteMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex aspect-square size-6 items-center justify-center rounded-full bg-foreground font-mono text-xs font-semibold text-background select-none",
        className
      )}
      aria-hidden
    >
      R
    </span>
  )
}
