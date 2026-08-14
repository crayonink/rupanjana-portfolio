import { site } from "@/content/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/** Small arrow used on the project link buttons. */
function Arrow() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 16 16"
      className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="work" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Selected work"
          title="Things I've built"
          blurb="A few projects that show how I think about problems, not just which tools I know."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {site.projects.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 90}
              // Featured projects take the full row on desktop.
              className={p.featured ? "md:col-span-2" : ""}
            >
              <article className="gradient-border group relative h-full overflow-hidden rounded-3xl bg-ink-soft p-8 transition-transform duration-300 hover:-translate-y-1 sm:p-10">
                {/* Colour wash that warms up on hover. */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-brand-2/20 blur-3xl transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                />

                <h3
                  className={`font-black tracking-tight text-white ${
                    p.featured ? "text-3xl sm:text-4xl" : "text-2xl"
                  }`}
                >
                  {p.title}
                </h3>

                <p className="mt-4 max-w-2xl leading-relaxed text-body">
                  {p.blurb}
                </p>

                {p.impact && (
                  <p className="mt-4 border-l-2 border-brand-1 pl-4 text-sm font-semibold text-white">
                    {p.impact}
                  </p>
                )}

                <ul className="mt-6 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-line bg-surface px-3 py-1 text-xs font-semibold text-muted"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                {(p.href || p.repo) && (
                  <div className="mt-7 flex flex-wrap gap-5">
                    {p.href && (
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-1.5 text-sm font-bold text-white hover:text-brand-1"
                      >
                        Live demo <Arrow />
                      </a>
                    )}
                    {p.repo && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-1.5 text-sm font-bold text-white hover:text-brand-1"
                      >
                        Source <Arrow />
                      </a>
                    )}
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
