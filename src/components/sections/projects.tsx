import Image from "next/image";
import { ArrowUpRightIcon, GithubIcon } from "@/components/icons";
import { Section } from "@/components/ui";
import { projects, type Project } from "@/data/portfolio";

function ProjectRow({ project }: { project: Project }) {
  return (
    <article className="grid gap-6 py-10 first:pt-0 last:pb-0 md:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] md:gap-8">
      <div className="min-w-0">
        <h3 className="text-[18px] leading-snug font-semibold tracking-[-0.015em] sm:text-[19px]">
          {project.name}
        </h3>

        <p className="mt-3 text-[15px] leading-[1.7] text-fg-muted">{project.description}</p>

        <p className="mt-4 font-mono text-[12px] leading-relaxed text-fg-faint">
          {project.stack.join("  ·  ")}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-medium text-accent underline-offset-4 hover:underline"
          >
            Live demo
            <ArrowUpRightIcon />
          </a>
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-fg-muted underline-offset-4 transition-colors hover:text-fg hover:underline"
          >
            <GithubIcon />
            Source
          </a>
        </div>
      </div>

      <div className="project-preview relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-line bg-bg-subtle">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(min-width: 768px) 450px, 100vw"
          className="object-cover object-top transition-transform duration-300 hover:scale-[1.03]"
        />
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <Section id="projects" title="Selected projects">
      <p className="mb-8 max-w-[34rem] text-sm leading-7 text-fg-muted">A few things I’ve built to understand how real systems work — from moving money to streaming answers.</p>
      <div className="divide-y divide-line">
        {projects.map((project) => (
          <ProjectRow key={project.name} project={project} />
        ))}
      </div>
    </Section>
  );
}
