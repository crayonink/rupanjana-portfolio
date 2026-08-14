import Reveal from "./Reveal";

/** Shared eyebrow + big gradient title used at the top of every section. */
export default function SectionHeading({
  eyebrow,
  title,
  blurb,
}: {
  eyebrow: string;
  title: string;
  blurb?: string;
}) {
  return (
    <Reveal>
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-brand-1">
        {eyebrow}
      </p>
      <h2 className="text-[clamp(2rem,6vw,3.75rem)] font-black leading-tight tracking-tighter text-white">
        {title}
      </h2>
      {blurb && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-body sm:text-lg">
          {blurb}
        </p>
      )}
    </Reveal>
  );
}
