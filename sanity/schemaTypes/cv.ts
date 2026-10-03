import { defineArrayMember, defineField, defineType } from "sanity";

const entry = defineArrayMember({
  type: "object",
  name: "entry",
  fields: [
    defineField({ name: "text", type: "string", validation: (rule) => rule.required() }),
    defineField({
      name: "url",
      title: "Link (optional)",
      description: "Full URL, or a site page like /projects/pure-war",
      type: "string",
    }),
  ],
  preview: { select: { title: "text", subtitle: "url" } },
});

const section = defineArrayMember({
  type: "object",
  name: "section",
  fields: [
    defineField({ name: "title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "items", type: "array", of: [entry] }),
  ],
  preview: { select: { title: "title" } },
});

export const cv = defineType({
  name: "cv",
  title: "CV & Press",
  type: "document",
  fields: [
    defineField({ name: "photo", title: "About photo", type: "image" }),
    defineField({
      name: "aboutSections",
      title: "About sections",
      description: "e.g. Education, Residencies, Prizes",
      type: "array",
      of: [section],
    }),
    defineField({
      name: "exhibitionSections",
      title: "Exhibition history",
      description: "Shown on the Exhibition page (Solo, Group)",
      type: "array",
      of: [section],
    }),
    defineField({
      name: "press",
      description: "Shown at the bottom of the About page",
      type: "array",
      of: [entry],
    }),
  ],
  preview: { prepare: () => ({ title: "CV & Press" }) },
});
