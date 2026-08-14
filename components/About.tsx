import { site } from "@/content/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    // overflow-hidden clips the decorative glow below so it can't widen the page.
    <section id="about" className="relative overflow-hidden px-6 py-24 sm:py-32">
      {/* Soft glow anchoring the section to the left edge. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/4 -z-10 h-[28rem] w-[28rem] rounded-full bg-brand-2/10 blur-[120px]"
      />

      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="About" title="A little about me" />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-5">
            {site.about.paragraphs.map((para, i) => (
              <Reveal key={i} delay={i * 100}>
                <p className="text-lg leading-relaxed text-body">{para}</p>
              </Reveal>
            ))}

            <Reveal delay={site.about.paragraphs.length * 100}>
              <p className="pt-2 text-sm font-semibold uppercase tracking-widest text-muted">
                Based in {site.location}
              </p>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {site.about.stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 120}>
                <div className="gradient-border rounded-2xl bg-ink-soft p-6">
                  <p className="text-gradient text-4xl font-black tracking-tighter">
                    {s.value}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-muted">
                    {s.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
