import { defineArrayMember, defineField, defineType } from "sanity";

export const settings = defineType({
  name: "settings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      description: "Shown next to the name in the header (e.g. Painter)",
      type: "string",
    }),
    defineField({
      name: "heading",
      title: "Home intro",
      description: "Text at the top of the home page",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "links",
      title: "Links",
      description: "Shown on the home page, footer and mobile menu",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "link",
          fields: [
            defineField({ name: "label", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "url", type: "url", validation: (rule) => rule.required() }),
          ],
          preview: { select: { title: "label", subtitle: "url" } },
        }),
      ],
    }),
    defineField({ name: "email", type: "string" }),
    defineField({ name: "phone", type: "string" }),
    defineField({ name: "address", type: "string" }),
  ],
  preview: { prepare: () => ({ title: "Site Settings" }) },
});
