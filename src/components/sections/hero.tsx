import Image from "next/image";
import { ArrowRightIcon, DownloadIcon } from "@/components/icons";
import { ProfileGlyph } from "@/components/profile-glyph";
import { btnPrimary, btnSecondary } from "@/components/ui";
import { profiles, site } from "@/data/portfolio";

export default function Hero() {
  return (
    <header className="pt-12 pb-14 sm:pt-20 sm:pb-16">
      <div className="flex items-center gap-4">
        <Image src="/assets/profile.jpeg" alt="Muditya Raghav" width={64} height={64} priority className="h-16 w-16 rounded-full object-cover ring-1 ring-line ring-offset-4 ring-offset-bg" />
        <div>
          <h1 className="text-xl font-semibold tracking-tight">{site.name}</h1>
          <p className="mt-1 text-sm text-fg-muted">Backend developer · Python & Go</p>
        </div>
      </div>
      <p className="hero-headline mt-9 max-w-[43rem] text-[38px] leading-[1.13] font-medium tracking-[-0.045em] sm:text-[56px]">
        Behind every smooth experience,<br className="hidden sm:block" /> there’s a backend <span className="text-accent">that works.</span>
      </p>
      <p className="mt-6 max-w-[36rem] text-base leading-[1.8] text-fg-muted">{site.summary}</p>
      <div className="mt-7 flex flex-wrap items-center gap-3">
        <a href="#projects" className={btnPrimary}>Explore my work <ArrowRightIcon /></a>
        <a href={site.resumeUrl} download className={btnSecondary}><DownloadIcon /> Resume</a>
      </div>
      <p className="mt-6 flex items-center gap-2 text-xs text-fg-muted"><span aria-hidden className="h-1.5 w-1.5 rounded-full bg-positive" />{site.availability}<span aria-hidden>·</span>Available now</p>
      <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm">
        {profiles.map((profile) => (
          <li key={profile.label}><a href={profile.href} {...(profile.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="inline-flex items-center gap-2 text-fg-muted transition-colors hover:text-accent"><ProfileGlyph icon={profile.icon} />{profile.label}</a></li>
        ))}
      </ul>
    </header>
  );
}
