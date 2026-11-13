import Image from "next/image";
import { ArrowRightIcon, DownloadIcon } from "@/components/icons";
import { ProfileGlyph } from "@/components/profile-glyph";
import { btnPrimary, btnSecondary } from "@/components/ui";
import { highlights, profiles, site } from "@/data/portfolio";

export default function Hero() {
  return (
    <header className="pt-10 pb-12 sm:pt-14 sm:pb-14">
      <div className="flex items-center gap-4">
        <Image src="/assets/profile.jpeg" alt="Muditya Raghav" width={64} height={64} priority className="h-16 w-16 rounded-full object-cover ring-1 ring-line ring-offset-4 ring-offset-bg" />
        <div>
          <h1 className="text-xl font-semibold tracking-tight">{site.name}</h1>
          <p className="mt-1 text-sm text-fg-muted">Backend Developer · Python · Go · FastAPI</p>
        </div>
      </div>
      <p className="hero-headline mt-7 max-w-[43rem] text-[36px] leading-[1.13] font-medium tracking-[-0.045em] sm:text-[52px]">
        Backend engineering.<br /><span className="text-accent">Built with a testing mindset.</span>
      </p>
      <p className="mt-5 max-w-[39rem] text-base leading-[1.8] text-fg-muted">{site.summary}</p>
      <div className="mt-7 flex flex-wrap items-center gap-3">
        <a href={site.resumeUrl} download className={btnPrimary}><DownloadIcon /> Download resume</a>
        <a href="#projects" className={btnSecondary}>See engineering work <ArrowRightIcon /></a>
      </div>
      <p className="mt-6 flex items-center gap-2 text-xs text-fg-muted"><span aria-hidden className="h-1.5 w-1.5 rounded-full bg-positive" />{site.availability}<span aria-hidden>·</span>Available now</p>
      <dl className="mt-8 grid grid-cols-3 gap-3 border-y border-line py-5">{highlights.map((item) => <div key={item.label}><dt className="text-[18px] font-semibold tracking-tight sm:text-2xl">{item.value}</dt><dd className="mt-1 text-[11px] leading-5 text-fg-muted sm:text-xs">{item.label}</dd></div>)}</dl>
      <p className="mt-4 font-mono text-[11px] leading-6 text-fg-faint sm:text-xs">Python · Go · FastAPI · PostgreSQL · Redis · Docker</p>
      <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm">
        {profiles.map((profile) => (
          <li key={profile.label}><a href={profile.href} {...(profile.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="inline-flex items-center gap-2 text-fg-muted transition-colors hover:text-accent"><ProfileGlyph icon={profile.icon} />{profile.label}</a></li>
        ))}
      </ul>
    </header>
  );
}
