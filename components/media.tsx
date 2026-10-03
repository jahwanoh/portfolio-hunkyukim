"use client";

import type { ImageMedia } from "@/lib/content";
import Image, { type ImageLoader } from "next/image";

// Sanity's image CDN resizes on the fly, so request only the width needed
const sanityLoader: ImageLoader = ({ src, width, quality }) =>
  `${src}?w=${width}&q=${quality ?? 80}&fit=max&auto=format`;

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
  quality = 85,
  priority = false,
  fill = false,
}: MediaProps) {
  const isSanity = media.url.startsWith("https://cdn.sanity.io/");

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
      loader={isSanity ? sanityLoader : undefined}
      unoptimized={!isSanity}
      placeholder={media.lqip ? "blur" : "empty"}
      blurDataURL={media.lqip}
    />
  );
}
