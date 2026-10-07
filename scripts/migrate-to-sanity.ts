// One-time import of the original site content into Sanity.
// Run: npx sanity exec scripts/migrate-to-sanity.ts --with-user-token
// Safe to re-run: documents use fixed IDs and identical images are deduplicated.

import { createReadStream } from "node:fs";
import path from "node:path";
import { getCliClient } from "sanity/cli";
import {
  about,
  exhibitions,
  featuredWork,
  info,
  press,
  projects,
  type AboutSection,
} from "./seed-content";

const client = getCliClient({ apiVersion: "2025-01-01" });

async function uploadImage(url: string) {
  const file = path.join(process.cwd(), "public", url);
  const filename = url.replace(/^\/images\//, "").replaceAll("/", "-");
  const asset = await client.assets.upload("image", createReadStream(file), {
    filename,
  });
  console.log(`  uploaded ${filename}`);
  return { _type: "reference" as const, _ref: asset._id };
}

const toEntries = (items: AboutSection["items"]) =>
  items.map((item, index) => ({
    _key: `entry${index}`,
    _type: "entry",
    text: item.text,
    url: item.href,
  }));

const toSections = (sections: AboutSection[]) =>
  sections.map((section, index) => ({
    _key: `section${index}`,
    _type: "section",
    title: section.title,
    items: toEntries(section.items),
  }));

async function main() {
  const transaction = client.transaction();

  let featured: Record<string, unknown> | undefined;

  for (const project of projects) {
    console.log(`Exhibition: ${project._title}`);
    const artworks = [];
    for (const [index, media] of project.media.entries()) {
      const asset = await uploadImage(media.url);
      if (media === featuredWork.media) {
        featured = {
          _type: "featuredWork",
          image: { _type: "image", asset },
          title: media.title,
          year: media.year,
          medium: media.medium,
          dimensions: media.dimensions,
          exhibition: { _type: "reference", _ref: `exhibition-${project._slug}` },
        };
      }
      artworks.push({
        _key: `artwork${index}`,
        _type: "artwork",
        asset,
        title: media.title,
        year: media.year,
        medium: media.medium,
        dimensions: media.dimensions,
        cover: media.alt === project.cover,
      });
    }

    transaction.createOrReplace({
      _id: `exhibition-${project._slug}`,
      _type: "exhibition",
      title: project._title,
      slug: { _type: "slug", current: project._slug },
      year: project.year,
      venue: project.venue,
      category: project.category,
      description: project.description.join("\n\n"),
      artworks,
    });
  }

  transaction.createOrReplace({
    _id: "settings",
    _type: "settings",
    title: info.title,
    subtitle: info.subtitle,
    heading: info.heading,
    featuredWork: featured,
    links: info.links.map((link, index) => ({
      _key: `link${index}`,
      _type: "link",
      label: link._title,
      url: link.link,
    })),
    email: info.email,
    phone: info.phone,
    address: info.address,
  });

  console.log("CV & Press");
  transaction.createOrReplace({
    _id: "cv",
    _type: "cv",
    photo: { _type: "image", asset: await uploadImage(about.photo.url) },
    aboutSections: toSections(about.sections),
    exhibitionSections: toSections(exhibitions),
    press: toEntries(press.items),
  });

  await transaction.commit();
  console.log("Done.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
