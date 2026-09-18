import { Suspense } from "react"

import { HandwrittenPanelNote } from "@/features/portfolio/components/handwritten-note"
import {
  getCombinedGitHubContributions,
  GITHUB_CONTRIBUTION_ACCOUNTS,
} from "@/features/portfolio/data/github-contributions"

import { Panel } from "../panel"
import { GitHubContributionFallback, GitHubContributionGraph } from "./graph"

export function GitHubContributions() {
  return (
    <Panel className="screen-line-top-none">
      <h2 className="sr-only">GitHub contributions</h2>

      <Suspense fallback={<GitHubContributionFallback />}>
        <GitHubContributionGraph
          contributions={getCombinedGitHubContributions()}
          figureNumber={2}
          profileUrl={GITHUB_CONTRIBUTION_ACCOUNTS[0].profileUrl}
        />
      </Suspense>

      <div className="h-px" />

      <HandwrittenPanelNote side="right" className="top-4">
        more green, less sleep
      </HandwrittenPanelNote>
    </Panel>
  )
}
