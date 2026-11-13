import type { ComponentType, ReactNode } from "react";
import { CodeIcon, GithubIcon, LinkedInIcon, MailIcon } from "@/components/icons";
import type { Profile, ProfileIcon } from "@/data/portfolio";

type Glyph = ComponentType<{ size?: number; className?: string }>;

const icons: Record<ProfileIcon, Glyph> = {
  github: GithubIcon,
  linkedin: LinkedInIcon,
  leetcode: CodeIcon,
  mail: MailIcon,
};

/** Renders the brand glyph for a profile, keyed by the value in `portfolio.ts`. */
export function ProfileGlyph({
  icon,
  size = 16,
  className,
}: {
  icon: Profile["icon"];
  size?: number;
  className?: string;
}): ReactNode {
  const Icon = icons[icon];
  return <Icon size={size} className={className} />;
}
