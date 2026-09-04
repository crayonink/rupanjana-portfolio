import { site } from "@/content/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { Balloon, Star } from "./Doodles";

/** Each group gets its own crayon out of the box. */
const GROUP_COLORS = [
  "bg-crayon-yellow",
  "bg-crayon-sky",
  "bg-crayon-pink",
  "bg-crayon-green",
];

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <Balloon className="absolute right-[7%] top-16 w-16 animate-float opacity-80" />
        <Star className="absolute bottom-20 right-[20%] hidden w-10 animate-wiggle opacity-70 lg:block" />
      </div>

      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="what is in the pencil case"
          title="Skills"
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {site.skills.map((group, i) => (
            <Reveal key={group.group} delay={i * 90}>
              <div
                className={`crayon-box sticker h-full bg-paper-2 p-7 ${
                  i % 2 === 0 ? "-rotate-1" : "rotate-1"
                } transition-transform duration-300 hover:rotate-0`}
              >
                <h3 className="font-display text-3xl text-ink">
                  <span
                    className="marker"
                    style={{
                      ["--marker-color" as string]: `var(--color-${
                        ["crayon-yellow", "crayon-sky", "crayon-pink", "crayon-green"][i % 4]
                      })`,
                    }}
                  >
                    {group.group}
                  </span>
                </h3>

                <ul className="mt-6 flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className={`crayon-chip sticker-sm ${
                        GROUP_COLORS[i % GROUP_COLORS.length]
                      } px-4 py-1.5 font-bold text-ink transition-transform hover:-translate-y-0.5 hover:rotate-2`}
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
