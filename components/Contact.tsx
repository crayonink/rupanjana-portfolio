import { site } from "@/content/site";
import Reveal from "./Reveal";

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
};

function SocialLink({
  kind,
  href,
  label,
}: {
  kind: string;
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={label}
      title={label}
      className="group flex h-14 w-14 items-center justify-center rounded-2xl border border-line bg-surface text-muted transition-all hover:-translate-y-1 hover:border-brand-2 hover:text-white"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        {ICONS[kind]}
      </svg>
    </a>
  );
}

export default function Contact() {
  const { github, linkedin, twitter, resume } = site.links;

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-28 sm:py-36">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-1/15 blur-[130px] animate-blob" />
        <div
          className="absolute left-1/3 top-1/2 h-[30rem] w-[30rem] -translate-y-1/2 rounded-full bg-brand-2/15 blur-[130px] animate-blob"
          style={{ animationDelay: "-9s" }}
        />
      </div>

      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-brand-1">
            Contact
          </p>
          <h2 className="text-[clamp(2.25rem,8vw,4.5rem)] font-black leading-[1.05] tracking-tighter text-white">
            {site.contact.heading}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-body">
            {site.contact.body}
          </p>
        </Reveal>

        <Reveal delay={120}>
          <a
            href={`mailto:${site.email}`}
            className="mt-10 inline-block break-all rounded-full bg-gradient-to-r from-brand-1 via-brand-2 to-brand-3 px-9 py-5 text-lg font-black tracking-tight text-white shadow-xl shadow-brand-1/25 transition-transform hover:scale-105 sm:text-xl"
          >
            {site.email}
          </a>
        </Reveal>

        <Reveal delay={220}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            {github && <SocialLink kind="github" href={github} label="GitHub" />}
            {linkedin && (
              <SocialLink kind="linkedin" href={linkedin} label="LinkedIn" />
            )}
            {twitter && (
              <SocialLink kind="twitter" href={twitter} label="X (Twitter)" />
            )}
            <SocialLink
              kind="email"
              href={`mailto:${site.email}`}
              label="Email"
            />
          </div>

          {resume && (
            <a
              href={resume}
              className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-muted underline-offset-4 hover:text-white hover:underline"
            >
              Download résumé
            </a>
          )}
        </Reveal>
      </div>
    </section>
  );
}
