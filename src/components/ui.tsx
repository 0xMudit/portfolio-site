import type { ReactNode } from "react";

/* Shared page shell: one content width for the header, main, and footer. */
export const container = "mx-auto w-full max-w-[90rem] px-4 sm:px-6 lg:px-8";

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium whitespace-nowrap transition-colors";

export const btnPrimary = `${buttonBase} bg-accent-solid text-white hover:bg-accent-solid-hover`;

export const btnSecondary = `${buttonBase} border border-line-strong bg-bg text-fg hover:border-fg-faint hover:bg-bg-subtle`;

export const iconButton =
  "inline-flex h-10 w-10 items-center justify-center rounded-md text-fg-muted transition-colors hover:bg-bg-subtle hover:text-fg";

/* ---------------------------------------------------------------- section -- */

export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="scroll-mt-20 border-t border-line py-12 sm:py-16"
    >
      <div className="mb-7 flex items-center gap-4 sm:mb-8">
        <h2
          id={`${id}-title`}
          className="text-[12px] font-semibold tracking-[0.16em] text-fg-muted uppercase"
        >
          {title}
        </h2>
        <span aria-hidden className="h-px flex-1 bg-line" />
      </div>
      {children}
    </section>
  );
}
