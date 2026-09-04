import { site } from "@/content/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import {
  House,
  Tree,
  Flower,
  Heart,
  Rainbow,
  Grass,
  Sun,
  Star,
  Butterfly,
  Boat,
} from "./Doodles";

/** The little gallery of drawings taped up next to the story. */
function FridgeArt() {
  // Sized by height, not width — these have wildly different aspect ratios and
  // a shared `w-full` makes the tall ones burst out of their frames.
  const art = "h-full w-auto max-w-full";
  const pieces = [
    { art: <House className={art} />, tilt: "-rotate-3", note: "home" },
    { art: <Tree className={art} />, tilt: "rotate-2", note: "the big tree" },
    { art: <Rainbow className={art} />, tilt: "rotate-1", note: "after rain" },
    { art: <Flower className={art} />, tilt: "-rotate-2", note: "for you" },
  ];

  return (
    <div className="grid grid-cols-2 gap-5">
      {pieces.map((p, i) => (
        <Reveal key={p.note} delay={i * 110}>
          <figure
            className={`crayon-box sticker-sm ${p.tilt} flex h-full flex-col items-center justify-between bg-paper-2 p-4 transition-transform duration-300 hover:rotate-0`}
          >
            <div className="flex h-28 w-full items-center justify-center overflow-hidden">
              {p.art}
            </div>
            <figcaption className="font-hand mt-2 text-lg text-crayon-blue">
              {p.note}
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}

/** Each hat sits at its own angle, like labels scrawled at speed. */
const HAT_TILTS = [
  "-rotate-2",
  "rotate-1",
  "rotate-[2.5deg]",
  "-rotate-1",
  "rotate-2",
  "-rotate-[2.5deg]",
  "rotate-[0.5deg]",
];

export default function About() {
  const { personal } = site;
  const { quote, press } = personal;

  return (
    <section id="about" className="relative px-6 py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <Sun className="absolute right-[5%] top-12 w-20 animate-sway opacity-70" />
        {/* Negative offset keeps it outside the text column, which starts at
            the max-w-6xl gutter — left-[3%] put it right on the paragraphs. */}
        <Butterfly className="absolute -left-3 top-[44%] hidden w-14 animate-float opacity-70 lg:block" />
        <Grass className="absolute inset-x-0 bottom-0 h-8 w-full opacity-40" />
      </div>

      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="who is behind all this" title="About me" />

        <div className="mt-16 grid items-start gap-14 lg:grid-cols-[1.15fr_1fr]">
          {/* ---------------- The story ---------------- */}
          <div>
            {site.about.paragraphs.map((para, i) => (
              <Reveal key={i} delay={i * 70}>
                <p className="mb-5 text-lg leading-relaxed text-ink-soft">
                  {para}
                </p>
              </Reveal>
            ))}

            {/* ---------------- Stats ---------------- */}
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {site.about.stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 110}>
                  <div
                    className={`crayon-box-alt sticker-sm h-full bg-paper-2 p-5 text-center ${
                      i === 1 ? "rotate-1" : "-rotate-1"
                    }`}
                  >
                    <p className="font-display text-4xl leading-none text-crayon-red">
                      {s.value}
                    </p>
                    <p className="mt-2 font-hand text-lg leading-tight text-ink-soft">
                      {s.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* ---------------- Education ---------------- */}
            <Reveal delay={200}>
              <div className="crayon-box mt-8 flex items-start gap-4 bg-paper p-5">
                <Heart className="mt-1 w-8 shrink-0" fine />
                <div>
                  <p className="font-display text-2xl leading-tight text-ink">
                    {site.education.degree}
                  </p>
                  <p className="mt-1 text-ink-soft">{site.education.school}</p>
                  <p className="font-hand mt-1 text-lg text-crayon-blue">
                    {site.education.period}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* ---------------- The art ---------------- */}
          <div>
            <p className="margin-note mb-5">the gallery ↓</p>
            <FridgeArt />
          </div>
        </div>

        {/* ---------------- The hats ---------------- */}
        <Reveal delay={120}>
          {/* mb-8, not mb-5: the note is rotated, so its corner dips lower
              than its line box and clips the first chip at tighter spacing. */}
          <p className="margin-note mt-16 mb-8">every hat, so far ↓</p>
          <ul className="flex flex-wrap gap-4">
            {personal.hats.map((hat, i) => (
              <li
                key={hat.label}
                className={`crayon-chip sticker-sm ${hat.color} ${
                  HAT_TILTS[i % HAT_TILTS.length]
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

        {/* ---------------- The fact ---------------- */}
        {personal.fact.text && (
          <Reveal delay={80}>
            <figure className="taped sticker crayon-box-alt mt-16 flex max-w-4xl -rotate-1 items-start gap-6 bg-crayon-sky/15 p-8 transition-transform duration-300 hover:rotate-0 sm:gap-8 sm:p-10">
              <Boat className="w-20 shrink-0 animate-sway sm:w-24" />
              <div>
                <figcaption className="font-hand text-xl text-crayon-blue">
                  {personal.fact.label}
                </figcaption>
                <p className="mt-2 font-display text-2xl leading-snug text-ink sm:text-3xl">
                  {personal.fact.text}
                </p>
              </div>
            </figure>
          </Reveal>
        )}

        {/* ---------------- Press + the line ---------------- */}
        <div className="mt-14 grid items-stretch gap-8 lg:grid-cols-[1fr_1.35fr]">
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
                    {quote.source}
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
