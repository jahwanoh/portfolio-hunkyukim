import type { AboutSection } from "@/lib/content";
import { TransitionTrigger } from "./transition-trigger";

export const InfoSection = ({ section }: { section: AboutSection }) => {
  return (
    // Mobile: title above content. Desktop: title left, content right.
    <div className="flex flex-col gap-2 lg:grid lg:grid-cols-7 lg:gap-gap py-4 lg:py-3 first:pt-0 last:pb-0">
      <h2 className="text-subtitle font-semibold opacity-30 lg:col-span-2">
        {section.title}
      </h2>
      <div className="lg:col-span-5">
        <ul className="text-base leading-[1.2] font-semibold text-balance space-y-1">
          {section.items.map((item) => (
            <li key={item.text}>
              {item.href?.startsWith("/") ? (
                <TransitionTrigger
                  href={item.href}
                  className="text-left underline underline-offset-4 decoration-foreground/30 hover:opacity-60 transition-opacity cursor-pointer"
                >
                  {item.text}
                </TransitionTrigger>
              ) : item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-60 transition-opacity"
                >
                  {item.text}
                </a>
              ) : (
                item.text
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
