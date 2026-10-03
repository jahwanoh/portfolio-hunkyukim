import { Project, projects } from "@/lib/content";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Media } from "@/components/media";
import { NavigationButton } from "@/components/navigation-button";
import { ArtworkCaption } from "@/components/artwork-caption";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project._slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const match = projects.find((project) => project._slug === slug);

  if (!match) {
    return {
      title: "Not found",
      description: "Project not found",
    };
  }

  const cover = match.media[0];

  return {
    title: match._title,
    description: match.description[0],
    openGraph: cover
      ? {
          images: [{ url: cover.url, width: cover.width, height: cover.height }],
        }
      : undefined,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const currentProjectIndex = projects.findIndex(
    (project) => project._slug === slug
  );
  const project = projects[currentProjectIndex];

  if (!project) {
    return notFound();
  }

  const prevProjectSlug = projects[currentProjectIndex - 1]?._slug;
  const nextProjectSlug = projects[currentProjectIndex + 1]?._slug;

  return (
    <main className="px-sides my-24">
      <h1 className="text-heading font-black text-balance mb-12">
        {project._title}
      </h1>

      <div className="flex flex-col md:grid grid-cols-12 gap-6 md:gap-gap">
        <div className="col-span-5">
          <ProjectAttributes project={project} />
        </div>
        <div className="col-span-6 text-base leading-[1.2] font-semibold text-pretty space-y-4">
          {project.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      {/* Masonry gallery: artworks keep their original proportions */}
      {project.media.length > 0 && (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 mt-16">
          {project.media.map((mediaItem) => (
            <figure key={mediaItem.url} className="break-inside-avoid mb-8">
              <Media
                media={mediaItem}
                className="w-full h-auto rounded-[6px]"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
              <ArtworkCaption media={mediaItem} />
            </figure>
          ))}
        </div>
      )}

      <div className="flex justify-between gap-gap mt-6 md:mt-12">
        <NavigationButton
          href={prevProjectSlug ? `/projects/${prevProjectSlug}` : undefined}
          variant="left"
        >
          Previous
        </NavigationButton>
        <NavigationButton href="/">Back</NavigationButton>
        <NavigationButton
          href={nextProjectSlug ? `/projects/${nextProjectSlug}` : undefined}
          variant="right"
        >
          Next
        </NavigationButton>
      </div>
    </main>
  );
}

const ProjectAttributes = ({ project }: { project: Project }) => {
  const { year, venue, category } = project;

  return (
    <div className="grid grid-cols-6 gap-x-gap space-y-4 text-base leading-[1.2] font-semibold">
      <div className="contents">
        <p className="opacity-30">Year</p>
        <p className="col-span-5">{year}</p>
      </div>

      {venue && (
        <div className="contents">
          <p className="opacity-30">Venue</p>
          <p className="col-span-5">{venue}</p>
        </div>
      )}

      {category && category.length > 0 && (
        <div className="contents">
          <p className="opacity-30">Type</p>
          <p className="col-span-5">{category.join(", ")}</p>
        </div>
      )}
    </div>
  );
};
