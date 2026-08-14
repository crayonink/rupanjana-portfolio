"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";

export default function Hero() {
  const words = site.rotatingWords;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (words.length < 2) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 2600);
    return () => clearInterval(id);
  }, [words.length]);

  return (
    <section
      id="top"
      className="relative flex min-h-svh items-center overflow-hidden px-6 pt-28 pb-20"
    >
      {/* Animated colour blobs. Decorative only, so hidden from screen readers. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 -top-32 h-[34rem] w-[34rem] rounded-full bg-brand-1/25 blur-[110px] animate-blob" />
        <div
          className="absolute -right-40 top-10 h-[38rem] w-[38rem] rounded-full bg-brand-2/25 blur-[120px] animate-blob"
          style={{ animationDelay: "-6s" }}
        />
        <div
          className="absolute bottom-[-12rem] left-1/3 h-[30rem] w-[30rem] rounded-full bg-brand-3/15 blur-[120px] animate-blob"
          style={{ animationDelay: "-12s" }}
        />
      </div>

      <div className="mx-auto w-full max-w-6xl">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-3 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-3" />
          </span>
          Available for work
        </p>

        <h1 className="text-[clamp(2.75rem,10vw,7rem)] font-black leading-[0.92] tracking-tighter text-white">
          {site.name.split(" ")[0]}
          <br />
          <span className="text-gradient">{site.name.split(" ").slice(1).join(" ")}</span>
        </h1>

        <p className="mt-8 max-w-2xl text-xl font-semibold text-white sm:text-2xl">
          {site.role} —{" "}
          <span className="relative inline-block align-bottom">
            {/* key forces a remount so the fade replays on every word change */}
            <span key={index} className="text-gradient animate-[fadeUp_.5s_ease]">
              {words[index]}
            </span>
          </span>
        </p>

        <p className="mt-5 max-w-xl text-base leading-relaxed text-body sm:text-lg">
          {site.intro}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="rounded-full bg-gradient-to-r from-brand-1 to-brand-2 px-8 py-4 text-base font-bold text-white shadow-lg shadow-brand-1/20 transition-transform hover:scale-105"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-line bg-surface/60 px-8 py-4 text-base font-bold text-white transition-colors hover:border-brand-2 hover:bg-surface"
          >
            Get in touch
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(0.4em); }
          to   { opacity: 1; transform: none; }
        }
      `}</style>
    </section>
  );
}
