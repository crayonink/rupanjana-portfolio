import { site } from "@/content/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { ArrowDoodle, Star, Check, Cloud, Butterfly } from "./Doodles";

/** Cards alternate their tilt so the grid reads as pinned-up paper. */
const TILTS = ["-rotate-1", "rotate-1", "rotate-[0.6deg]", "-rotate-[1.2deg]"];
const CARD_COLORS = ["bg-paper-2", "bg-paper", "bg-paper-2", "bg-paper"];

export default function Projects() {
  return (
    <section id="work" className="relative px-6 py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <Cloud className="absolute right-[4%] top-10 w-28 opacity-50" />
        <Butterfly className="absolute bottom-24 left-[3%] hidden w-16 animate-float lg:block" />
      </div>

      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="things I made"
          title="Selected work"
          blurb="Backend systems where being wrong is expensive. These show how I think about a problem, not just which tools I know."
        />

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          {site.projects.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 90}
              className={p.featured ? "md:col-span-2" : ""}
            >
              <article
                className={`crayon-box sticker group relative h-full ${
                  CARD_COLORS[i % CARD_COLORS.length]
                } ${TILTS[i % TILTS.length]} p-8 transition-transform duration-300 hover:rotate-0 hover:-translate-y-1.5 sm:p-10`}
              >
                {/* Featured work gets a gold star, obviously. */}
                {p.featured && (
                  <Star className="absolute -right-4 -top-5 w-14 animate-wiggle" />
                )}

                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3
                    className={`font-display text-ink ${
                      p.featured ? "text-4xl sm:text-5xl" : "text-3xl"
                    }`}
                  >
                    {p.title}
                  </h3>
                  {p.year && (
                    <span className="font-hand text-xl text-crayon-blue">
                      {p.year}
                    </span>
                  )}
                </div>

                <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">
                  {p.blurb}
                </p>

                {p.impact && (
                  <p className="mt-5 flex items-start gap-2.5 font-hand text-xl leading-snug text-crayon-forest">
                    <Check className="mt-1 w-5 shrink-0" fine />
                    {p.impact}
                  </p>
                )}

                <ul className="mt-6 flex flex-wrap gap-2.5">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="crayon-chip bg-paper-3 px-3 py-1 text-sm font-bold text-ink"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                {(p.href || p.repo) && (
                  <div className="mt-7 flex flex-wrap gap-6">
                    {p.href && (
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-2 font-display text-xl text-ink hover:text-crayon-red"
                      >
                        Live demo
                        <ArrowDoodle
                          className="w-6 transition-transform group-hover/link:translate-x-1"
                          fine
                        />
                      </a>
                    )}
                    {p.repo && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-2 font-display text-xl text-ink hover:text-crayon-red"
                      >
                        Source
                        <ArrowDoodle
                          className="w-6 transition-transform group-hover/link:translate-x-1"
                          fine
                        />
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
