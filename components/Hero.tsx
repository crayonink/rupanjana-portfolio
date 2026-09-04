"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";
import {
  SceneDrawing,
  Sun,
  Cloud,
  Bird,
  Star,
  Kite,
  Butterfly,
  Flower,
  Balloon,
  Heart,
  Snail,
  ArrowDoodle,
} from "./Doodles";

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

  const [first, ...rest] = site.name.split(" ");

  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pt-32 pb-20 sm:pt-36"
    >
      {/* Doodles loose in the margins. Decorative, so hidden from screen readers. */}
      {/* The sky. Everything here is decorative, kept clear of the text column
          and the drawing card, and hidden from screen readers. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {/* --- top band, above the headline --- */}
        <Sun className="absolute -left-6 top-20 w-24 animate-sway sm:w-32" />
        <Cloud className="absolute right-[6%] top-16 w-32 opacity-80 sm:w-44" />
        <Cloud className="absolute left-[36%] top-6 hidden w-28 opacity-60 lg:block" />
        <Cloud className="absolute left-[13%] top-4 hidden w-20 opacity-45 xl:block" />
        <Kite
          className="absolute left-[21%] top-2 hidden w-14 animate-sway lg:block"
          style={{ animationDelay: "-3s" }}
        />
        <Bird className="absolute right-[26%] top-40 w-16 animate-float" />
        <Bird
          className="absolute right-[34%] top-52 w-12 animate-float"
          style={{ animationDelay: "-2.5s" }}
        />
        <Bird
          className="absolute left-[20%] top-32 hidden w-10 animate-float opacity-70 lg:block"
          style={{ animationDelay: "-4.5s" }}
        />
        <Star className="absolute right-[18%] top-8 hidden w-8 animate-wiggle opacity-80 lg:block" />

        {/* --- left margin, running alongside the name --- */}
        <Balloon
          className="absolute left-[1%] top-[42%] hidden w-12 animate-float opacity-70 xl:block"
          style={{ animationDelay: "-1.5s" }}
        />
        <Heart className="absolute left-[2%] top-[64%] hidden w-8 animate-wiggle opacity-60 xl:block" />

        {/* --- bottom, under the buttons --- */}
        <Star className="absolute bottom-10 left-[38%] hidden w-12 animate-wiggle lg:block" />
        <Butterfly
          className="absolute bottom-16 left-[44%] hidden w-14 animate-float opacity-80 lg:block"
          style={{ animationDelay: "-3.5s" }}
        />
        <Flower className="absolute bottom-4 left-[46%] hidden w-10 opacity-70 lg:block" />
        <Flower className="absolute bottom-2 left-[52%] hidden w-8 opacity-55 xl:block" />
        <Snail className="absolute bottom-3 left-[2%] hidden w-16 opacity-70 lg:block" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
        {/* ---------------- Left: the words ---------------- */}
        <div>
          <h1 className="font-display text-[clamp(3.25rem,11vw,7rem)] leading-[0.88] text-ink">
            {first}
            <br />
            <span className="marker" style={{ ["--marker-color" as string]: "var(--color-crayon-yellow)" }}>
              {rest.join(" ")}
            </span>
          </h1>

          <p className="mt-8 max-w-2xl font-display text-2xl leading-tight text-ink sm:text-3xl">
            {site.role} who builds{" "}
            <span className="relative inline-block align-bottom">
              {/* key forces a remount so the fade replays on every word change */}
              <span
                key={index}
                className="marker animate-[fadeUp_.5s_ease] text-crayon-plum"
                style={{ ["--marker-color" as string]: "var(--color-crayon-sky)" }}
              >
                {words[index]}
              </span>
            </span>
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
            {site.intro}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="crayon-box sticker inline-flex items-center gap-2 bg-crayon-yellow px-8 py-3.5 font-display text-xl text-ink transition-transform hover:-translate-y-1 hover:rotate-1"
            >
              See my work
              <ArrowDoodle className="w-7" stroke="var(--color-ink)" fine />
            </a>
            <a
              href="#contact"
              className="crayon-box-alt sticker-sm inline-block bg-paper px-8 py-3.5 font-display text-xl text-ink transition-transform hover:-translate-y-1 hover:-rotate-1"
            >
              Say hello
            </a>
          </div>

          <p className="margin-note mt-8 max-w-xs">
            (the drawings are the best part, keep scrolling)
          </p>
        </div>

        {/* ---------------- Right: the drawing ---------------- */}
        <div className="relative">
          <div className="taped sticker crayon-box rotate-2 bg-paper-2 p-4 transition-transform duration-500 hover:rotate-0">
            <SceneDrawing className="aspect-[4/3] w-full" />
          </div>
          <p className="margin-note mt-6 text-center">
            a house, some birds, a very large sun
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(0.4em) rotate(-2deg); }
          to   { opacity: 1; transform: none; }
        }
      `}</style>
    </section>
  );
}
