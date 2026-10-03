import { Project } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Media } from "./media";
import { TransitionTrigger } from "./transition-trigger";

interface ProjectItemProps {
  project: Project;
  className?: string;
}

export function ProjectItem({ project, className }: ProjectItemProps) {
  const cover =
    project.media.find((media) => media.alt === project.cover) ??
    project.media[0];

  const details = [project.year, ...project.category, project.venue].filter(
    Boolean
  );

  return (
    <TransitionTrigger
      href={`/projects/${project._slug}`}
      className={cn(
        "group block break-inside-avoid mb-8 cursor-pointer",
        className
      )}
    >
      <figure>
        {cover ? (
          <div className="overflow-hidden rounded-[6px]">
            <Media
              media={cover}
              alt={project._title}
              className="w-full h-auto transition-transform duration-500 ease-quad-out group-hover:scale-[1.025]"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          </div>
        ) : (
          <div className="aspect-square rounded-[6px] bg-muted flex items-center justify-center">
            <span className="text-muted-foreground">No media</span>
          </div>
        )}
        <figcaption className="text-xs text-zinc-500 tracking-wide mt-3">
          <em className="group-hover:text-foreground transition-colors">
            {project._title}
          </em>
          {details.length > 0 && `, ${details.join(", ")}`}
        </figcaption>
      </figure>
    </TransitionTrigger>
  );
}
