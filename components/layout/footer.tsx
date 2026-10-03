import { getInfo } from "@/lib/content";
import React from "react";
import { ContactItem } from "./contact-item";
import { SocialLinks } from "../social-links";

export const Footer = async () => {
  const info = await getInfo();

  return (
    <footer className="px-sides flex flex-col lg:grid grid-cols-12 gap-6 lg:gap-gap py-12">
      <SocialLinks links={info.links} className="col-span-3" />
      <div className="col-span-9 flex flex-col space-y-4 lg:space-y-0">
        {info.phone && (
          <ContactItem
            label="Phone"
            value={info.phone}
            href={`tel:${info.phone}`}
            ariaLabel="Phone link"
          />
        )}
        <p className="text-subtitle font-semibold opacity-30 mt-12">
          © {new Date().getFullYear()} {info.title}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
