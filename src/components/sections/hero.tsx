import { ArrowRightIcon, DownloadIcon } from "@/components/icons";
import { ProfileGlyph } from "@/components/profile-glyph";
import { btnPrimary, btnSecondary } from "@/components/ui";
import { profiles, site } from "@/data/portfolio";

export default function Hero() {
  return (
    <header className="pt-14 pb-14 sm:pt-20 sm:pb-20">
      <p className="font-mono text-[12px] tracking-[0.14em] text-accent uppercase">
        {site.identity}
      </p>

      <h1 className="mt-3 text-[34px] leading-[1.08] font-semibold tracking-[-0.03em] sm:text-[46px]">
        {site.name}
      </h1>

      <p className="mt-5 max-w-[46rem] text-[21px] leading-[1.35] font-medium tracking-[-0.02em] text-fg sm:text-[26px]">
        {site.headline}
      </p>

      <p className="mt-4 max-w-[40rem] text-[15px] leading-[1.7] text-fg-muted sm:text-base">
        {site.summary}
      </p>

      <p className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] text-fg-muted sm:text-sm">
        <span aria-hidden className="mr-0.5 inline-block h-1.5 w-1.5 rounded-full bg-positive" />
        <span className="text-fg">{site.availability}</span>
        <span aria-hidden className="text-line-strong">
          /
        </span>
        <span>{site.startDate}</span>
      </p>

      <div className="mt-7 flex flex-wrap items-center gap-3">
        <a href="#projects" className={btnPrimary}>
          View projects
          <ArrowRightIcon />
        </a>
        <a href={site.resumeUrl} download className={btnSecondary}>
          <DownloadIcon />
          Download resume
        </a>
      </div>

      <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
        {profiles.map((profile) => {
          const external = profile.href.startsWith("http");
          return (
            <li key={profile.label}>
              <a
                href={profile.href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="inline-flex items-center gap-2 text-fg-muted transition-colors hover:text-fg"
              >
                <ProfileGlyph icon={profile.icon} className="text-fg-faint" />
                {profile.label}
              </a>
            </li>
          );
        })}
      </ul>
    </header>
  );
}
