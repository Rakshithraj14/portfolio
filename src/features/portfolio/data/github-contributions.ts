import "server-only"

import type { Activity } from "@/registry/components/contribution-graph"
import { getCachedContributions } from "@/registry/components/github-contributions/lib/get-cached-contributions"

/** GitHub accounts combined into the single contributions graph. */
export const GITHUB_CONTRIBUTION_ACCOUNTS = [
  { username: "Rakshithraj14", profileUrl: "https://github.com/Rakshithraj14" },
  { username: "rakshith-gpu", profileUrl: "https://github.com/rakshith-gpu" },
] as const

/**
 * Fetches contributions for every account in `GITHUB_CONTRIBUTION_ACCOUNTS`
 * and merges them into one calendar, summing counts per day and re-bucketing
 * `level` (0-4) off the combined counts (each account's own `level` is
 * relative to its own data, so it can't just be summed).
 */
export async function getCombinedGitHubContributions(): Promise<Activity[]> {
  const perAccount = await Promise.all(
    GITHUB_CONTRIBUTION_ACCOUNTS.map((account) =>
      getCachedContributions(account.username)
    )
  )

  const countByDate = new Map<string, number>()
  for (const activities of perAccount) {
    for (const activity of activities) {
      countByDate.set(
        activity.date,
        (countByDate.get(activity.date) ?? 0) + activity.count
      )
    }
  }

  const dates = [...countByDate.keys()].sort()
  const maxCount = Math.max(0, ...countByDate.values())

  return dates.map((date) => {
    const count = countByDate.get(date) ?? 0
    return {
      date,
      count,
      level: count === 0 ? 0 : Math.min(4, Math.ceil((count / maxCount) * 4)),
    }
  })
}
