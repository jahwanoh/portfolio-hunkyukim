import type { Project } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Media } from "./media";

// 2 or 4 photos: 2 columns. 3 photos: the first one large, then two below.
export function InstallationViews({ project }: { project: Project }) {
  const views = project.installationViews;
  if (views.length === 0) return null;

  const featureFirst = views.length % 2 === 1;
  const caption = [
    `Installation view, ${project._title}`,
    project.venue,
    project.year,
  ]
    .filter(Boolean)
    .join(", ");

  return (
    <section className="mt-16">
      <h2 className="text-subtitle font-semibold opacity-30 mb-6">
        Installation views
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {views.map((view, index) => (
          <Media
            key={view.url}
            media={view}
            className={cn(
              "w-full h-auto rounded-[6px]",
              featureFirst && index === 0 && "md:col-span-2"
            )}
            sizes={
              featureFirst && index === 0
                ? "100vw"
                : "(min-width: 768px) 50vw, 100vw"
            }
          />
        ))}
      </div>
      <p className="text-xs text-zinc-500 tracking-wide mt-3">
        {caption}.{project.photoCredit && ` ${project.photoCredit}`}
      </p>
    </section>
  );
}
