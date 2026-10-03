import { defineQuery } from "next-sanity";

const image = /* groq */ `
  "url": asset->url,
  "width": asset->metadata.dimensions.width,
  "height": asset->metadata.dimensions.height,
  "lqip": asset->metadata.lqip
`;

const artwork = /* groq */ `
  _key, title, year, medium, dimensions, cover, featured, ${image}
`;

const exhibition = /* groq */ `
  title,
  "slug": slug.current,
  year,
  venue,
  category,
  description,
  "artworks": artworks[defined(asset)]{ ${artwork} }
`;

export const settingsQuery = defineQuery(`
  *[_id == "settings"][0]{ title, subtitle, heading, links[]{ label, url }, email, phone, address }
`);

export const exhibitionsQuery = defineQuery(`
  *[_type == "exhibition" && defined(slug.current)] | order(year desc, _createdAt desc){ ${exhibition} }
`);

export const cvQuery = defineQuery(`
  *[_id == "cv"][0]{
    "photo": photo{ ${image} },
    aboutSections[]{ title, items[]{ text, url } },
    exhibitionSections[]{ title, items[]{ text, url } },
    press[]{ text, url }
  }
`);
