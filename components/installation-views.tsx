import type { ImageMedia, Project } from "@/lib/content";
import { Media } from "./media";

const SIZES = "(min-width: 768px) 50vw, 100vw";

// With an odd number of photos the first one sits next to the description,
// so every photo keeps the same half-width size (they're too low-res to enlarge).
export function splitInstallationViews(project: Project) {
  const views = project.installationViews;
  return views.length % 2 === 1
    ? { beside: views[0], grid: views.slice(1) }
    : { beside: undefined, grid: views };
}

export function InstallationView({ view }: { view: ImageMedia }) {
  return (
    <Media media={view} className="w-full h-auto rounded-[6px]" sizes={SIZES} />
  );
}

export function InstallationCaption({ project }: { project: Project }) {
  const caption = [
    `Installation view, ${project._title}`,
    project.venue,
    project.year,
  ]
    .filter(Boolean)
    .join(", ");

  return (
    <p className="text-xs text-zinc-500 tracking-wide mt-3">
      {caption}.{project.photoCredit && ` ${project.photoCredit}`}
    </p>
  );
}

export function InstallationGrid({ views }: { views: ImageMedia[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {views.map((view) => (
        <InstallationView key={view.url} view={view} />
      ))}
    </div>
  );
}
