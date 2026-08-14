import { site } from "@/content/site";
import { Bird } from "./Doodles";

export default function Footer() {
  return (
    <footer className="border-t-[2.5px] border-ink bg-paper-2 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
        <p className="font-hand text-xl text-ink-soft">
          Drawn and built by {site.name}
          {site.location && ` in ${site.location}`}.
        </p>

        <div className="flex items-center gap-3">
          <Bird className="w-10 opacity-60" fine />
          <p className="font-hand text-xl text-muted">
            © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
