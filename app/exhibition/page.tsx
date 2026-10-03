import { InfoPage } from "@/components/info-page";
import { exhibitions } from "@/lib/content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exhibition",
};

export default function Exhibition() {
  return <InfoPage title="Exhibition" sections={exhibitions} />;
}
