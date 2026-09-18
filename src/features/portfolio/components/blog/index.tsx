import { compareDesc } from "date-fns"

import { FilterableList } from "@/components/filterable-list"
import { HandwrittenPanelNote } from "@/features/portfolio/components/handwritten-note"
import {
  Panel,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from "@/features/portfolio/components/panel"
import { PanelTitleCopy } from "@/features/portfolio/components/panel-title-copy"
import { BLOG_POSTS } from "@/features/portfolio/data/blog"

import { PostItem } from "./post-item"

const ID = "blog"

const SORTED_POSTS = [...BLOG_POSTS].sort((a, b) =>
  compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
)

const BLOG_CATEGORIES = Array.from(
  new Set(SORTED_POSTS.map((post) => post.tag))
).map((tag) => ({ id: tag, label: tag }))

export function Blog() {
  const entries = SORTED_POSTS.map((post) => ({
    id: post.href,
    categories: [post.tag],
    node: <PostItem post={post} headingAs="h3" />,
  }))

  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Blog</a>
          <PanelTitleSup>({BLOG_POSTS.length})</PanelTitleSup>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <div className="relative py-4">
        <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
          <div className="border-r border-line"></div>
          <div className="border-l border-line"></div>
        </div>

        <FilterableList
          entries={entries}
          categories={BLOG_CATEGORIES}
          filterLabel="Filter blog posts by category"
          max={4}
          listClassName="grid grid-cols-1 gap-4 sm:grid-cols-2"
          itemClassName="max-sm:screen-line-top max-sm:screen-line-bottom sm:nth-[2n+1]:screen-line-top sm:nth-[2n+1]:screen-line-bottom"
        />
      </div>
      <HandwrittenPanelNote side="left">
        reads better than my commits
      </HandwrittenPanelNote>
    </Panel>
  )
}
