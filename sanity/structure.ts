import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site Settings")
        .id("settings")
        .child(S.document().schemaType("settings").documentId("settings")),
      S.documentTypeListItem("exhibition").title("Exhibitions"),
      S.listItem()
        .title("CV & Press")
        .id("cv")
        .child(S.document().schemaType("cv").documentId("cv")),
    ]);
