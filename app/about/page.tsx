import { Media } from "@/components/media";
import { InfoSection } from "@/components/info-section";
import { about, press } from "@/lib/content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <main className="px-sides my-24 min-h-fold">
      <h1 className="lg:hidden text-heading font-black uppercase text-balance mb-6">
        About
      </h1>
      <div className="flex flex-col lg:grid grid-cols-12 gap-gap">
        <div className="col-span-5">
          <Media
            media={about.photo}
            className="w-full h-auto rounded"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            priority
          />
        </div>
        <div className="col-span-7 flex flex-col py-2">
          <h1 className="sr-only">About</h1>
          <div className="flex flex-col divide-y divide-border">
            {[...about.sections, press].map((section) => (
              <InfoSection key={section.title} section={section} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
