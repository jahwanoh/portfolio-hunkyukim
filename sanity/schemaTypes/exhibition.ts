import { orderRankField, orderRankOrdering } from "@sanity/orderable-document-list";
import { defineArrayMember, defineField, defineType } from "sanity";

export const exhibition = defineType({
  name: "exhibition",
  title: "Exhibition",
  type: "document",
  fields: [
    // Position set by dragging in the Exhibitions list; new exhibitions go on top
    orderRankField({ type: "exhibition", newItemPosition: "before" }),
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      description: "Page address, e.g. /projects/pure-war. Click Generate.",
      type: "slug",
      options: { source: "title" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "year",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "venue",
      description: "e.g. High Art, Paris, France",
      type: "string",
    }),
    defineField({
      name: "category",
      title: "Type",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      options: {
        list: ["Solo Exhibition", "Group Exhibition", "Art Fair"],
      },
    }),
    defineField({
      name: "description",
      description: "Press release or introduction. Separate paragraphs with an empty line",
      type: "text",
      rows: 10,
    }),
    defineField({
      name: "installationViews",
      title: "Installation views",
      description: "Exhibition view photos (2–4 recommended). Shown between the description and the works.",
      type: "array",
      of: [defineArrayMember({ type: "image" })],
      options: { layout: "grid" },
    }),
    defineField({
      name: "photoCredit",
      title: "Installation photo credit",
      description: "e.g. Photo: Name. Courtesy of the artist and Perrotin",
      type: "string",
    }),
    defineField({
      name: "artworks",
      description: "Drag several images here at once, then fill in each work's details",
      type: "array",
      of: [
        defineArrayMember({
          type: "image",
          name: "artwork",
          fields: [
            defineField({ name: "title", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "year", type: "string" }),
            defineField({ name: "medium", type: "string", initialValue: "Pigment on silk" }),
            defineField({ name: "dimensions", description: "e.g. 85 × 115 cm", type: "string" }),
            defineField({
              name: "cover",
              title: "Use as exhibition thumbnail",
              description: "Shown on the home page card. Defaults to the first work.",
              type: "boolean",
              initialValue: false,
            }),
          ],
          preview: {
            select: { title: "title", year: "year", media: "asset", cover: "cover" },
            prepare: ({ title, year, media, cover }) => ({
              title: title || "Untitled",
              subtitle: [year, cover && "Thumbnail"].filter(Boolean).join(" · "),
              media,
            }),
          },
        }),
      ],
    }),
  ],
  orderings: [
    orderRankOrdering,
    { title: "Year (newest)", name: "yearDesc", by: [{ field: "year", direction: "desc" }] },
  ],
  preview: {
    select: { title: "title", year: "year", venue: "venue", media: "artworks.0.asset" },
    prepare: ({ title, year, venue, media }) => ({
      title,
      subtitle: [year, venue].filter(Boolean).join(" · "),
      media,
    }),
  },
});
