import type { AboutSection } from "@/lib/content";
import { InfoSection } from "./info-section";

export const InfoPage = ({
  title,
  sections,
}: {
  title: string;
  sections: AboutSection[];
}) => {
  return (
    <main className="px-sides my-24 min-h-fold">
      <div className="flex flex-col lg:grid grid-cols-12 gap-gap">
        <h1 className="col-span-5 text-heading font-black uppercase text-balance mb-6">
          {title}
        </h1>
        <div className="col-span-7 flex flex-col py-2 divide-y divide-border">
          {sections.map((section) => (
            <InfoSection key={section.title} section={section} />
          ))}
        </div>
      </div>
    </main>
  );
};
