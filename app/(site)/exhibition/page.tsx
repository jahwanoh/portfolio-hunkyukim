import { InfoPage } from "@/components/info-page";
import { getExhibitionHistory } from "@/lib/content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exhibition",
};

export default async function Exhibition() {
  const exhibitions = await getExhibitionHistory();
  return <InfoPage title="Exhibition" sections={exhibitions} />;
}
