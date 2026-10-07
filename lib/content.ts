// Site content is managed in Sanity (edit it at /studio).
// These helpers fetch it and shape it for the components.

import { client } from "@/sanity/lib/client";
import {
  cvQuery,
  exhibitionsQuery,
  featuredWorkQuery,
  settingsQuery,
} from "@/sanity/lib/queries";

// Seconds before a page re-checks Sanity for changes
const REVALIDATE = 60;

export type ImageMedia = {
  url: string;
  width: number;
  height: number;
  alt: string;
  lqip?: string;
  // Artwork metadata (omitted for non-artwork images like the profile photo)
  title?: string;
  year?: string;
  medium?: string;
  dimensions?: string;
};

export type Link = {
  _title: string;
  link: string;
};

export type Project = {
  _title: string;
  _slug: string;
  description: string[];
  year: string;
  venue: string;
  category: string[];
  // Thumbnail on the home page (defaults to the first work)
  cover?: ImageMedia;
  media: ImageMedia[];
  installationViews: ImageMedia[];
  photoCredit?: string;
};

export type AboutSection = {
  title: string;
  items: { text: string; href?: string }[];
};

export type Info = {
  title: string;
  subtitle: string;
  heading: string;
  links: Link[];
  email?: string;
  phone?: string;
  address?: string;
};

type RawImage = {
  url: string;
  width: number;
  height: number;
  lqip?: string | null;
} | null;

type ArtworkFields = NonNullable<RawImage> & {
  title?: string | null;
  year?: string | null;
  medium?: string | null;
  dimensions?: string | null;
};

type RawArtwork = ArtworkFields & {
  _key: string;
  cover?: boolean | null;
};

type RawExhibition = {
  title: string;
  slug: string;
  year?: string | null;
  venue?: string | null;
  category?: string[] | null;
  description?: string | null;
  artworks?: RawArtwork[] | null;
  installationViews?: NonNullable<RawImage>[] | null;
  photoCredit?: string | null;
};

type RawSection = {
  title: string;
  items?: { text: string; url?: string | null }[] | null;
};

const fetchSanity = <T>(query: string) =>
  client.fetch<T>(query, {}, { next: { revalidate: REVALIDATE } });

const toArtwork = (artwork: ArtworkFields): ImageMedia => ({
  url: artwork.url,
  width: artwork.width,
  height: artwork.height,
  alt: artwork.title ?? "",
  lqip: artwork.lqip ?? undefined,
  title: artwork.title ?? undefined,
  year: artwork.year ?? undefined,
  medium: artwork.medium ?? undefined,
  dimensions: artwork.dimensions ?? undefined,
});

const toSection = (section: RawSection): AboutSection => ({
  title: section.title,
  items: (section.items ?? []).map((item) => ({
    text: item.text,
    href: item.url ?? undefined,
  })),
});

const toParagraphs = (text?: string | null) =>
  (text ?? "")
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

const toProject = (exhibition: RawExhibition): Project => {
  const artworks = exhibition.artworks ?? [];
  const cover = artworks.find((artwork) => artwork.cover) ?? artworks[0];

  return {
    _title: exhibition.title,
    _slug: exhibition.slug,
    year: exhibition.year ?? "",
    venue: exhibition.venue ?? "",
    category: exhibition.category ?? [],
    description: toParagraphs(exhibition.description),
    cover: cover ? toArtwork(cover) : undefined,
    media: artworks.map(toArtwork),
    installationViews: (exhibition.installationViews ?? []).map((view) => ({
      ...toArtwork(view),
      alt: `Installation view, ${exhibition.title}`,
    })),
    photoCredit: exhibition.photoCredit ?? undefined,
  };
};

export async function getInfo(): Promise<Info> {
  const settings = await fetchSanity<{
    title?: string | null;
    subtitle?: string | null;
    heading?: string | null;
    links?: { label: string; url: string }[] | null;
    email?: string | null;
    phone?: string | null;
    address?: string | null;
  } | null>(settingsQuery);

  return {
    title: settings?.title ?? "",
    subtitle: settings?.subtitle ?? "",
    heading: settings?.heading ?? "",
    links: (settings?.links ?? []).map((link) => ({
      _title: link.label,
      link: link.url,
    })),
    email: settings?.email ?? undefined,
    phone: settings?.phone ?? undefined,
    address: settings?.address ?? undefined,
  };
}

export async function getProjects(): Promise<Project[]> {
  const exhibitions = await fetchSanity<RawExhibition[]>(exhibitionsQuery);
  return exhibitions.map(toProject);
}

// "Home featured work" from Site Settings; hidden on the home page when empty
export async function getFeaturedWork(): Promise<
  { media: ImageMedia; project?: Project } | undefined
> {
  const featured = await fetchSanity<
    (ArtworkFields & { exhibition?: RawExhibition | null }) | null
  >(featuredWorkQuery);

  if (!featured?.url) return undefined;

  return {
    media: toArtwork(featured),
    project: featured.exhibition ? toProject(featured.exhibition) : undefined,
  };
}

async function getCV() {
  return fetchSanity<{
    photo?: RawImage;
    aboutSections?: RawSection[] | null;
    exhibitionSections?: RawSection[] | null;
    press?: { text: string; url?: string | null }[] | null;
  } | null>(cvQuery);
}

export async function getAbout(): Promise<{
  photo?: ImageMedia;
  sections: AboutSection[];
}> {
  const [cv, info] = await Promise.all([getCV(), getInfo()]);
  const photo = cv?.photo?.url ? cv.photo : undefined;

  const sections = (cv?.aboutSections ?? []).map(toSection);
  if (cv?.press?.length) {
    sections.push(toSection({ title: "Press", items: cv.press }));
  }

  return {
    photo: photo
      ? {
          url: photo.url,
          width: photo.width,
          height: photo.height,
          alt: info.title,
          lqip: photo.lqip ?? undefined,
        }
      : undefined,
    sections,
  };
}

export async function getExhibitionHistory(): Promise<AboutSection[]> {
  const cv = await getCV();
  return (cv?.exhibitionSections ?? []).map(toSection);
}
