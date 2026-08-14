"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";

const SECTIONS = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
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
          ? "border-b border-line/70 bg-ink/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
      >
        <a
          href="#top"
          className="text-lg font-black tracking-tight text-white"
        >
          {/* Initials mark — small and quiet next to the hero. */}
          RM<span className="text-brand-1">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                aria-current={active === s.id ? "true" : undefined}
                className={`text-sm font-semibold uppercase tracking-widest transition-colors ${
                  active === s.id
                    ? "text-white"
                    : "text-muted hover:text-white"
                }`}
              >
                {s.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="rounded-full bg-gradient-to-r from-brand-1 to-brand-2 px-5 py-2 text-sm font-bold text-white transition-transform hover:scale-105"
            >
              Hire me
            </a>
          </li>
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
            className={`h-0.5 w-6 bg-white transition-transform duration-300 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-opacity duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-transform duration-300 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-line bg-ink-soft px-6 py-4 md:hidden"
      >
        <ul className="flex flex-col gap-1">
          {[...SECTIONS, { id: "contact", label: "Contact" }].map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-base font-semibold text-body hover:bg-surface hover:text-white"
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
                className="block rounded-lg px-3 py-3 text-base font-semibold text-body hover:bg-surface hover:text-white"
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
