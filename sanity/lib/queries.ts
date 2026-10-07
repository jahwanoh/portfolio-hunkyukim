import { defineQuery } from "next-sanity";

const image = /* groq */ `
  "url": asset->url,
  "width": asset->metadata.dimensions.width,
  "height": asset->metadata.dimensions.height,
  "lqip": asset->metadata.lqip
`;

const artwork = /* groq */ `
  _key, title, year, medium, dimensions, cover, ${image}
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

export const featuredWorkQuery = defineQuery(`
  *[_id == "settings"][0].featuredWork{
    title, year, medium, dimensions,
    "url": image.asset->url,
    "width": image.asset->metadata.dimensions.width,
    "height": image.asset->metadata.dimensions.height,
    "lqip": image.asset->metadata.lqip,
    "exhibition": exhibition->{ ${exhibition} }
  }
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
