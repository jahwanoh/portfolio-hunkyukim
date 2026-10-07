import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site Settings")
        .id("settings")
        .child(S.document().schemaType("settings").documentId("settings")),
      // Drag to reorder; this order is used on the site
      orderableDocumentListDeskItem({ type: "exhibition", title: "Exhibitions", S, context }),
      S.listItem()
        .title("CV & Press")
        .id("cv")
        .child(S.document().schemaType("cv").documentId("cv")),
    ]);
