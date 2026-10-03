"use client";

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schemaTypes, singletonTypes } from "./sanity/schemaTypes";
import { structure } from "./sanity/structure";

export default defineConfig({
  basePath: "/studio",
  title: "Hun Kyu Kim",
  projectId,
  dataset,
  schema: {
    types: schemaTypes,
    // Hide singletons from "Create new document"
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
  document: {
    // Singletons can't be duplicated or deleted
    actions: (actions, { schemaType }) =>
      singletonTypes.has(schemaType)
        ? actions.filter(({ action }) => action && ["publish", "discardChanges", "restore"].includes(action))
        : actions,
  },
  plugins: [structureTool({ structure }), visionTool({ defaultApiVersion: apiVersion })],
});
