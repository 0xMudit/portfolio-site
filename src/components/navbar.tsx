import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from "@/components/icons";
import { btnPrimary, container, iconButton } from "@/components/ui";
import { navLinks, site } from "@/data/portfolio";

/**
 * Server-rendered header. Both interactions are native: the mobile menu is a
 * `<details>` disclosure and the theme toggle just flips the `.dark` class —
 * the ~20 lines of behavior live in the inline bootstrap script in layout.tsx.
 * No React is hydrated for the header.
 */
export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur-md">
      <div className={`${container} flex h-14 items-center justify-between gap-2 sm:gap-4`}>
        <a
          href="#top"
          className="text-[15px] font-semibold tracking-tight text-fg"
          aria-label="Muditya Raghav, back to top"
        >
          <span className="font-mono text-sm">mr<span className="text-accent">.</span></span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-fg-muted transition-colors hover:text-fg"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <a
            href={site.phoneHref}
            aria-label={`Call Muditya Raghav at ${site.phone}`}
            className="inline-flex min-h-10 items-center whitespace-nowrap rounded-full border border-accent/25 bg-accent-soft px-3 text-[13px] font-semibold tabular-nums text-accent transition-colors hover:border-accent sm:text-sm"
          >
            {site.phone}
          </a>
          <button
            type="button"
            data-theme-toggle
            aria-label="Toggle dark mode"
            title="Toggle dark mode"
            className={`${iconButton} cursor-pointer`}
          >
            <span className="relative flex h-[17px] w-[17px] items-center justify-center">
              <SunIcon className="absolute scale-100 rotate-0 transition-transform duration-200 dark:scale-0 dark:rotate-90" />
              <MoonIcon className="absolute scale-0 rotate-90 transition-transform duration-200 dark:scale-100 dark:rotate-0" />
            </span>
          </button>

          <a
            href={site.resumeUrl}
            download
            className={`${btnPrimary} ml-1 hidden h-9 px-3 text-[13px] lg:inline-flex`}
          >
            Resume
          </a>

          <details data-menu className="md:hidden">
            <summary className={`${iconButton} cursor-pointer`} aria-label="Menu">
              <MenuIcon size={19} className="menu-open" />
              <CloseIcon size={19} className="menu-close" />
            </summary>

            <div className="absolute inset-x-0 top-full border-t border-line bg-bg">
              <nav aria-label="Mobile" className={`${container} flex flex-col py-3`}>
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="rounded-md px-2 py-2.5 text-sm text-fg-muted transition-colors hover:bg-bg-subtle hover:text-fg"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href={site.resumeUrl}
                  download
                  className={`${btnPrimary} mt-2 lg:hidden`}
                >
                  Download resume
                </a>
              </nav>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
