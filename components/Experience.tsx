import { site } from "@/content/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  // Emptying the array in content/site.ts removes this section entirely.
  if (site.experience.length === 0) return null;

  return (
    // overflow-hidden clips the decorative glow below so it can't widen the page.
    <section id="experience" className="relative overflow-hidden px-6 py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-1/3 -z-10 h-[26rem] w-[26rem] rounded-full bg-brand-1/10 blur-[120px]"
      />

      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Experience" title="Where I've worked" />

        <div className="relative mt-14">
          {/* Vertical timeline rail, fading out at the bottom. */}
          <div
            aria-hidden
            className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-brand-1 via-brand-2 to-transparent sm:left-[9px]"
          />

          <ol className="space-y-12">
            {site.experience.map((job, i) => (
              <li key={`${job.company}-${job.period}`} className="relative pl-10 sm:pl-14">
                <Reveal delay={i * 110}>
                  {/* Timeline dot */}
                  <span
                    aria-hidden
                    className="absolute left-0 top-2 h-4 w-4 rounded-full bg-gradient-to-br from-brand-1 to-brand-2 ring-4 ring-ink sm:h-5 sm:w-5"
                  />

                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-3">
                    {job.period}
                  </p>
                  <h3 className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl">
                    {job.role}
                  </h3>
                  <p className="mt-1 text-lg font-semibold text-muted">
                    {job.company}
                  </p>

                  <ul className="mt-4 space-y-2.5">
                    {job.points.map((point, j) => (
                      <li
                        key={j}
                        className="relative pl-5 leading-relaxed text-body before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-2"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
