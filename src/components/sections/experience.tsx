import { Section } from "@/components/ui";
import { education, experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <p className="mb-8 text-sm leading-7 text-fg-muted">My background in QA taught me to think about what can break. I bring that mindset to everything I build.</p>
      <ol className="space-y-10">
        {experience.map((job) => (
          <li key={`${job.company}-${job.period}`} className="grid gap-2 sm:grid-cols-[10rem_1fr] sm:gap-x-8">
            <p className="font-mono text-[12px] leading-6 text-fg-faint">{job.period}</p>

            <div className="min-w-0">
              <h3 className="text-[16px] font-semibold tracking-[-0.01em]">{job.role}</h3>
              <p className="mt-0.5 text-sm text-fg-muted">{job.company}</p>

              <ul className="mt-3 space-y-1.5 text-[15px] leading-[1.65] text-fg-muted">
                {job.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2.5">
                    <span aria-hidden className="mt-[0.65em] h-1 w-1 shrink-0 rounded-full bg-line-strong" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-10 border-t border-line pt-6">
        <p className="text-sm leading-[1.7] text-fg-muted">
          <span className="font-medium text-fg">{education.degree}</span>
          {" — "}
          {education.school}
          <span className="text-fg-faint"> · {education.detail}</span>
        </p>
      </div>
    </Section>
  );
}
