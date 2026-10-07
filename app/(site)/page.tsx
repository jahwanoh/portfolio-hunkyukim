import { getFeaturedWork, getInfo, getProjects } from "@/lib/content";
import { SocialLinks } from "@/components/social-links";
import { ProjectItem } from "@/components/project-item";
import { FeaturedWork } from "@/components/featured-work";

export default async function Home() {
  const [info, projects, featuredWork] = await Promise.all([
    getInfo(),
    getProjects(),
    getFeaturedWork(),
  ]);

  return (
    <main className="px-sides mb-24">
      {/* hero section */}
      <div className="pt-24 lg:pt-48 flex flex-col lg:grid grid-cols-12 gap-gap">
        <SocialLinks
          className="max-lg:hidden col-span-5"
          links={info.links}
        />
        <div className="col-span-7">
          <h1 className="text-subtitle font-semibold leading-[1.2] text-pretty">
            {info.heading}
          </h1>
        </div>
      </div>

      {/* showcase section */}
      <section className="pt-24">
        {/* featured work */}
        {featuredWork && (
          <div className="mb-12">
            <FeaturedWork media={featuredWork.media} project={featuredWork.project} />
          </div>
        )}

        {/* exhibitions */}
        {projects.length > 0 && (
          <>
            <h2 className="text-subtitle font-semibold opacity-30 mb-6">
              Exhibitions
            </h2>
            {/* Row-based grid keeps newest → oldest reading left to right */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 items-start">
              {projects.map((project) => (
                <ProjectItem key={project._slug} project={project} />
              ))}
            </div>
          </>
        )}
      </section>
    </main>
  );
}
