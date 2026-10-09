# portfolio

Personal portfolio of **Rakshith Raj M** — MLOps & AI Engineer.
## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

All content lives in `src/features/portfolio/data/`:

| File                      | Section                                                       |
| ------------------------- | ------------------------------------------------------------- |
| `user.ts`                 | Name, bio, contact, about, resume, avatar                     |
| `social-links.ts`         | Social profiles (icons in `components/social-link-icons.tsx`) |
| `experiences.tsx`         | Work experience                                               |
| `projects.tsx`            | Projects                                                      |
| `blog.ts`                 | External blog posts (shiplog)                                 |
| `tech-stack.tsx`          | Stack badges (icons from `@icons-pack/react-simple-icons`)    |
| `awards.tsx`              | Awards (section hides itself when the list is empty)          |
| `certifications.ts`       | Certifications                                                |
| `github-contributions.ts` | GitHub accounts shown in the contributions graphs             |

Avatar: `public/images/avatar.jpg` (also used as the favicon). Site mark: `src/components/site-mark.tsx` (placeholder monogram — pending a real mark/mascot design).

## Development

```bash
npm install
npm run dev
```

Before pushing:

```bash
npm run lint
npm run check-types
npm run format:check
npm run build
```

## Insights section (page views)

Counted first-party in Redis — no third-party script, no cookies, nothing stored about the visitor. Every page load or refresh pings `POST /api/insights/hit`, which adds one to that day's bucket and to the running total. Set in `.env.local` / your host:

```
REDIS_URL=redis://default:<password>@<host>:<port>
```

The section stays hidden until `REDIS_URL` is set.

## Music

The header's music toggle plays `public/music.mp3`, looping with a fade in/out.

## Routes

- `/` — the portfolio
- `/vcard` — downloadable vCard
- `/api/insights/hit` — `POST`, first-party page-view counter (see above)
- `/og/simple?title=…&description=…` — OG image generator
- `/llms.txt`, `/about.md`, `/experience.md`, `/projects.md`, `/awards.md`, `/certifications.md` — Markdown for AI agents
