import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <a
          href="#top"
          className="font-semibold transition-colors hover:text-white"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
