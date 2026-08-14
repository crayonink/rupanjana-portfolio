import Reveal from "./Reveal";
import { Scribble } from "./Doodles";

/**
 * The heading block that opens every section: a handwritten eyebrow, a big
 * crayon title with a scribbled underline, and an optional blurb.
 */
export default function SectionHeading({
  eyebrow,
  title,
  blurb,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  blurb?: string;
  align?: "left" | "center";
}) {
  const centered = align === "center";

  return (
    <Reveal>
      <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-3xl"}>
        <p className="font-hand text-2xl text-crayon-blue -rotate-2">
          {eyebrow}
        </p>

        <h2 className="mt-2 font-display text-[clamp(2.5rem,7vw,4.5rem)] leading-[0.95] text-ink">
          {title}
        </h2>

        <Scribble
          className={`mt-1 w-56 ${centered ? "mx-auto" : ""}`}
          stroke="var(--color-crayon-red)"
        />

        {blurb && (
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">{blurb}</p>
        )}
      </div>
    </Reveal>
  );
}
