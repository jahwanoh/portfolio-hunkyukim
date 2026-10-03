import { ImageResponse } from "next/og";
import { getFeaturedWork, getInfo } from "@/lib/content";

export const alt = "Hun Kyu Kim";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const revalidate = 3600;

const PADDING = 48;
const IMAGE_BOX = { width: 560, height: size.height - PADDING * 2 };

// Geist (the site font) from Google Fonts; falls back to the default font if unavailable
async function loadFont(weight: number) {
  try {
    const css = await (
      await fetch(`https://fonts.googleapis.com/css2?family=Geist:wght@${weight}`)
    ).text();
    const url = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)?.[1];
    return url ? await (await fetch(url)).arrayBuffer() : undefined;
  } catch {
    return undefined;
  }
}

export default async function OpengraphImage() {
  const [info, featured, bold, regular] = await Promise.all([
    getInfo(),
    getFeaturedWork(),
    loadFont(800),
    loadFont(500),
  ]);
  const fonts = [
    bold && { name: "Geist", data: bold, weight: 800 as const },
    regular && { name: "Geist", data: regular, weight: 500 as const },
  ].filter((font) => !!font);
  const media = featured?.media;

  // Fit the artwork inside its box without cropping
  const scale = media
    ? Math.min(IMAGE_BOX.width / media.width, IMAGE_BOX.height / media.height)
    : 0;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          padding: PADDING,
          background: "white",
          color: "black",
          fontFamily: "Geist",
          fontWeight: 500,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: size.width - PADDING * 3 - IMAGE_BOX.width }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 72, fontWeight: 800, textTransform: "uppercase", lineHeight: 0.95 }}>
              {info.title || "Hun Kyu Kim"}
            </div>
            {info.subtitle && (
              <div style={{ display: "flex", fontSize: 40, fontWeight: 800, color: "#a1a1aa", textTransform: "uppercase", marginTop: 16 }}>
                {info.subtitle}
              </div>
            )}
          </div>
          {media?.title && (
            <div style={{ display: "flex", flexDirection: "column", fontSize: 24, color: "#71717a" }}>
              <span style={{ fontStyle: "italic", color: "black" }}>{media.title}</span>
              <span>{[media.year, media.medium, media.dimensions].filter(Boolean).join(", ")}</span>
            </div>
          )}
        </div>
        {media && (
          <div style={{ display: "flex", width: IMAGE_BOX.width, height: IMAGE_BOX.height, alignItems: "center", justifyContent: "flex-end" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${media.url}?w=1200&fm=jpg&q=80`}
              width={Math.round(media.width * scale)}
              height={Math.round(media.height * scale)}
              alt=""
            />
          </div>
        )}
      </div>
    ),
    { ...size, fonts: fonts.length ? fonts : undefined }
  );
}
