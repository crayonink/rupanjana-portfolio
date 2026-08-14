import { site } from "@/content/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { Heart, Cloud, Bird } from "./Doodles";

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <Cloud className="absolute left-[4%] top-14 w-28 opacity-50" />
        <Bird className="absolute right-[10%] top-24 w-14 animate-float opacity-70" />
      </div>

      {/* max-w-6xl matches every other section, so the heading starts on the
          same left margin; the timeline itself stays narrow for readability. */}
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="how I got here"
          title="Experience"
        />

        <ol className="relative mt-16 max-w-4xl space-y-8">
          {/* The hand-drawn spine of the timeline. */}
          <span
            aria-hidden
            className="absolute left-[7px] top-4 bottom-4 hidden w-[3px] rounded-full bg-crayon-brown/40 sm:block"
          />

          {site.experience.map((job, i) => {
            // The career break has no employer — it gets a gentler card, and a
            // heart instead of a bullet. It belongs on the timeline like
            // anything else that shaped how she works.
            const isBreak = !job.company;

            return (
              <Reveal key={`${job.role}-${job.period}`} delay={i * 90}>
                <li className="relative sm:pl-12">
                  {/* Timeline marker */}
                  <span
                    aria-hidden
                    className="absolute left-0 top-6 hidden sm:block"
                  >
                    {isBreak ? (
                      <Heart className="-ml-2 w-8" fine />
                    ) : (
                      <span className="block h-[17px] w-[17px] rounded-full border-[3px] border-ink bg-crayon-yellow" />
                    )}
                  </span>

                  <div
                    className={`sticker-sm p-6 transition-transform duration-300 hover:rotate-0 sm:p-7 ${
                      isBreak
                        ? "crayon-box-alt rotate-[0.8deg] bg-crayon-pink/15"
                        : `crayon-box bg-paper-2 ${
                            i % 2 === 0 ? "-rotate-[0.7deg]" : "rotate-[0.7deg]"
                          }`
                    }`}
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="font-display text-2xl leading-tight text-ink sm:text-3xl">
                        {job.role}
                      </h3>
                      <p className="font-hand text-xl text-crayon-blue">
                        {job.period}
                      </p>
                    </div>

                    {job.company && (
                      <p className="mt-1 font-bold text-crayon-red">
                        {job.company}
                        {job.place && (
                          <span className="font-normal text-muted">
                            {" · "}
                            {job.place}
                          </span>
                        )}
                      </p>
                    )}

                    <ul className="mt-4 space-y-2.5">
                      {job.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 leading-relaxed text-ink-soft"
                        >
                          <span
                            aria-hidden
                            className="mt-2.5 block h-2 w-2 shrink-0 rotate-45 bg-crayon-orange"
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
