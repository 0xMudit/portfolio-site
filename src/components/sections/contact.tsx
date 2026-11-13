import { ArrowUpRightIcon, DownloadIcon } from "@/components/icons";
import { ProfileGlyph } from "@/components/profile-glyph";
import { btnSecondary, Section } from "@/components/ui";
import { profiles, site } from "@/data/portfolio";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <h3 className="max-w-[34rem] text-[24px] leading-tight font-semibold tracking-[-0.02em] sm:text-[28px]">
        Have a backend role in mind?
      </h3>

      <p className="mt-3 max-w-[36rem] text-[15px] leading-[1.7] text-fg-muted sm:text-base">
        I’d love to hear what your team is building. Send me a note — I’m available to join immediately.
      </p>

      <a href={`mailto:${site.email}`} className="mt-6 inline-flex items-center gap-2 text-lg font-medium text-accent underline-offset-4 hover:underline">{site.email}<ArrowUpRightIcon /></a>
      <ul className="mt-8 divide-y divide-line border-y border-line">
        {profiles.map((profile) => {
          const external = profile.href.startsWith("http");
          return (
            <li key={profile.label}>
              <a
                href={profile.href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-3.5"
              >
                <span className="flex items-center gap-3">
                  <ProfileGlyph
                    icon={profile.icon}
                    className="text-fg-faint transition-colors group-hover:text-fg"
                  />
                  <span className="text-sm font-medium text-fg">{profile.label}</span>
                </span>
                <span className="flex items-center gap-2 text-[13px] text-fg-faint transition-colors group-hover:text-fg-muted">
                  {profile.handle}
                  <ArrowUpRightIcon className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </a>
            </li>
          );
        })}
      </ul>

      <a href={site.resumeUrl} download className={`${btnSecondary} mt-6`}>
        <DownloadIcon />
        Download resume (PDF)
      </a>
    </Section>
  );
}
