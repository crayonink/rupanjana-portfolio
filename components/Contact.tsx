import { site } from "@/content/site";
import Reveal from "./Reveal";
import { Rainbow, Sun, Flower, Grass, Heart, ArrowDoodle } from "./Doodles";

/** Brand glyphs, inlined so the site makes no external requests. */
const ICONS: Record<string, React.ReactNode> = {
  github: (
    <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
  ),
  linkedin: (
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13Zm1.78 13.02H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
  ),
  twitter: (
    <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.4l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.59l5.24 6.93 6.07-6.93Zm-1.29 19.5h2.04L6.49 3.24H4.3l13.31 17.41Z" />
  ),
  email: (
    <path d="M2 4h20a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm10 8.13L3.5 6.2V18h17V6.2L12 12.13ZM12 10 20.3 4.4H3.7L12 10Z" />
  ),
  phone: (
    <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .57 3.6 1 1 0 0 1-.25 1l-2.2 2.2Z" />
  ),
};

const TILT = ["-rotate-3", "rotate-2", "-rotate-2", "rotate-3", "-rotate-1"];

function SocialLink({
  kind,
  href,
  label,
  i,
}: {
  kind: string;
  href: string;
  label: string;
  i: number;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={label}
      title={label}
      className={`crayon-chip sticker-sm flex h-14 w-14 items-center justify-center bg-paper-2 text-ink ${
        TILT[i % TILT.length]
      } transition-transform hover:-translate-y-1 hover:rotate-0 hover:bg-crayon-yellow`}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        {ICONS[kind]}
      </svg>
    </a>
  );
}

export default function Contact() {
  const { github, linkedin, twitter, resume } = site.links;

  const socials = [
    github && { kind: "github", href: github, label: "GitHub" },
    linkedin && { kind: "linkedin", href: linkedin, label: "LinkedIn" },
    twitter && { kind: "twitter", href: twitter, label: "X (Twitter)" },
    { kind: "email", href: `mailto:${site.email}`, label: "Email" },
    site.phone && {
      kind: "phone",
      href: `tel:${site.phone.replace(/\s/g, "")}`,
      label: `Call ${site.phone}`,
    },
  ].filter(Boolean) as { kind: string; href: string; label: string }[];

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-28 sm:py-36">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <Sun className="absolute left-[8%] top-10 w-20 animate-sway" />
        <Flower className="absolute bottom-16 right-[8%] w-16" />
        <Flower className="absolute bottom-14 right-[18%] hidden w-12 sm:block" />
        <Grass className="absolute inset-x-0 bottom-0 h-10 w-full opacity-60" />
      </div>

      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <Rainbow className="mx-auto mb-6 w-44" />

          <p className="font-hand text-2xl text-crayon-blue">
            the bit where you say hello
          </p>

          <h2 className="mt-2 font-display text-[clamp(2.5rem,8vw,4.75rem)] leading-[0.95] text-ink">
            {site.contact.heading}
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            {site.contact.body}
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 flex items-center justify-center gap-3">
            <ArrowDoodle
              className="hidden w-16 rotate-[18deg] text-crayon-red sm:block"
              stroke="var(--color-crayon-red)"
            />
            <a
              href={`mailto:${site.email}`}
              className="crayon-box sticker inline-block -rotate-1 break-all bg-crayon-yellow px-8 py-4 font-display text-2xl text-ink transition-transform hover:rotate-1 hover:-translate-y-1 sm:text-3xl"
            >
              {site.email}
            </a>
          </div>

          {site.phone && (
            <p className="mt-5 font-hand text-xl text-ink-soft">
              or ring me:{" "}
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="text-crayon-blue underline decoration-wavy underline-offset-4 hover:text-crayon-red"
              >
                {site.phone}
              </a>
            </p>
          )}
        </Reveal>

        <Reveal delay={220}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            {socials.map((s, i) => (
              <SocialLink key={s.kind} i={i} {...s} />
            ))}
          </div>

          {resume && (
            <a
              href={resume}
              className="crayon-chip sticker-sm mt-10 inline-flex items-center gap-2 bg-paper-2 px-6 py-2.5 font-display text-xl text-ink transition-transform hover:-translate-y-1 hover:rotate-2"
            >
              Download résumé
              <ArrowDoodle className="w-6" stroke="var(--color-ink)" fine />
            </a>
          )}

          <p className="margin-note mx-auto mt-10 inline-flex items-center gap-2">
            <Heart className="w-6" fine /> thanks for scrolling all the way down
          </p>
        </Reveal>
      </div>
    </section>
  );
}
