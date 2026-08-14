import { site } from "@/content/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { ArrowDoodle, Star, Cloud, Bird, Kite } from "./Doodles";

const TILTS = ["-rotate-1", "rotate-1", "rotate-[0.7deg]", "-rotate-[1.2deg]"];

export default function Building() {
  const v = site.venture;

  return (
    <section id="building" className="relative px-6 py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <Cloud className="absolute right-[5%] top-14 w-28 opacity-50" />
        <Kite className="absolute left-[3%] top-20 hidden w-14 animate-sway opacity-70 lg:block" />
        <Bird className="absolute right-[22%] top-28 w-12 animate-float opacity-70" />
      </div>

      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={v.eyebrow} title={v.product} />

        {/* ---------------- The pitch ---------------- */}
        <Reveal>
          <div className="crayon-box sticker relative mt-14 -rotate-1 bg-crayon-sky/20 p-8 transition-transform duration-300 hover:rotate-0 sm:p-12">
            <Star className="absolute -right-5 -top-6 w-16 animate-wiggle" />

            <p className="font-hand text-2xl text-crayon-blue">{v.company}</p>

            <h3 className="mt-2 font-display text-[clamp(1.9rem,4.2vw,3rem)] leading-tight text-ink">
              {v.headline}
            </h3>

            <p className="mt-6 max-w-3xl font-display text-2xl leading-snug text-crayon-plum sm:text-3xl">
              {v.pitch}
            </p>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-soft">
              {v.body}
            </p>

            {/* The shorthand people actually repeat back to you. */}
            {v.compare && (
              <p className="font-hand mt-5 text-2xl text-crayon-red -rotate-1">
                {v.compare}
              </p>
            )}

            {v.href && (
              <a
                href={v.href}
                target="_blank"
                rel="noopener noreferrer"
                className="crayon-chip sticker-sm mt-8 inline-flex rotate-1 items-center gap-2 bg-crayon-yellow px-7 py-3 font-display text-2xl text-ink transition-transform hover:-rotate-1 hover:-translate-y-1"
              >
                See Kokum Wire
                <ArrowDoodle className="w-7" stroke="var(--color-ink)" fine />
              </a>
            )}
          </div>
        </Reveal>

        {/* ---------------- What it does ---------------- */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {v.features.map((f, i) => (
            <Reveal key={f.title} delay={i * 90}>
              <div
                className={`crayon-box${i % 2 ? "-alt" : ""} sticker-sm h-full bg-paper-2 p-6 ${
                  TILTS[i % TILTS.length]
                } transition-transform duration-300 hover:rotate-0`}
              >
                <h4 className="font-display text-2xl leading-tight text-ink">
                  {f.title}
                </h4>
                <p className="mt-2 leading-relaxed text-ink-soft">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
