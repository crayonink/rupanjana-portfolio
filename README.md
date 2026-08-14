# Rupanjana Mitra — Portfolio

A bold, colorful one-page portfolio built with Next.js 15, React 19 and Tailwind CSS v4.

## Running it

```bash
npm run dev
```

Then open <http://localhost:3000>. Edits appear instantly — no need to restart.

```bash
npm run build   # production build
npm start       # serve the production build
```

## Editing your content

**Everything you'd want to change lives in one file: [`content/site.ts`](content/site.ts).**

Open it and replace anything marked `// TODO`. You don't need to touch any other
file to have a finished, personal site. In order of importance:

1. `role`, `tagline`, `intro` — the first things anyone reads.
2. `links.github` / `links.linkedin` — replace the placeholder URLs.
3. `projects` — the most important section. Replace all four with real work.
4. `experience` — your actual roles, most recent first.
5. `skills`, `about` — adjust the lists and paragraphs.

Some conventions the file follows:

- Setting any link to an empty string `""` hides that button or icon.
- `featured: true` on a project makes its card span the full width.
- Emptying the `experience` array removes the whole Experience section.
- Adding or removing items in any array just works — the layout adapts.

## Adding your résumé

Drop your PDF at `public/resume.pdf` and the "Download résumé" link will work.
To use a different name, update `links.resume` in `content/site.ts`.

## Changing the colors

The whole palette is three variables at the top of
[`app/globals.css`](app/globals.css):

```css
--color-brand-1: #ff2d95;  /* magenta */
--color-brand-2: #a855f7;  /* violet  */
--color-brand-3: #22d3ee;  /* cyan    */
```

Change those three and the gradients, buttons, borders and glows all follow.
`--color-ink` is the page background.

## Using a custom font

The site uses the system font stack so it works offline. To use a Google font,
add this to `app/layout.tsx`:

```tsx
import { Outfit } from "next/font/google";
const display = Outfit({ subsets: ["latin"], variable: "--font-display" });
// then: <html lang="en" className={display.variable}>
```

and remove the `--font-display` line from `app/globals.css`.

## Deploying on Railway

1. Go to [railway.app](https://railway.app) → **New Project** → **Deploy from
   GitHub repo**, and pick this repository.
2. Railway reads [`railway.json`](railway.json), runs `npm run build`, then
   `npm run start`. There is nothing to configure.
3. Open the service → **Settings → Networking → Generate Domain** to get a
   public URL. Railway does not expose the service until you do this.

Every later `git push` to `main` redeploys automatically.

Notes:

- Railway injects a `PORT` environment variable and `next start` reads it
  automatically — don't hardcode a port or override the start command.
- No environment variables are required; the site is fully static content
  rendered by Next.js.
- To use your own domain, add it under **Settings → Networking → Custom Domain**
  and point a CNAME at the value Railway shows you.

## Project layout

```
app/
  layout.tsx      page metadata, fonts, <html> shell
  page.tsx        section order — rearrange sections here
  globals.css     theme colors, animations, utilities
components/       one file per section
content/site.ts   ← all your text and links
public/           images, resume.pdf, favicon
```
