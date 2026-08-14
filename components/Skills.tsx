import { site } from "@/content/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Toolkit"
          title="What I work with"
          blurb="The tools I reach for most often — happy to pick up whatever a problem actually needs."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {site.skills.map((group, i) => (
            <Reveal key={group.group} delay={i * 90}>
              <div className="gradient-border h-full rounded-2xl bg-ink-soft p-7">
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-brand-3">
                  {group.group}
                </h3>
                <ul className="mt-5 flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-line bg-surface px-3.5 py-2 text-sm font-semibold text-body transition-colors hover:border-brand-2 hover:text-white"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
