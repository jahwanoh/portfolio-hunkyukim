import { Project } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Media } from "./media";
import { TransitionTrigger } from "./transition-trigger";

interface ProjectItemProps {
  project: Project;
  className?: string;
}

export function ProjectItem({ project, className }: ProjectItemProps) {
  const cover = project.cover;


  return (
    <TransitionTrigger
      href={`/projects/${project._slug}`}
      className={cn(
        "group block text-left cursor-pointer",
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
        {/* Exhibition title, then year and gallery */}
        <figcaption className="mt-4">
          <h3 className="text-lg md:text-xl font-black leading-tight text-balance group-hover:opacity-60 transition-opacity">
            {project._title}
          </h3>
          <p className="mt-1 text-sm md:text-base font-semibold">
            <span>{project.year}</span>
            {project.venue && (
              <span className="opacity-50"> · {project.venue}</span>
            )}
          </p>
          {project.category.length > 0 && (
            <p className="mt-1 text-xs text-zinc-500 tracking-wide">
              {project.category.join(", ")}
            </p>
          )}
        </figcaption>
      </figure>
    </TransitionTrigger>
  );
}
