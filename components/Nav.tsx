"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { CircleScribble } from "./Doodles";

const SECTIONS = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "me", label: "Me" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  // Solidify the bar once the user leaves the hero.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the link for whichever section is currently on screen.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );

    for (const { id } of SECTIONS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b-[2.5px] border-ink bg-paper/90 backdrop-blur-sm"
          : "border-b-[2.5px] border-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3"
      >
        <a
          href="#top"
          className="font-display text-3xl leading-none text-ink transition-transform hover:-rotate-3"
        >
          {/* Initials, scrawled in the corner of the page like a name on homework. */}
          RM
          <span className="text-crayon-red">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 md:flex">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                aria-current={active === s.id ? "true" : undefined}
                className="relative block font-display text-xl text-ink transition-transform hover:-translate-y-0.5"
              >
                {s.label}
                {/* The active link gets circled, the way you circle the one
                    that matters on a printout. */}
                {active === s.id && (
                  <CircleScribble
                    className="pointer-events-none absolute -inset-x-3 -inset-y-2 h-[calc(100%+1rem)] w-[calc(100%+1.5rem)]"
                    stroke="var(--color-crayon-red)"
                    fine
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-[3px] w-6 rounded-full bg-ink transition-transform duration-300 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-[3px] w-6 rounded-full bg-ink transition-opacity duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[3px] w-6 rounded-full bg-ink transition-transform duration-300 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t-[2.5px] border-ink bg-paper-2 px-6 py-4 md:hidden"
      >
        <ul className="flex flex-col gap-1">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className="block px-3 py-3 font-display text-2xl text-ink hover:text-crayon-red"
              >
                {s.label}
              </a>
            </li>
          ))}
          {site.links.resume && (
            <li>
              <a
                href={site.links.resume}
                onClick={() => setOpen(false)}
                className="block px-3 py-3 font-display text-2xl text-ink hover:text-crayon-red"
              >
                Résumé
              </a>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
}
