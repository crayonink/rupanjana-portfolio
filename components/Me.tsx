import { site } from "@/content/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { Heart, Star, Cloud, Bird, Butterfly, Balloon } from "./Doodles";

/** Each hat sits at its own angle, like labels scrawled at speed. */
const TILTS = [
  "-rotate-2",
  "rotate-1",
  "rotate-[2.5deg]",
  "-rotate-1",
  "rotate-2",
  "-rotate-[2.5deg]",
  "rotate-[0.5deg]",
];

export default function Me() {
  const { personal } = site;
  const { quote, press } = personal;

  return (
    <section id="me" className="relative px-6 py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <Cloud className="absolute left-[5%] top-12 w-28 opacity-45" />
        <Butterfly className="absolute right-[6%] top-28 hidden w-16 animate-float lg:block" />
        <Bird className="absolute left-[24%] top-24 w-12 opacity-60" />
        <Balloon className="absolute bottom-8 right-[2%] hidden w-14 animate-float opacity-70 lg:block" />
      </div>

      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={personal.eyebrow}
          title={personal.title}
          blurb={personal.blurb}
        />

        {/* ---------------- The story ---------------- */}
        <div className="mt-14 max-w-3xl">
          {personal.paragraphs.map((para, i) => (
            <Reveal key={i} delay={i * 80}>
              <p className="mb-5 text-lg leading-relaxed text-ink-soft">
                {para}
              </p>
            </Reveal>
          ))}
        </div>

        {/* ---------------- The hats ---------------- */}
        <Reveal delay={120}>
          {/* mb-8, not mb-5: the note is rotated, so its corner dips lower
              than its line box and clips the first chip at tighter spacing. */}
          <p className="margin-note mt-10 mb-8">every hat, so far ↓</p>
          <ul className="flex flex-wrap gap-4">
            {personal.hats.map((hat, i) => (
              <li
                key={hat.label}
                className={`crayon-chip sticker-sm ${hat.color} ${
                  TILTS[i % TILTS.length]
                } px-5 py-2.5 text-ink transition-transform duration-300 hover:rotate-0 hover:-translate-y-1`}
              >
                <span className="font-display text-xl leading-none">
                  {hat.label}
                </span>
                {hat.detail && (
                  <span className="font-hand ml-2 text-lg text-ink-soft">
                    {hat.detail}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* ---------------- Press + the line ---------------- */}
        <div className="mt-16 grid items-stretch gap-8 lg:grid-cols-[1fr_1.35fr]">
          {/* A newspaper clipping, taped to the page. */}
          <Reveal>
            <figure className="taped sticker crayon-box-alt flex h-full -rotate-1 flex-col justify-center bg-paper p-8 text-center">
              <Star className="mx-auto w-12" />
              <p className="mt-4 font-display text-3xl leading-tight text-ink">
                {press.outlet}
              </p>
              <p className="mt-2 font-hand text-xl text-crayon-blue">
                {press.what}
              </p>
              {press.href && (
                <a
                  href={press.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 font-display text-lg text-crayon-red underline decoration-wavy underline-offset-4"
                >
                  read it
                </a>
              )}
            </figure>
          </Reveal>

          {/* The favourite line. */}
          <Reveal delay={120}>
            <figure className="sticker crayon-box flex h-full rotate-1 flex-col justify-center bg-crayon-yellow/25 px-8 py-10 text-center sm:px-12">
              <blockquote className="font-display text-[clamp(1.6rem,3.4vw,2.4rem)] leading-[1.2] text-ink">
                <p>&ldquo;{quote.line}&rdquo;</p>
                <p className="mt-3 text-crayon-red">
                  &ldquo;{quote.reply}&rdquo;
                </p>
              </blockquote>

              <figcaption className="mt-6 flex flex-wrap items-center justify-center gap-2">
                <Heart className="w-6" fine />
                <span className="font-hand text-xl text-crayon-blue">
                  {quote.note}
                </span>
                {quote.source && (
                  <cite className="font-hand text-xl not-italic text-muted">
                    — {quote.source}
                  </cite>
                )}
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
