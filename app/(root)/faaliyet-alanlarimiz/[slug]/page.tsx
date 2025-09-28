import InnerBanner from "@/components/global/inner-banner";
import PAContent from "@/components/practice-areas/single/PAContent";
import PreFooter from "@/components/shared/PreFooter";
import { PAData, slugify } from "@/lib/data";

import singlepabanner from "@/public/assets/single-practice-banner.jpg";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Faaliyet alanlarımız - Pusula Hukuk",
  description: "Your one stop solution for legal matters",
};

const page = ({ params }: { params: { slug: string } }) => {
  const area = PAData.find((l) => slugify(l.title) === params.slug);
  if (!area) notFound();

  return (
    <>
      <InnerBanner text={area.title} image={singlepabanner} />

      <PAContent text={area.info} />
      <PreFooter />
    </>
  );
};

export default page;
