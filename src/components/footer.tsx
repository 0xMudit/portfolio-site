import { ArrowUpIcon } from "@/components/icons";
import { container } from "@/components/ui";
import { site } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div
        className={`${container} flex flex-col gap-3 py-8 text-[13px] text-fg-faint sm:flex-row sm:items-center sm:justify-between`}
      >
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p className="flex items-center gap-4">
          <span>Built with Next.js and Tailwind CSS</span>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 text-fg-muted transition-colors hover:text-fg"
          >
            Back to top
            <ArrowUpIcon />
          </a>
        </p>
      </div>
    </footer>
  );
}
