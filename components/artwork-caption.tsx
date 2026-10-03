import type { ImageMedia } from "@/lib/content";
import { cn } from "@/lib/utils";

// Title in italics, then Year, Medium, Dimensions
export function ArtworkCaption({
  media,
  className,
}: {
  media: ImageMedia;
  className?: string;
}) {
  if (!media.title) return null;

  const details = [media.year, media.medium, media.dimensions].filter(Boolean);

  return (
    <figcaption className={cn("text-xs text-zinc-500 tracking-wide mt-3", className)}>
      <em>{media.title}</em>
      {details.length > 0 && `, ${details.join(", ")}`}
    </figcaption>
  );
}
