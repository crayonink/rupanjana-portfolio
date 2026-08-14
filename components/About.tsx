import { site } from "@/content/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { House, Tree, Flower, Heart, Rainbow, Grass, Sun } from "./Doodles";

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

export default function About() {
  return (
    <section id="about" className="relative px-6 py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <Sun className="absolute right-[5%] top-12 w-20 animate-sway opacity-70" />
        <Grass className="absolute inset-x-0 bottom-0 h-8 w-full opacity-40" />
      </div>

      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="who's behind all this"
          title="About me"
        />

        <div className="mt-16 grid items-start gap-14 lg:grid-cols-[1.15fr_1fr]">
          {/* ---------------- The story ---------------- */}
          <div>
            {site.about.paragraphs.map((para, i) => (
              <Reveal key={i} delay={i * 80}>
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
                  <p className="mt-1 text-ink-soft">
                    {site.education.school}
                  </p>
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
      </div>
    </section>
  );
}
