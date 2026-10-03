import { ImageMedia } from "@/lib/content";
import Image from "next/image";

interface MediaProps {
  media: ImageMedia;
  alt?: string;
  className?: string;
  sizes?: string;
  quality?: number;
  priority?: boolean;
  fill?: boolean;
}

export function Media({
  media,
  alt,
  className,
  sizes,
  quality = 100,
  priority = false,
  fill = false,
}: MediaProps) {
  return (
    <Image
      src={media.url}
      alt={alt || media.alt}
      width={fill ? undefined : media.width}
      height={fill ? undefined : media.height}
      fill={fill}
      className={className}
      sizes={sizes}
      quality={quality}
      priority={priority}
    />
  );
}
