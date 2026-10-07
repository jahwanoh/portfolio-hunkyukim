import { ImageMedia, Project } from "@/lib/content";
import { Media } from "./media";
import { TransitionTrigger } from "./transition-trigger";

interface FeaturedWorkProps {
  media: ImageMedia;
  project?: Project;
}

export function FeaturedWork({ media, project }: FeaturedWorkProps) {
  const details = [media.year, media.medium, media.dimensions]
    .filter(Boolean)
    .join(", ");

  const content = (
    <>
      <Media
        media={media}
        className="w-full h-auto transition-transform duration-500 ease-quad-out group-hover:scale-[1.025]"
        sizes="100vw"
        priority
      />

      <div className="absolute bottom-2 right-2 left-2 md:left-[unset] md:min-w-[calc(33vw-var(--gap)*2)] rounded-lg bg-muted px-3 md:px-4 py-2 md:py-3">
        <h3 className="font-black text-left text-lg md:text-2xl line-clamp-2 group-hover:text-primary">
          <em>{media.title}</em>
        </h3>
        {details && (
          <p className="text-foreground/30 font-semibold text-sm md:text-base">
            {details}
          </p>
        )}
      </div>
    </>
  );

  const className =
    "group block relative overflow-hidden bg-muted rounded-[6px] w-full";

  // Links to its exhibition when one is chosen in Site Settings
  return project ? (
    <TransitionTrigger
      href={`/projects/${project._slug}`}
      className={`${className} hover:rounded-[18px] transition-[border-radius] duration-300 ease-quad-out cursor-pointer`}
    >
      {content}
    </TransitionTrigger>
  ) : (
    <div className={className}>{content}</div>
  );
}
