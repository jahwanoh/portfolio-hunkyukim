import { getInfo } from "@/lib/content";
import React from "react";
import { HeaderLink } from "./link";
import { Contact } from "./contact";
import { MobileMenu } from "./mobile-menu";
import { TransitionTrigger } from "../transition-trigger";

const links = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Exhibition",
    href: "/exhibition",
  },
];

export const Header = async () => {
  const info = await getInfo();

  return (
    <header className="px-sides flex justify-between lg:grid grid-cols-12 gap-gap h-header items-center sticky top-0 z-50 bg-background">
      <TransitionTrigger
        href="/"
        className={
          // Long names shorten with "…" on small screens so Menu stays visible
          "text-subtitle col-span-4 font-black uppercase cursor-pointer text-left min-w-0 truncate lg:w-max lg:overflow-visible"
        }
      >
        <span>{info.title}</span>
      </TransitionTrigger>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-2 col-span-6">
        {links.map((item) => (
          <HeaderLink key={item.label} href={item.href}>
            {item.label}
          </HeaderLink>
        ))}
        <Contact info={info}>
          <button className="font-semibold text-subtitle transition-opacity duration-300 ease-quad-out opacity-30 hover:opacity-60">
            Contact
          </button>
        </Contact>
      </nav>

      {/* Mobile Menu */}
      <div className="lg:hidden justify-self-end shrink-0">
        <MobileMenu info={info} />
      </div>

      <p
        className={
          "hidden lg:block text-subtitle font-semibold col-span-2 justify-self-end opacity-30"
        }
      >
        {info.subtitle}
      </p>
    </header>
  );
};
